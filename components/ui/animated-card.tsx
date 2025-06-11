"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AnimatedCardProps {
  title?: string
  children: React.ReactNode
  className?: string
  delay?: number
  headerClassName?: string
  onClick?: () => void
}

export function AnimatedCard({
  title,
  children,
  className = "",
  delay = 0,
  headerClassName = "",
  onClick,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className={className}
      onClick={onClick}
    >
      <Card className="overflow-hidden h-full border-none shadow-lg bg-white/90 backdrop-blur-sm">
        {title && (
          <CardHeader className={headerClassName}>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
        )}
        <CardContent className={!title ? "pt-6" : ""}>{children}</CardContent>
      </Card>
    </motion.div>
  )
}
