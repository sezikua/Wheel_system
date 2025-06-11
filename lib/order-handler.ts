import { sendEmail, generateOrderEmailHTML } from "./email"

// Типи для замовлення
export type OrderData = {
  name: string
  phone: string
  email?: string
  discType: string
  manufacturer: string
  series: string
  model: string
  comment?: string
}

// Функція для логування замовлення
export function logOrder(orderData: OrderData) {
  console.log("=== НОВЕ ЗАМОВЛЕННЯ ===")
  console.log("Ім'я:", orderData.name)
  console.log("Телефон:", orderData.phone)
  console.log("Email:", orderData.email || "не вказано")
  console.log("Тип дисків:", orderData.discType)
  console.log("Виробник:", orderData.manufacturer)
  console.log("Серія:", orderData.series)
  console.log("Модель:", orderData.model)
  console.log("Коментар:", orderData.comment || "немає")
  console.log("Дата:", new Date().toLocaleString("uk-UA"))
  console.log("========================")
}

// Функція для обробки замовлення з відправкою email
export async function processOrder(orderData: OrderData) {
  try {
    // Логуємо замовлення
    logOrder(orderData)

    // Відправляємо email на пошту Сергія Кострова
    console.log("Sending email notification...")
    const emailHTML = generateOrderEmailHTML(orderData)

    const emailResult = await sendEmail({
      to: process.env.SMTP_TO || "s.kostrov@agrosolar.com.ua", // отримувач - Сергій Костров
      subject: `🚜 Нове замовлення дисків від ${orderData.name}`,
      html: emailHTML,
    })

    if (emailResult.success) {
      console.log("Email notification sent successfully:", emailResult.messageId)
    } else {
      console.error("Email notification failed:", emailResult.error)
    }

    return {
      success: true,
      message: "Замовлення успішно зареєстровано",
      emailSent: emailResult.success,
      emailError: emailResult.success ? undefined : emailResult.error,
    }
  } catch (error) {
    console.error("Order processing error:", error)
    return {
      success: false,
      error: "Помилка обробки замовлення",
    }
  }
}

// Допоміжні функції для форматування даних
export function getDiscTypeText(type: string) {
  const types: { [key: string]: string } = {
    doubling: "Система здвоювання широкі диски",
    interrow: "Для роботи в міжрядді",
    custom: "Свій варіант",
  }
  return types[type] || type
}

export function getManufacturerName(id: string) {
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
  return names[id] || id
}
