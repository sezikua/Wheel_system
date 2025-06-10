"use server"

import { processOrder, type OrderData } from "@/lib/order-handler"

export async function submitOrder(formData: FormData) {
  try {
    console.log("=== Starting order submission ===")

    // Отримуємо дані з форми
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const comment = formData.get("comment") as string
    const discType = formData.get("discType") as string
    const manufacturer = formData.get("manufacturer") as string
    const series = formData.get("series") as string
    const model = formData.get("model") as string

    console.log("Form data received:", {
      name,
      phone,
      email: email || "not provided",
      discType,
      manufacturer,
      series,
      model,
      hasComment: !!comment,
    })

    // Валідація обов'язкових полів
    if (!name || !phone || !discType || !manufacturer || !series || !model) {
      console.error("Validation failed - missing required fields")
      return {
        success: false,
        error: "Не всі обов'язкові поля заповнені",
      }
    }

    // Створюємо об'єкт з даними замовлення
    const orderData: OrderData = {
      name,
      phone,
      email: email || undefined,
      discType,
      manufacturer,
      series,
      model,
      comment: comment || undefined,
    }

    // Обробляємо замовлення без використання nodemailer
    const result = await processOrder(orderData)

    if (!result.success) {
      console.error("Order processing failed:", result.error)
      return {
        success: false,
        error: "Помилка обробки замовлення. Будь ласка, спробуйте ще раз або зателефонуйте нам.",
      }
    }

    console.log("=== Order submission completed successfully ===")
    return {
      success: true,
      message: "Замовлення успішно відправлено",
    }
  } catch (error) {
    console.error("=== Error in submitOrder ===")
    console.error("Error:", error)

    return {
      success: false,
      error: "Внутрішня помилка сервера. Спробуйте ще раз або зателефонуйте нам.",
    }
  }
}
