import { Suspense } from 'react';
import { MemberPageContainer } from './memberPageContainer';

export default async function Home({ params: { memberId } }: { params: { memberId: string } }) {
    return (
        <>
            <Suspense fallback={<div>로딩중</div>}>
                <MemberPageContainer memberId={memberId} />
            </Suspense>
        </>
    );
}
