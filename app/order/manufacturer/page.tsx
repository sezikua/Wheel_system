"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Truck } from "lucide-react"

type Manufacturer = {
  id: string
  name: string
  country: string
  image: string
  description: string
}

export default function ManufacturerPage() {
  const searchParams = useSearchParams()
  const discType = searchParams.get("type")
  const [selectedManufacturer, setSelectedManufacturer] = useState<string | null>(null)

  const manufacturers: Manufacturer[] = [
    {
      id: "john-deere",
      name: "John Deere",
      country: "США",
      image: "/placeholder.svg?height=150&width=200",
      description: "Провідний американський виробник сільськогосподарської техніки",
    },
    {
      id: "case-ih",
      name: "Case IH",
      country: "США",
      image: "/placeholder.svg?height=150&width=200",
      description: "Частина CNH Industrial, відомий надійністю та інноваціями",
    },
    {
      id: "massey-ferguson",
      name: "Massey Ferguson",
      country: "США",
      image: "/placeholder.svg?height=150&width=200",
      description: "Частина AGCO, один з найстаріших брендів тракторів",
    },
    {
      id: "kubota",
      name: "Kubota",
      country: "Японія",
      image: "/placeholder.svg?height=150&width=200",
      description: "Японська якість та надійність у сільськогосподарській техніці",
    },
    {
      id: "new-holland",
      name: "New Holland",
      country: "США/Італія",
      image: "/placeholder.svg?height=150&width=200",
      description: "Частина CNH Industrial, поєднання американських та європейських технологій",
    },
    {
      id: "fendt",
      name: "Fendt",
      country: "Німеччина",
      image: "/placeholder.svg?height=150&width=200",
      description: "Німецька інженерія та преміум якість",
    },
    {
      id: "claas",
      name: "CLAAS",
      country: "Німеччина",
      image: "/placeholder.svg?height=150&width=200",
      description: "Німецький виробник з багаторічним досвідом",
    },
    {
      id: "mahindra",
      name: "Mahindra & Mahindra",
      country: "Індія",
      image: "/placeholder.svg?height=150&width=200",
      description: "Індійський виробник доступних та надійних тракторів",
    },
    {
      id: "deutz-fahr",
      name: "Deutz-Fahr",
      country: "Німеччина",
      image: "/placeholder.svg?height=150&width=200",
      description: "Частина SDF Group, німецькі технології",
    },
    {
      id: "landini",
      name: "Landini",
      country: "Італія",
      image: "/placeholder.svg?height=150&width=200",
      description: "Італійський виробник з багатою історією",
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
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TractorDiscs</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Головна
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600">
                Про нас
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-green-600">
                Контакти
              </Link>
              <Link href="/order" className="text-green-600 font-medium">
                Замовити
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/order">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Повернутися до вибору типу дисків
          </Link>
        </Button>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Тип дисків</span>
            </div>
            <div className="w-8 h-px bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <span className="ml-2 text-green-600 font-medium">Виробник</span>
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
        </div>

        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Вибір виробника</h1>
          <p className="text-lg text-gray-600">Крок 2: Оберіть виробника вашого трактора</p>
        </div>

        {/* Manufacturer Selection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {manufacturers.map((manufacturer) => (
            <Card
              key={manufacturer.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedManufacturer === manufacturer.id ? "ring-2 ring-green-600 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedManufacturer(manufacturer.id)}
            >
              <CardHeader className="text-center">
                <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={manufacturer.image || "/placeholder.svg"}
                    alt={manufacturer.name}
                    width={200}
                    height={150}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <CardTitle className="text-lg">{manufacturer.name}</CardTitle>
                <p className="text-sm text-gray-500">({manufacturer.country})</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">{manufacturer.description}</p>
                {selectedManufacturer === manufacturer.id && (
                  <div className="mt-4 p-2 bg-green-50 rounded-lg">
                    <p className="text-green-700 text-sm font-medium text-center">✓ Вибрано</p>
                  </div>
                )}
              </CardContent>
              {selectedManufacturer === manufacturer.id && (
                <CardFooter className="pt-0 pb-4 flex justify-center">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext(manufacturer.id)
                    }}
                    className="bg-green-600 hover:bg-green-700 w-full mt-4"
                  >
                    Далі: Вибір серії
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Не знаєте виробника вашого трактора?</h3>
          <p className="text-blue-700 mb-4">
            Зв'яжіться з нашим менеджером, і він допоможе визначити виробника та модель за фотографією або серійним
            номером трактора.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <a href="tel:+380686007030">Зателефонувати менеджеру</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
