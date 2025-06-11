export const runtime = "nodejs"

import { NextResponse } from "next/server"

// Допоміжні функції для форматування даних (перенесені сюди, оскільки lib/order-handler.ts буде видалено)
function getDiscTypeText(type: string) {
  const types: { [key: string]: string } = {
    doubling: "Система здвоювання широкі диски",
    interrow: "Для роботи в міжрядді",
    custom: "Свій варіант",
  }
  return types[type] || type
}

function getManufacturerName(id: string) {
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

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, discType, manufacturer, series, model, comment } = body

    // Валідація
    if (!name || !phone || !discType || !manufacturer || !series || !model) {
      return NextResponse.json({ success: false, message: "Не всі обов'язкові поля заповнені" }, { status: 400 })
    }

    // Формуємо повідомлення для Telegram
    const telegramMessage = `
🔔 *Нове замовлення дисків з сайту*

👤 *Ім'я:* ${name}
📱 *Телефон:* ${phone}
${email ? `📧 *Email:* ${email}` : ""}

---
🔧 *Деталі замовлення:*
*Тип дисків:* ${getDiscTypeText(discType)}
*Виробник трактора:* ${getManufacturerName(manufacturer)}
*Серія:* ${series}
*Модель:* ${model === "custom" ? "Свій варіант (уточнити у клієнта)" : model}
${comment ? `💬 *Коментар:* ${comment}` : ""}

---
⏰ *Час:* ${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kiev" })}
    `.trim()

    // Відправка в Telegram
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    })

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      throw new Error(`Telegram API error: ${errorData.description || JSON.stringify(errorData)}`)
    }

    return NextResponse.json({
      success: true,
      message: "Повідомлення відправлено в Telegram!",
    })
  } catch (error) {
    console.error("Telegram webhook error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Помилка відправки в Telegram",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
