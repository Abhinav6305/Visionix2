import React from "react"
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import './globals.css'
import Dither from "@/components/Dither";
import FooterSection from "@/components/footer";
import {HeroHeader} from "@/components/header";

const _geist = Geist({subsets: ["latin"]});
const _geistMono = Geist_Mono({subsets: ["latin"]});

export const metadata: Metadata = {
    title: 'VISIONIX — Innovate & Transform | Solutions for Tomorrow',
    description: 'VISIONIX delivers cutting-edge products and services to transform your business and drive sustainable growth. Explore our innovative solutions and expert team.',
    generator: 'v0.app',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
        <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>
        <div className='fixed inset-0 w-full h-full z-[-1]'>
            <Dither
                waveColor={[0.3, 0.3, 0.3]}
                disableAnimation={false}
                enableMouseInteraction
                mouseRadius={0.3}
                colorNum={4}
                pixelSize={2}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />
        </div>
        <HeroHeader/>
        {children}
        <FooterSection/>
        <Analytics/>
        </body>
        </html>
    )
}
