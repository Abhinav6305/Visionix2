'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export function LogoModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative inline-flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 group flex-shrink-0"
        aria-label="View VISIONIX logo"
        suppressHydrationWarning>
        <div className="relative w-9 h-9 flex-shrink-0">
          <Image
            src="/visionix-logo.png"
            alt="VISIONIX"
            fill
            className="rounded-lg object-contain"
            sizes="36px"
            priority
          />
        </div>
        <span className='font-mono text-base font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70'>VISIONIX</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="relative max-w-2xl w-full bg-background dark:bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                  aria-label="Close modal">
                  <X className="w-5 h-5" />
                </button>

                {/* Logo Container */}
                <div className="aspect-video w-full relative overflow-hidden bg-zinc-950 flex items-center justify-center border-b border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-primary/20" />
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="relative w-full h-full p-12 flex items-center justify-center">
                    <Image
                      src="/visionix-logo.png"
                      alt="VISIONIX Logo"
                      width={500}
                      height={500}
                      className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="p-8 space-y-4">
                  <h2 className="text-3xl font-bold">VISIONIX</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Innovating today, transforming tomorrow. Our vision is to deliver cutting-edge solutions that drive sustainable growth and empower businesses worldwide.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-primary mb-3">Our Values</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Innovation at Heart
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Customer-Centric Solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Excellence in Execution
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
