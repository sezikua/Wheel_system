"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
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
      id: "mahindra",
      name: `Mahindra & Mahindra`,
      country: `Індія`,
      image: "/placeholder.svg?height=150&width=200",
      description: `Індійський виробник доступних та надійних тракторів`,
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
  ]

  const handleNext = (manufacturerId: string) => {
    window.location.href = `/order/series?type=${discType}&manufacturer=${manufacturerId}`
  }

  const handleBack = () => {
    window.location.href = "/order"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          {" "}
          {/* Reduced py-4 to py-3 for smaller menu */}
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Image src="/images/twinforce-logo.png" alt="Twinforce Wheels Logo" width={120} height={30} />{" "}
              {/* Adjusted size */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex flex-1 justify-center space-x-6"
            >
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                {`Головна`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                {`Про нас`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                {`Контакти`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/order" className="text-green-600 font-medium relative group">
                {`Замовити`}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600"></span>
              </Link>
            </motion.div>
            <div className="hidden md:block w-[120px]"></div> {/* Adjusted width to match logo */}
          </div>
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
            <AnimatedCard
              key={manufacturer.id}
              delay={0.1 * (index + 1)}
              className={`cursor-pointer transition-all ${
                selectedManufacturer === manufacturer.id ? "ring-2 ring-green-600 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedManufacturer(manufacturer.id)}
            >
              <CardHeader className="text-center">
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
                <CardTitle className="text-lg">{manufacturer.name}</CardTitle>
                <p className="text-sm text-gray-500">{`(${manufacturer.country})`}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">{manufacturer.description}</p>
                {selectedManufacturer === manufacturer.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 p-2 bg-green-50 rounded-lg"
                  >
                    <p className="text-green-700 text-sm font-medium text-center flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-1" /> {`Вибрано`}
                    </p>
                  </motion.div>
                )}
              </CardContent>
              {selectedManufacturer === manufacturer.id && (
                <CardFooter className="pt-0 pb-4 flex justify-center">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext(manufacturer.id)
                    }}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 w-full mt-4 group"
                  >
                    {`Далі: Вибір серії`}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              )}
            </AnimatedCard>
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
