'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import { Code, Palette, Zap, Settings, Users, TrendingUp } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { motion } from 'motion/react'

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built from the ground up to meet your unique business requirements"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and drive engagement"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Boost your application speed and efficiency with our optimization expertise"
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamless integration of new systems with your existing infrastructure"
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Expand your team with expert developers and designers on demand"
  },
  {
    icon: TrendingUp,
    title: "Consulting",
    description: "Strategic guidance to modernize your tech stack and accelerate growth"
  }
]

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 bg-transparent" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-4xl md:text-5xl font-semibold mb-4">
            Our Services
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.3}
            as="p"
            className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive services to support your business at every stage of growth
          </TextEffect>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const row = Math.floor(index / 3)
            const col = index % 3
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: col === 0 ? -30 : col === 2 ? 30 : 0, y: 30 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: col === 0 ? -30 : col === 2 ? 30 : 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (row * 0.1) + (col * 0.08),
                  type: 'spring',
                  stiffness: 80,
                  damping: 15
                }}
                whileHover={{ y: -12, scale: 1.02 }}>
                <Card
                  className="p-8 border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full overflow-hidden relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={isVisible ? { backgroundPosition: ['0% 0%', '100% 100%'] } : {}}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <div className="mb-4 relative z-10">
                    <motion.div 
                      className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}>
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 relative z-10">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
