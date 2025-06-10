"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  delay?: number
}

export function AnimatedImage({ src, alt, width, height, className = "", delay = 0 }: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      <div className="overflow-hidden rounded-lg shadow-xl">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
