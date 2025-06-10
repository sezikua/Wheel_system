"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, subtitle, className = "", align = "center" }: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={`mb-12 ${alignClass[align]} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block"
      >
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
