// Простий fallback без nodemailer для тестування
export async function sendSimpleEmail(orderData: {
  name: string
  phone: string
  email?: string
  discType: string
  manufacturer: string
  series: string
  model: string
  comment?: string
}) {
  try {
    // Логуємо дані замовлення
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

    // Симулюємо успішну відправку
    return {
      success: true,
      message: "Замовлення зареєстровано в системі",
    }
  } catch (error) {
    console.error("Simple email error:", error)
    return {
      success: false,
      error: "Помилка реєстрації замовлення",
    }
  }
}
