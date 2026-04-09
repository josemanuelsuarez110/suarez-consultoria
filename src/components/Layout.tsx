import React from 'react'
import { motion } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section 
      id={id}
      className={cn("py-20 px-6 max-w-7xl mx-auto overflow-hidden", className)}
    >
      {children}
    </section>
  )
}

export const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
