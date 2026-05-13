'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import { Zap, Shield, Cpu, Smartphone } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { motion } from 'motion/react'

const products = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance optimized for enterprise-level demands with zero latency"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols to keep your data protected 24/7"
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Advanced machine learning capabilities integrated seamlessly into your workflow"
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Seamless experience across web, mobile, and desktop applications"
  }
]

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.12,
                  type: 'spring',
                  stiffness: 100,
                  damping: 12
                }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <Card
                  className="p-8 border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    className="mb-4 relative z-10"
                    animate={isVisible ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}>
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 relative z-10">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">{product.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
