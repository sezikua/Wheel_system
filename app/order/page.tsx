"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Truck } from "lucide-react"

type DiscType = "doubling" | "interrow" | "custom"

export default function OrderPage() {
  const [selectedType, setSelectedType] = useState<DiscType | null>(null)

  const discTypes = [
    {
      id: "doubling" as DiscType,
      title: "Система здвоювання широкі диски",
      description: "Для збільшення стабільності та зниження тиску на ґрунт",
      image: "/placeholder.svg?height=200&width=300",
      options: ["Передні + задні", "Задні", "Свій варіант (користувач прописує сам)"],
    },
    {
      id: "interrow" as DiscType,
      title: "Для роботи в міжрядді",
      description: "Вузькі диски для точного міжрядного обробітку",
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
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
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Повернутися на головну
          </Link>
        </Button>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
        </div>

        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Замовлення дисків</h1>
          <p className="text-lg text-gray-600">Крок 1: Виберіть для чого потрібні диски</p>
        </div>

        {/* Disc Type Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {discTypes.map((type) => (
            <Card
              key={type.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedType === type.id ? "ring-2 ring-green-600 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <CardHeader>
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
                  <div className="mt-4 p-2 bg-green-50 rounded-lg">
                    <p className="text-green-700 text-sm font-medium">✓ Вибрано</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Link>
          </Button>

          <Button onClick={handleNext} disabled={!selectedType} className="bg-green-600 hover:bg-green-700">
            Далі: Вибір виробника
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Потрібна допомога з вибором?</h3>
          <p className="text-blue-700 mb-4">
            Якщо ви не впевнені, який тип дисків вам потрібен, зв'яжіться з нашим менеджером для отримання безкоштовної
            консультації.
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
