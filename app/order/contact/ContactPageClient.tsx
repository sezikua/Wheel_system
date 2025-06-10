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
import { ArrowLeft, Phone, User, MessageSquare, CheckCircle, Mail, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import Image from "next/image"
import { submitOrder } from "@/app/actions/submit-order"

export default function ContactPageClient() {
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      setSubmitError(null)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Створюємо FormData для Server Action
      const formDataToSubmit = new FormData()
      formDataToSubmit.append("name", formData.name)
      formDataToSubmit.append("phone", formData.phone)
      formDataToSubmit.append("email", formData.email)
      formDataToSubmit.append("comment", formData.comment)
      formDataToSubmit.append("discType", discType || "")
      formDataToSubmit.append("manufacturer", manufacturer || "")
      formDataToSubmit.append("series", series || "")
      formDataToSubmit.append("model", model || "")

      const result = await submitOrder(formDataToSubmit)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setSubmitError(result.error || "Помилка відправки замовлення")
      }
    } catch (error) {
      console.error("Submit error:", error)
      setSubmitError("Помилка відправки замовлення. Спробуйте ще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    if (showReview) {
      setShowReview(false)
      setSubmitError(null)
    } else {
      window.location.href = `/order/series?type=${discType}&manufacturer=${manufacturer}`
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const getDiscTypeText = (type: string | null) => {
    const types: { [key: string]: string } = {
      doubling: `Система здвоювання широкі диски`,
      interrow: `Для роботи в міжрядді`,
      custom: `Свій варіант`,
    }
    return types[type || ""] || type
  }

  const getManufacturerName = (id: string | null) => {
    const names: { [key: string]: string } = {
      "john-deere": `John Deere`,
      "case-ih": `Case IH`,
      "massey-ferguson": `Massey Ferguson`,
      kubota: `Kubota`,
      "new-holland": `New Holland`,
      fendt: `Fendt`,
      claas: `CLAAS`,
      mahindra: `Mahindra & Mahindra`,
      "deutz-fahr": `Deutz-Fahr`,
      landini: `Landini`,
    }
    return names[id || ""] || id
  }

  if (isSubmitted) {
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
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="p-2">
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
              <div className="hidden md:block w-[90px] lg:w-[120px]"></div>
            </div>

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

        <div className="container mx-auto px-4 py-12 sm:py-16 pt-20 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{`Замовлення успішно відправлено!`}</h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              {`Дякуємо за ваше замовлення. Наш менеджер Сергій Костров зв'яжеться з вами найближчим часом для уточнення
              деталей та розрахунку вартості.`}
            </p>

            <div className="bg-green-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 shadow-md">
              <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-2">{`Що далі?`}</h3>
              <ul className="text-green-700 space-y-2 text-left text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {`Менеджер зателефонує вам протягом робочого дня`}
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {`Разом уточнимо всі деталі замовлення`}
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {`Розрахуємо точну вартість та терміни виготовлення`}
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {`Організуємо доставку в зручний для вас час`}
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                <Link href="/">{`Повернутися на головну`}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                <a href="tel:+380686007030">
                  <Phone className="w-4 h-4 mr-2" />
                  {`Зателефонувати менеджеру`}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    )
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
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="p-2">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            <div className="hidden md:block w-[90px] lg:w-[120px]"></div>
          </div>

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
                ✓
              </div>
              <span className="ml-1 sm:ml-2 text-green-600 font-medium text-xs sm:text-sm">{`Тип дисків`}</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-green-600 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                ✓
              </div>
              <span className="ml-1 sm:ml-2 text-green-600 font-medium text-xs sm:text-sm">{`Виробник`}</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-green-600 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                ✓
              </div>
              <span className="ml-1 sm:ml-2 text-green-600 font-medium text-xs sm:text-sm">{`Модель`}</span>
            </div>
            <div className="w-4 sm:w-8 h-px bg-green-600 flex-shrink-0"></div>
            <div className="flex items-center flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                4
              </div>
              <span className="ml-1 sm:ml-2 text-green-600 font-medium text-xs sm:text-sm">{`Контакти`}</span>
            </div>
          </div>
        </motion.div>

        {!showReview ? (
          <>
            {/* Header */}
            <SectionHeading title={`Контактні дані`} subtitle={`Крок 4: Залишіть свої контактні дані для зв'язку`} />

            <div className="max-w-2xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="shadow-lg border-none bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{`Ваші контактні дані`}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm sm:text-base">
                          {`Ім'я та прізвище `}
                          <span className="text-red-500">{`*`}</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder={`Введіть ваше ім'я`}
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm sm:text-base">
                          {`Номер телефону `}
                          <span className="text-red-500">{`*`}</span>
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder={`+380 XX XXX XX XX`}
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">{`Email (необов'язково)`}</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={`your@email.com`}
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comment" className="text-sm sm:text-base">{`Коментар (необов'язково)`}</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="comment"
                          name="comment"
                          placeholder={`Додаткові побажання, уточнення щодо моделі трактора, терміни виконання тощо...`}
                          value={formData.comment}
                          onChange={handleInputChange}
                          className="pl-10 min-h-[80px] sm:min-h-[100px]"
                        />
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-gray-600">
                        <span className="text-red-500">{`*`}</span>
                        {` - обов'язкові поля для заповнення`}
                      </p>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                        <p className="text-red-700 text-sm">{submitError}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </>
        ) : (
          <>
            {/* Order Review */}
            <SectionHeading
              title={`Перегляд замовлення`}
              subtitle={`Перевірте правильність введених даних перед відправкою`}
            />

            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="shadow-lg border-none bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{`Деталі замовлення`}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">{`Тип дисків:`}</p>
                        <p className="font-medium text-sm sm:text-base">{getDiscTypeText(discType)}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">{`Виробник:`}</p>
                        <p className="font-medium text-sm sm:text-base">{getManufacturerName(manufacturer)}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">{`Серія:`}</p>
                        <p className="font-medium text-sm sm:text-base">{series}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">{`Модель:`}</p>
                        <p className="font-medium text-sm sm:text-base">
                          {model === "custom" ? `Свій варіант` : model}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="shadow-lg border-none bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{`Контактні дані`}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">{`Ім'я:`}</p>
                        <p className="font-medium text-sm sm:text-base">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">{`Телефон:`}</p>
                        <p className="font-medium text-sm sm:text-base">{formData.phone}</p>
                      </div>
                    </div>
                    {formData.email && (
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">{`Email:`}</p>
                        <p className="font-medium text-sm sm:text-base">{formData.email}</p>
                      </div>
                    )}
                    {formData.comment && (
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">{`Коментар:`}</p>
                        <p className="font-medium text-sm sm:text-base">{formData.comment}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="bg-green-50 shadow-lg border-none">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-3">
                      {`Що відбудеться після відправки замовлення:`}
                    </h3>
                    <ul className="text-green-700 space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {`Менеджер Сергій Костров зв'яжеться з вами протягом робочого дня`}
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {`Разом уточнимо всі технічні деталі та параметри дисків`}
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {`Розрахуємо точну вартість та терміни виготовлення`}
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {`Організуємо доставку в зручний для вас час`}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                  <p className="text-red-700 text-sm sm:text-base">{submitError}</p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 sm:mt-12 max-w-2xl mx-auto"
        >
          <Button onClick={handleBack} variant="outline" className="group w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {showReview ? `Редагувати дані` : `Назад`}
          </Button>

          {!showReview ? (
            <Button
              onClick={handleReview}
              disabled={!formData.name || !formData.phone}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 w-full sm:w-auto"
            >
              {`Переглянути замовлення`}
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 w-full sm:w-auto"
            >
              {isSubmitting ? `Відправляємо...` : `Відправити замовлення`}
            </Button>
          )}
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 sm:mt-12 bg-blue-50 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto shadow-md"
        >
          <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">{`Маєте питання?`}</h3>
          <p className="text-blue-700 mb-3 sm:mb-4 text-sm sm:text-base">
            {`Якщо у вас виникли питання або потрібна консультація, зв'яжіться з нашим менеджером.`}
          </p>
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group w-full sm:w-auto"
          >
            <a href="tel:+380686007030">
              <Phone className="w-4 h-4 mr-2" />
              {`Зателефонувати Сергію Кострову`}
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
