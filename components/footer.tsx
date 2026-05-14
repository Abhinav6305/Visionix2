import Link from 'next/link'
import Image from 'next/image'
import React from "react";

const links = [
    {
        title: 'Products',
        href: '#products',
    },
    {
        title: 'Services',
        href: '#services',
    },
    {
        title: 'Team',
        href: '#team',
    },
    {
        title: 'Contact',
        href: '#contact',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32 border-t border-border">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-8 flex flex-col items-center gap-6">
                    <Link
                        href="/"
                        aria-label="go home"
                        className="flex flex-col items-center gap-4 group">
                        <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                            <Image 
                                src="/logo/logo.png" 
                                alt="VISIONIX" 
                                fill
                                className="rounded-xl object-contain shadow-2xl shadow-primary/20"
                                sizes="48px"
                            />
                        </div>
                        <span className='font-mono text-base font-bold tracking-[0.3em] text-white uppercase'>VISIONIX</span>
                    </Link>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-muted-foreground text-sm">Phone: <a href="tel:9618587055" className="text-foreground hover:text-primary transition-colors">9618587055</a></p>
                        <p className="text-muted-foreground text-sm">Email: <a href="mailto:abhinavrishisaka@gmail.com" className="text-foreground hover:text-primary transition-colors">abhinavrishisaka@gmail.com</a></p>
                    </div>
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm border-t border-b border-border py-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <span className="text-muted-foreground block text-center text-sm font-mono">© 2026 VISIONIX. All rights reserved. • Built with v0 & Vercel.</span>
            </div>
        </footer>
    )
}
