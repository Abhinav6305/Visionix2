'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { motion } from 'motion/react'

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "9618587055",
    href: "tel:9618587055"
  },
  {
    icon: Mail,
    label: "Email",
    value: "abhinavrishisaka@gmail.com",
    href: "mailto:abhinavrishisaka@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana India.",
    href: "#"
  }
]

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-transparent" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-4xl md:text-5xl font-semibold mb-4">
            Get In Touch
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.3}
            as="p"
            className="text-lg text-muted-foreground max-w-2xl">
            We'd love to hear from you. Reach out to us with any inquiries or collaborations.
          </TextEffect>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40, rotate: -5 }}
                  animate={isVisible ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -40, rotate: -5 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.12,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ x: 8, scale: 1.02 }}>
                  <a
                    href={contact.href}
                    className="block">
                    <Card className="p-6 border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden relative bg-black/40 backdrop-blur-md">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div 
                          className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mt-1"
                          animate={isVisible ? { y: [0, -6, 0] } : {}}
                          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}>
                          <Icon className="w-6 h-6 text-primary group-hover:scale-125 transition-transform duration-300" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground font-medium mb-1">{contact.label}</p>
                          <p className="text-lg font-semibold group-hover:text-primary transition-colors">{contact.value}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 relative"
            initial={{ opacity: 0, x: 40, rotate: 5 }}
            animate={isVisible ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 40, rotate: 5 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}>
            
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-2xl border border-primary/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/50">
                    <Send className="w-8 h-8 text-primary animate-bounce" />
                  </div>
                  <p className="text-xl font-bold text-white">Message sent successfully!</p>
                  <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            {['name', 'email', 'subject'].map((field, idx) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}>
                <label htmlFor={field} className="block text-sm font-medium mb-2 capitalize">{field}</label>
                <motion.input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field === 'name' ? 'Your name' : field === 'email' ? 'your@email.com' : 'How can we help?'}
                  required
                  whileFocus={{ scale: 1.01, borderColor: 'var(--color-primary)' }}
                  className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all backdrop-blur-sm"
                  suppressHydrationWarning
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your project..."
                required
                rows={5}
                whileFocus={{ scale: 1.01, borderColor: 'var(--color-primary)' }}
                className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all backdrop-blur-sm"
                suppressHydrationWarning
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}>
              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading'}
                className="w-full relative overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={status === 'loading' ? { x: ['-100%', '100%'] } : {}}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
                <span className="flex items-center gap-2 relative z-10">
                  {status === 'loading' ? 'Sending...' : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </span>
              </Button>
              {status === 'error' && (
                <p className="text-red-500 text-sm mt-2 text-center">Failed to send message. Please try again.</p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
