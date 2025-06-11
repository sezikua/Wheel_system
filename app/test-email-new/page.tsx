"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TestEmailPage() {
  const [formData, setFormData] = useState({
    name: "Тестовий Клієнт",
    phone: "+380501234567",
    email: "test@example.com",
    discType: "doubling",
    manufacturer: "john-deere",
    series: "Серія 8R",
    model: "8R 310",
    comment: "Це тестове замовлення для перевірки email",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Помилка мережі. Перевірте інтернет-з'єднання.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Тестування Email (Нова версія)</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Ім'я</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="discType">Тип дисків</Label>
                <select
                  id="discType"
                  name="discType"
                  value={formData.discType}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="doubling">Система здвоювання</option>
                  <option value="interrow">Міжрядний обробіток</option>
                  <option value="custom">Свій варіант</option>
                </select>
              </div>
              <div>
                <Label htmlFor="manufacturer">Виробник</Label>
                <select
                  id="manufacturer"
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="john-deere">John Deere</option>
                  <option value="case-ih">Case IH</option>
                  <option value="fendt">Fendt</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="series">Серія</Label>
                <Input id="series" name="series" value={formData.series} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="model">Модель</Label>
                <Input id="model" name="model" value={formData.model} onChange={handleInputChange} />
              </div>
            </div>

            <div>
              <Label htmlFor="comment">Коментар</Label>
              <Textarea id="comment" name="comment" value={formData.comment} onChange={handleInputChange} rows={3} />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Відправляю..." : "Відправити тестове замовлення"}
            </Button>

            {submitStatus && (
              <div
                className={`p-3 rounded ${
                  submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
