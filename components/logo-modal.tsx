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
            src="/logo/logo.png"
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl">
            {/* Close Button - Outside the main content for better visibility */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-[110] p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/10 group backdrop-blur-md"
              aria-label="Close modal">
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Backdrop click-to-close */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setIsOpen(false)} 
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
              className="relative z-[105] w-full h-full flex items-center justify-center p-6 md:p-24 pointer-events-none">
              
              <div className="relative max-w-full max-h-full flex items-center justify-center pointer-events-auto">
                <Image
                  src="/logo/logo.png"
                  alt="VISIONIX Logo"
                  width={1200}
                  height={1200}
                  className="w-auto h-auto max-w-[90vw] max-h-[85vh] object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.2)]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
