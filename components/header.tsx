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
                data-state={menuState && 'active'}
                className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <LogoModal />

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu
                                    className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200"/>
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200"/>
                            </button>
                        </div>

                        <div
                            className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <nav className="flex flex-col w-full space-y-3 sm:flex-row sm:gap-6 sm:space-y-0 md:w-fit">
                                <Link href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Products
                                </Link>
                                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Services
                                </Link>
                                <Link href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Team
                                </Link>
                                <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Contact
                                </Link>
                            </nav>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="#contact">
                                        <span>Get In Touch</span>
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
