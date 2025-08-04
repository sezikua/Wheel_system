"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"

type DiscType = "doubling" | "interrow" | "custom"

export default function OrderPageClient() {
  const [selectedType, setSelectedType] = useState<DiscType | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const discTypes = [
    {
      id: "doubling" as DiscType,
      title: `Система здвоювання широкі диски`,
      description: `Для збільшення стабільності та зниження тиску на ґрунт`,
      image: "/images/system-doubling.png",
      options: [`Передні + задні`, `Задні`, `Свій варіант (користувач прописує сам)`],
    },
    {
      id: "interrow" as DiscType,
      title: `Для роботи в міжрядді`,
      description: `Вузькі диски для точного міжрядного обробітку`,
      image: "/images/interrow-cultivation.png",
      options: [
        `Передні + задні`,
        `Здвоєні задні + одинарні передні`,
        `Здвоєні передні + здвоєні задні`,
        `Свій варіант (користувач прописує сам)`,
      ],
    },
    {
      id: "custom" as DiscType,
      title: `Свій варіант`,
      description: `Індивідуальне рішення (Виготовлення основних дисків, ремонт і т.д.)`,
      image: "/images/custom-solutions.png",
      options: [`Свій варіант (користувач прописує сам)`],
    },
  ]

  const handleNext = () => {
    if (selectedType) {
      window.location.href = `/order/manufacturer?type=${selectedType}`
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/90 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/twinforce-logo.png"
                alt="Twinforce Wheels Logo"
                width={90}
                height={22}
                className="h-5 w-auto sm:h-6 md:h-7"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-6"
            >
              <Link
                href="/"
                className="text-gray-600 hover:text-green-600 transition-colors relative group text-sm lg:text-base"
              >
                {`Головна`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-green-600 transition-colors relative group text-sm lg:text-base"
              >
                {`Про нас`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contacts"
                className="text-gray-600 hover:text-green-600 transition-colors relative group text-sm lg:text-base"
              >
                {`Контакти`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/order" className="text-green-600 font-medium relative group text-sm lg:text-base">
                {`Замовити`}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600"></span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="p-2">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            <div className="hidden md:block w-[90px] lg:w-[120px]"></div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-gray-200 mt-2 pt-2 pb-2"
              >
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 py-2 px-2 rounded-md hover:bg-green-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {`Головна`}
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-green-600 py-2 px-2 rounded-md hover:bg-green-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {`Про нас`}
                  </Link>
                  <Link
                    href="/contacts"
                    className="text-gray-600 hover:text-green-600 py-2 px-2 rounded-md hover:bg-green-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {`Контакти`}
                  </Link>
                  <Link
                    href="/order"
                    className="text-green-600 font-medium py-2 px-2 rounded-md hover:bg-green-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {`Замовити`}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 sm:py-8 pt-16 sm:pt-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button asChild variant="ghost" className="mb-4 sm:mb-6 group">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {`Повернутися на головну`}
            </Link>
          </Button>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 overflow-x-auto pb-2">
            <div className="flex items-center flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                1
              </div>
              <span className="ml-1 sm:ml-2 text-green-600 font-medium text-xs sm:text-sm">{`Тип дисків`}</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-gray-300 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                2
              </div>
              <span className="ml-1 sm:ml-2 text-gray-500 text-xs sm:text-sm">{`Виробник`}</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-gray-300 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                3
              </div>
              <span className="ml-1 sm:ml-2 text-gray-500 text-xs sm:text-sm">{`Модель`}</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-gray-300 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                4
              </div>
              <span className="ml-1 sm:ml-2 text-gray-500 text-xs sm:text-sm">{`Контакти`}</span>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <SectionHeading title={`Замовлення дисків`} subtitle={`Крок 1: Виберіть для чого потрібні диски`} />

        {/* Disc Type Selection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {discTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className={`cursor-pointer transition-all p-4 rounded-lg border ${
                selectedType === type.id
                  ? "ring-2 ring-green-600 shadow-md bg-green-50/50 border-green-200"
                  : "hover:shadow-sm bg-white border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <div className="aspect-video mb-3 sm:mb-4 overflow-hidden rounded-lg">
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
              <h3 className="text-base sm:text-lg font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{type.description}</p>
              <div className="space-y-2">
                <p className="font-medium text-xs sm:text-sm text-gray-700">{`Варіанти:`}</p>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                  {type.options.map((option, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-600 rounded-full mr-2 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="leading-tight">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {selectedType === type.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-3 sm:mt-4 p-2 bg-green-100 rounded-lg"
                >
                  <p className="text-green-700 text-xs sm:text-sm font-medium flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> {`Вибрано`}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <Button asChild variant="outline" className="group w-full sm:w-auto">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {`Назад`}
            </Link>
          </Button>

          <Button
            onClick={handleNext}
            disabled={!selectedType}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 group w-full sm:w-auto"
          >
            {`Далі: Вибір виробника`}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 sm:mt-12 bg-blue-50 rounded-lg p-4 sm:p-6 shadow-md"
        >
          <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">{`Потрібна допомога з вибором?`}</h3>
          <p className="text-blue-700 mb-3 sm:mb-4 text-sm sm:text-base">
            {`Якщо ви не впевнені, який тип дисків вам потрібен, зв'яжіться з нашим менеджером для отримання безкоштовної
            консультації.`}
          </p>
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group w-full sm:w-auto"
          >
            <a href="tel:+380686007030">
              <Phone className="w-4 h-4 mr-2" />
              {`Зателефонувати менеджеру`}
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
