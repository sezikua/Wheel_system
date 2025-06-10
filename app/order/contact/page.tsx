"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Phone, Mail, User, MessageSquare, Truck, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const discType = searchParams.get("type")
  const manufacturer = searchParams.get("manufacturer")
  const series = searchParams.get("series")
  const model = searchParams.get("model")

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  })

  const [showReview, setShowReview] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleReview = () => {
    if (formData.name && formData.phone) {
      setShowReview(true)
    }
  }

  const handleSubmit = () => {
    // Here would be the actual form submission logic
    setIsSubmitted(true)
  }

  const handleBack = () => {
    if (showReview) {
      setShowReview(false)
    } else {
      window.location.href = `/order/series?type=${discType}&manufacturer=${manufacturer}`
    }
  }

  const getDiscTypeText = (type: string | null) => {
    const types: { [key: string]: string } = {
      doubling: "Система здвоювання широкі диски",
      interrow: "Для роботи в міжрядді",
      custom: "Свій варіант",
    }
    return types[type || ""] || type
  }

  const getManufacturerName = (id: string | null) => {
    const names: { [key: string]: string } = {
      "john-deere": "John Deere",
      "case-ih": "Case IH",
      "massey-ferguson": "Massey Ferguson",
      kubota: "Kubota",
      "new-holland": "New Holland",
      fendt: "Fendt",
      claas: "CLAAS",
      mahindra: "Mahindra & Mahindra",
      "deutz-fahr": "Deutz-Fahr",
      landini: "Landini",
    }
    return names[id || ""] || id
  }

  if (isSubmitted) {
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

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Замовлення успішно відправлено!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Дякуємо за ваше замовлення. Наш менеджер Сергій Костров зв'яжеться з вами найближчим часом для уточнення
              деталей та розрахунку вартості.
            </p>

            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Що далі?</h3>
              <ul className="text-green-700 space-y-2 text-left">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2"></span>
                  Менеджер зателефонує вам протягом робочого дня
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2"></span>
                  Разом уточнимо всі деталі замовлення
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2"></span>
                  Розрахуємо точну вартість та терміни виготовлення
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2"></span>
                  Організуємо доставку в зручний для вас час
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/">Повернутися на головну</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+380686007030">
                  <Phone className="w-4 h-4 mr-2" />
                  Зателефонувати менеджеру
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
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
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Виробник</span>
            </div>
            <div className="w-8 h-px bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Модель</span>
            </div>
            <div className="w-8 h-px bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <span className="ml-2 text-green-600 font-medium">Контакти</span>
            </div>
          </div>
        </div>

        {!showReview ? (
          <>
            {/* Header */}
            <div className="text-center py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Контактні дані</h1>
              <p className="text-lg text-gray-600">Крок 4: Залишіть свої контактні дані для зв'язку</p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Ваші контактні дані</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Ім'я та прізвище <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Введіть ваше ім'я"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Номер телефону <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+380 XX XXX XX XX"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (необов'язково)</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Коментар (необов'язково)</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Textarea
                        id="comment"
                        name="comment"
                        placeholder="Додаткові побажання, уточнення щодо моделі трактора, терміни виконання тощо..."
                        value={formData.comment}
                        onChange={handleInputChange}
                        className="pl-10 min-h-[100px]"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <span className="text-red-500">*</span> - обов'язкові поля для заповнення
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            {/* Order Review */}
            <div className="text-center py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Перегляд замовлення</h1>
              <p className="text-lg text-gray-600">Перевірте правильність введених даних перед відправкою</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Деталі замовлення</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Тип дисків:</p>
                      <p className="font-medium">{getDiscTypeText(discType)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Виробник:</p>
                      <p className="font-medium">{getManufacturerName(manufacturer)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Серія:</p>
                      <p className="font-medium">{series}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Модель:</p>
                      <p className="font-medium">{model === "custom" ? "Свій варіант" : model}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Контактні дані</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Ім'я:</p>
                      <p className="font-medium">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Телефон:</p>
                      <p className="font-medium">{formData.phone}</p>
                    </div>
                  </div>
                  {formData.email && (
                    <div>
                      <p className="text-sm text-gray-600">Email:</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                  )}
                  {formData.comment && (
                    <div>
                      <p className="text-sm text-gray-600">Коментар:</p>
                      <p className="font-medium">{formData.comment}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    Що відбудеться після відправки замовлення:
                  </h3>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2"></span>
                      Менеджер Сергій Костров зв'яжеться з вами протягом робочого дня
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2"></span>
                      Разом уточнимо всі технічні деталі та параметри дисків
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2"></span>
                      Розрахуємо точну вартість та терміни виготовлення
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2"></span>
                      Організуємо доставку в зручний для вас час
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 max-w-2xl mx-auto">
          <Button onClick={handleBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {showReview ? "Редагувати дані" : "Назад"}
          </Button>

          {!showReview ? (
            <Button
              onClick={handleReview}
              disabled={!formData.name || !formData.phone}
              className="bg-green-600 hover:bg-green-700"
            >
              Переглянути замовлення
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              Відправити замовлення
            </Button>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Маєте питання?</h3>
          <p className="text-blue-700 mb-4">
            Якщо у вас виникли питання або потрібна консультація, зв'яжіться з нашим менеджером.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <a href="tel:+380686007030">
              <Phone className="w-4 h-4 mr-2" />
              Зателефонувати Сергію Кострову
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
