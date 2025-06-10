"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Truck, CheckCircle, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeading } from "@/components/ui/section-heading"

type DiscType = "doubling" | "interrow" | "custom"

export default function OrderPageClient() {
  \
  const [selectedType, setSelectedType] = (useState < DiscType) | null
  )

  const discTypes = [
    {
      id: "doubling" as DiscType,
      title: "Система здвоювання широкі диски",
      description: "Для збільшення стабільності та зниження тиску на ґрунт",
      image: "/images/system-doubling.png",
      options: ["Передні + задні", "Задні", "Свій варіант (користувач прописує сам)"],
    },
    {
      id: "interrow" as DiscType,
      title: "Для роботи в міжрядді",
      description: "Вузькі диски для точного міжрядного обробітку",
      image: "/images/interrow-cultivation.png",
      options: [
        "Передні + задні",
        "Здвоєні задні + одинарні передні",
        "Здвоєні передні + здвоєні задні",
        "Свій варіант (користувач прописує сам)",
      ],
    },
    {
      id: "custom" as DiscType,
      title: "Свій варіант",
      description: "Індивідуальне рішення під ваші потреби",
      image: "/images/custom-solutions.png",
      options: ["Свій варіант (користувач прописує сам)"],
    },
  ]

  const handleNext = () => {
    if (selectedType) {
      // Navigate to manufacturer selection
      window.location.href = `/order/manufacturer?type=${selectedType}`
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-md">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                TractorDiscs
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-6"
            >
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                Головна
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                Про нас
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                Контакти
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/order" className="text-green-600 font-medium relative group">
                Замовити
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button asChild variant="ghost" className="mb-6 group">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Повернутися на головну
            </Link>
          </Button>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                1
              </div>
              <span className="ml-2 text-green-600 font-medium">Тип дисків</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <span className="ml-2 text-gray-500">Виробник</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <span className="ml-2 text-gray-500">Модель</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <span className="ml-2 text-gray-500">Контакти</span>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <SectionHeading title="Замовлення дисків" subtitle="Крок 1: Виберіть для чого потрібні диски" />

        {/* Disc Type Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {discTypes.map((type, index) => (
            <AnimatedCard
              key={type.id}
              delay={0.1 * (index + 1)}
              className={`cursor-pointer transition-all ${
                selectedType === type.id ? "ring-2 ring-green-600 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div className="space-y-2">
                <p className="font-medium text-sm text-gray-700">Варіанти:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {type.options.map((option, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
              {selectedType === type.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-2 bg-green-50 rounded-lg"
                >
                  <p className="text-green-700 text-sm font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> Вибрано
                  </p>
                </motion.div>
              )}
            </AnimatedCard>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-between items-center"
        >
          <Button asChild variant="outline" className="group">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Назад
            </Link>
          </Button>

          <Button
            onClick={handleNext}
            disabled={!selectedType}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 group"
          >
            Далі: Вибір виробника
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-blue-50 rounded-lg p-6 shadow-md"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Потрібна допомога з вибором?</h3>
          <p className="text-blue-700 mb-4">
            Якщо ви не впевнені, який тип дисків вам потрібен, зв'яжіться з нашим менеджером для отримання безкоштовної
            консультації.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group"
          >
            <a href="tel:+380686007030">
              <Phone className="w-4 h-4 mr-2" />
              Зателефонувати менеджеру
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
