"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"

type Manufacturer = {
  id: string
  name: string
  country: string
  image: string
  description: string
}

export default function ManufacturerPageClient() {
  const searchParams = useSearchParams()
  const discType = searchParams.get("type")
  const [selectedManufacturer, setSelectedManufacturer] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const manufacturers: Manufacturer[] = [
    {
      id: "john-deere",
      name: `John Deere`,
      country: `США`,
      image: "/images/john-deere.png",
      description: `Провідний американський виробник сільськогосподарської техніки`,
    },
    {
      id: "case-ih",
      name: `Case IH`,
      country: `США`,
      image: "/images/case-ih.png",
      description: `Частина CNH Industrial, відомий надійністю та інноваціями`,
    },
    {
      id: "massey-ferguson",
      name: `Massey Ferguson`,
      country: `США`,
      image: "/images/massey-ferguson.png",
      description: `Частина AGCO, один з найстаріших брендів тракторів`,
    },
    {
      id: "kubota",
      name: `Kubota`,
      country: `Японія`,
      image: "/images/kubota.png",
      description: `Японська якість та надійність у сільськогосподарській техніці`,
    },
    {
      id: "new-holland",
      name: `New Holland`,
      country: `США/Італія`,
      image: "/images/new-holland.png",
      description: `Частина CNH Industrial, поєднання американських та європейських технологій`,
    },
    {
      id: "fendt",
      name: `Fendt`,
      country: `Німеччина`,
      image: "/images/fendt.png",
      description: `Німецька інженерія та преміум якість`,
    },
    {
      id: "claas",
      name: `CLAAS`,
      country: `Німеччина`,
      image: "/images/claas.png",
      description: `Німецький виробник з багаторічним досвідом`,
    },
    {
      id: "deutz-fahr",
      name: `Deutz-Fahr`,
      country: `Німеччина`,
      image: "/images/deutz-fahr.png",
      description: `Частина SDF Group, німецькі технології`,
    },
    {
      id: "landini",
      name: `Landini`,
      country: `Італія`,
      image: "/images/landini.png",
      description: `Італійський виробник з багатою історією`,
    },
    {
      id: "no-equipment",
      name: `Не має техніки в списку`,
      country: ``,
      image: "/images/no-equipment-tractor.png",
      description: `Оберіть цей варіант, якщо вашої техніки немає в переліку. Ви зможете вказати деталі в коментарях.`,
    },
  ]

  const handleNext = (manufacturerId: string) => {
    if (manufacturerId === "no-equipment") {
      window.location.href = `/order/contact?type=${discType}&manufacturer=${manufacturerId}&series=custom&model=custom`
    } else {
      window.location.href = `/order/series?type=${discType}&manufacturer=${manufacturerId}`
    }
  }

  const handleBack = () => {
    window.location.href = "/order"
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

      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button asChild variant="ghost" className="mb-6 group">
            <Link href="/order">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {`Повернутися до вибору типу дисків`}
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
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">{`Тип дисків`}</span>
            </div>
            <div className="w-8 h-px bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                2
              </div>
              <span className="ml-2 text-green-600 font-medium">{`Виробник`}</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <span className="ml-2 text-gray-500">{`Модель`}</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <span className="ml-2 text-gray-500">{`Контакти`}</span>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <SectionHeading title={`Вибір виробника`} subtitle={`Крок 2: Оберіть виробника вашого трактора`} />

        {/* Manufacturer Selection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {manufacturers.map((manufacturer, index) => (
            <motion.div
              key={manufacturer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className={`cursor-pointer transition-all p-4 rounded-lg border ${
                selectedManufacturer === manufacturer.id
                  ? "ring-2 ring-green-600 shadow-md bg-green-50/50 border-green-200"
                  : "hover:shadow-sm bg-white border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedManufacturer(manufacturer.id)}
            >
              <div className="text-center">
                <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image
                      src={manufacturer.image || "/placeholder.svg"}
                      alt={manufacturer.name}
                      width={200}
                      height={150}
                      className="w-full h-full object-contain p-4"
                    />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{manufacturer.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{`(${manufacturer.country})`}</p>
              </div>
              <p className="text-gray-600 text-sm text-center mb-4">{manufacturer.description}</p>
              {selectedManufacturer === manufacturer.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-4 p-2 bg-green-100 rounded-lg"
                >
                  <p className="text-green-700 text-sm font-medium text-center flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> {`Вибрано`}
                  </p>
                </motion.div>
              )}
              {selectedManufacturer === manufacturer.id && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext(manufacturer.id)
                  }}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 w-full group"
                >
                  {`Далі: Вибір серії`}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-blue-50 rounded-lg p-6 shadow-md"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-2">{`Не знаєте виробника вашого трактора?`}</h3>
          <p className="text-blue-700 mb-4">
            {`Зв'яжіться з нашим менеджером, і він допоможе визначити виробника та модель за фотографією або серійним
            номером трактора.`}
          </p>
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group"
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
