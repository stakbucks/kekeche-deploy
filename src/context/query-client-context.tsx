'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

type Props = {
    children: React.ReactNode;
};

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
    if (typeof window === 'undefined') {
        return makeQueryClient();
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
}

export default function QueryClientContext({ children }: Props) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
