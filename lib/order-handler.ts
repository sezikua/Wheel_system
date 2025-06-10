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

// Функція для обробки замовлення без відправки email
export async function processOrder(orderData: OrderData) {
  try {
    // Логуємо замовлення
    logOrder(orderData)

    // Тут можна додати код для збереження замовлення в базу даних
    // або відправки через webhook, якщо потрібно

    return {
      success: true,
      message: "Замовлення успішно зареєстровано",
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
