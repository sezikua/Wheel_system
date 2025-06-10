"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AnimatedButtonProps extends ButtonProps {
  delay?: number
}

export function AnimatedButton({ children, delay = 0, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  )
}
