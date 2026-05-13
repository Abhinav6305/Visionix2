import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import DecryptedText from "@/components/DecryptedText";
import { transitionVariants } from "@/lib/utils";


export default function HeroSection() {
    return (
        <main className="overflow-x-hidden">
            <section className='lg:h-screen'>
                <div
                    className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                    <div className="relative mx-auto flex max-w-xl flex-col px-6 lg:block">
                        <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:text-left">
                            <div className='mt-8 lg:mt-16'>
                            <DecryptedText
                                text="Building Tomorrow&apos;s Solutions Today"
                                animateOn="view"
                                revealDirection="start"
                                sequential
                                useOriginalCharsOnly={false}
                                speed={70}
                                className='font-mono text-muted-foreground bg-black rounded-md uppercase'
                            />
                            </div>
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="max-w-2xl text-balance text-4xl font-semibold md:text-7xl xl:text-8xl">
                                Innovate
                            </TextEffect>
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="max-w-2xl text-balance text-4xl font-semibold md:text-7xl xl:text-8xl">
                                Transform
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground bg-black p-1 rounded-md">
                                We deliver cutting-edge products and services to transform your business and drive sustainable growth.
                            </TextEffect>
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="px-5 text-base">
                                    <Link href="#contact">
                                        <span className="text-nowrap">Get Started</span>
                                    </Link>
                                </Button>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="px-5 text-base bg-black/30 backdrop-blur-sm hover:bg-black/40">
                                    <Link href="#services">
                                        <span className="text-nowrap">Explore Services</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}
