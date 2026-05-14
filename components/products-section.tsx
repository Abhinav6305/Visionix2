'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import { Zap } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { motion } from 'framer-motion'

export default function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 bg-transparent text-white relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-4xl md:text-5xl font-semibold mb-4">
            Our Products
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.3}
            as="p"
            className="text-lg text-muted-foreground max-w-2xl">
            Cutting-edge solutions designed to transform your business and drive growth
          </TextEffect>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, type: 'spring' }}>
            <Card className="p-12 border border-white/10 bg-zinc-900/50 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                  <Zap className="w-3.5 h-3.5" />
                  Upcoming Product
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white italic">
                  VISIONIX <span className="text-primary">DECISIONS</span>
                </h3>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  An AI powered business intelligence platform specifically engineered for SMBs.
                </p>
                
                <div className="mt-12 flex justify-center gap-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
