import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import DecryptedText from "@/components/DecryptedText";
import { transitionVariants } from "@/lib/utils";

export default function HeroSection() {
    return (
        <main className="overflow-x-hidden min-h-[100dvh] flex flex-col justify-center pt-[80px] lg:pt-0">
            <section className='relative w-full py-12 md:py-24 lg:h-screen lg:flex lg:items-center'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-4xl mx-auto lg:mx-0 lg:text-left text-center">
                        <div className='inline-block mb-6 lg:mb-10'>
                            <DecryptedText
                                text="Building Tomorrow's Solutions Today"
                                animateOn="view"
                                revealDirection="start"
                                sequential
                                useOriginalCharsOnly={false}
                                speed={70}
                                className='font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest'
                            />
                        </div>
                        
                        <div className="space-y-1 md:space-y-2">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white">
                                Innovate
                            </TextEffect>
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-primary">
                                Transform
                            </TextEffect>
                        </div>

                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mt-8 md:mt-10 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto lg:mx-0">
                            We deliver cutting-edge products and services to transform your business and drive sustainable growth through innovation and technology.
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
                            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto px-8 h-14 text-base font-bold rounded-full group overflow-hidden relative">
                                <Link href="#contact">
                                    <span className="relative z-10">Get Started</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto px-8 h-14 text-base font-bold rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                                <Link href="#services">
                                    <span>Explore Services</span>
                                </Link>
                            </Button>
                        </AnimatedGroup>
                    </div>
                </div>
            </section>
        </main>
    )
}
