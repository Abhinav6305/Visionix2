'use client'
import Link from 'next/link'
import {Menu, X} from 'lucide-react'
import {Button} from '@/components/ui/button'
import React from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { LogoModal } from '@/components/logo-modal'

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState ? 'active' : 'closed'}
                className="group bg-background/80 fixed z-50 w-full border-b border-white/10 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between py-4 lg:py-5">
                        <div className="flex items-center justify-between w-full lg:w-auto">
                            <LogoModal />

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-50 p-2 lg:hidden text-foreground hover:bg-white/10 rounded-lg transition-colors">
                                <Menu
                                    className={`size-6 transition-all duration-300 ${menuState ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
                                />
                                <X 
                                    className={`absolute inset-0 m-auto size-6 transition-all duration-300 ${menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
                                />
                            </button>
                        </div>

                        {/* Mobile Menu Overlay */}
                        <div
                            className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuState ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onClick={() => setMenuState(false)}
                        />

                        {/* Nav Links Container */}
                        <div
                            className={`
                                fixed lg:relative top-[73px] lg:top-0 left-0 w-full lg:w-auto
                                bg-background lg:bg-transparent
                                border-b lg:border-none
                                p-6 lg:p-0
                                z-40 lg:z-auto
                                transition-all duration-300 ease-in-out
                                ${menuState ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 lg:translate-y-0 opacity-0 lg:opacity-100 invisible lg:visible'}
                                lg:flex lg:items-center lg:gap-8
                            `}>
                            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full lg:w-auto">
                                <nav className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full lg:w-auto">
                                    <Link href="#products" onClick={() => setMenuState(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                                        Products
                                    </Link>
                                    <Link href="#services" onClick={() => setMenuState(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                                        Services
                                    </Link>
                                    <Link href="#team" onClick={() => setMenuState(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                                        Team
                                    </Link>
                                    <Link href="#contact" onClick={() => setMenuState(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                                        Contact
                                    </Link>
                                </nav>
                                <div className="h-px lg:h-4 w-full lg:w-px bg-white/10 lg:bg-white/20" />
                                <Button
                                    asChild
                                    size="sm"
                                    className="w-full lg:w-auto font-semibold tracking-wide">
                                    <Link href="#contact" onClick={() => setMenuState(false)}>
                                        Get In Touch
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
