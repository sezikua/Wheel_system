"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestEmailPage() {
  const [testResult, setTestResult] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const testConnection = async () => {
    setIsLoading(true)
    setTestResult("Тестування з'єднання...")

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "test-connection" }),
      })

      const result = await response.json()
      setTestResult(JSON.stringify(result, null, 2))
    } catch (error) {
      setTestResult(`Помилка: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const sendTestEmail = async () => {
    setIsLoading(true)
    setTestResult("Відправка тестового email...")

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "send-test" }),
      })

      const result = await response.json()
      setTestResult(JSON.stringify(result, null, 2))
    } catch (error) {
      setTestResult(`Помилка: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const sendTestOrder = async () => {
    setIsLoading(true)
    setTestResult("Відправка тестового замовлення...")

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "send-order",
          orderData: {
            name: "Тестовий Клієнт",
            phone: "+380501234567",
            email: "test@example.com",
            discType: "doubling",
            manufacturer: "john-deere",
            series: "Серія 8R",
            model: "8R 310",
            comment: "Це тестове замовлення для перевірки email",
          },
        }),
      })

      const result = await response.json()
      setTestResult(JSON.stringify(result, null, 2))
    } catch (error) {
      setTestResult(`Помилка: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Тестування Email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={testConnection} disabled={isLoading}>
              Тест з'єднання
            </Button>
            <Button onClick={sendTestEmail} disabled={isLoading}>
              Простий тест email
            </Button>
            <Button onClick={sendTestOrder} disabled={isLoading} variant="outline">
              Тест замовлення
            </Button>
          </div>

          {testResult && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm">{testResult}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
