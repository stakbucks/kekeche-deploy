import { pretendard } from '@/assets/fonts/pretendard';
import { Toaster } from '@/components/ui-shadcn/toast/toaster';
import QueryClientContext from '@/context/query-client-context';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';

import './globals.css';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#ffffff',
};

export const metadata: Metadata = {
    applicationName: '어나더 미',
    title: '어나더 미',
    description: '나만의 작은 세계를 펼치는 특별한 일기',
    manifest: '/manifest.json',
    icons: [
        { rel: 'apple-touch-icon', url: '/icons/icon-128x128.png' },
        { rel: 'icon', url: '/icons/icon-128x128.png' },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head>
                <link
                    href="/splashscreens/iphone5_splash.png"
                    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/iphone6_splash.png"
                    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/iphoneplus_splash.png"
                    media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/iphonex_splash.png"
                    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/iphonexr_splash.png"
                    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/iphonexsmax_splash.png"
                    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/ipad_splash.png"
                    media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/ipadpro1_splash.png"
                    media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/ipadpro3_splash.png"
                    media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="/splashscreens/ipadpro2_splash.png"
                    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <meta name="naver-site-verification" content="6f87b8170cef8604157538c5f66fffce3e688bc2" />
            </head>
            <body className={pretendard.className}>
                <QueryClientContext>{children}</QueryClientContext>
                <Toaster />
                <GoogleAnalytics gaId="G-3ZH553JMHM" />
            </body>
        </html>
    );
}
