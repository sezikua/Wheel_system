export const runtime = "nodejs"

import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, discType, manufacturer, series, model, comment } = body

    // Валідація
    if (!name || !phone) {
      return NextResponse.json({ success: false, message: "Ім'я та телефон обов'язкові поля" }, { status: 400 })
    }

    console.log("Environment variables check:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? "SET" : "NOT SET",
      pass: process.env.SMTP_PASS ? "SET" : "NOT SET",
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
    })

    // Налаштування transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true для порту 465, false для 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Перевірка підключення
    await transporter.verify()
    console.log("SMTP connection verified successfully")

    // Функції для форматування даних
    const getDiscTypeText = (type: string) => {
      const types: { [key: string]: string } = {
        doubling: "Система здвоювання широкі диски",
        interrow: "Для роботи в міжрядді",
        custom: "Свій варіант",
      }
      return types[type] || type
    }

    const getManufacturerName = (id: string) => {
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

    // HTML шаблон
    const htmlContent = `
      <h2>🚜 Нове замовлення дисків з сайту</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        
        <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #0369a1; margin-top: 0;">👤 Контактна інформація</h3>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        </div>

        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #166534; margin-top: 0;">🔧 Деталі замовлення</h3>
          <p><strong>Тип дисків:</strong> ${getDiscTypeText(discType)}</p>
          <p><strong>Виробник трактора:</strong> ${getManufacturerName(manufacturer)}</p>
          <p><strong>Серія:</strong> ${series}</p>
          <p><strong>Модель:</strong> ${model === "custom" ? "Свій варіант (уточнити у клієнта)" : model}</p>
        </div>

        ${
          comment
            ? `
        <div style="background: #fefce8; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #a16207; margin-top: 0;">💬 Коментар клієнта</h3>
          <p>${comment}</p>
        </div>
        `
            : ""
        }

        <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0; text-align: center;">
          <h3 style="color: #dc2626; margin-top: 0;">⚡ ТЕРМІНОВЕ ЗАМОВЛЕННЯ</h3>
          <p style="color: #dc2626; font-weight: bold;">ЗАТЕЛЕФОНУЙТЕ КЛІЄНТУ ЯКНАЙШВИДШЕ!</p>
        </div>

        <hr style="margin: 20px 0;">
        <p><small>Відправлено: ${new Date().toLocaleString("uk-UA")}</small></p>
        <p><small>Джерело: Сайт TWINFORCE WHEELS</small></p>
      </div>
    `

    // Відправка email
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM, // відправник
      to: process.env.SMTP_TO, // отримувач - Сергій Костров
      replyTo: email || undefined, // відповідь піде на email клієнта (якщо є)
      subject: `🚜 Нове замовлення дисків від ${name}`,
      html: htmlContent,
    })

    console.log("Email відправлено:", info.messageId)
    console.log("Відправлено з:", process.env.SMTP_FROM)
    console.log("Відправлено на:", process.env.SMTP_TO)

    return NextResponse.json({
      success: true,
      message: "Замовлення відправлено успішно!",
      messageId: info.messageId,
    })
  } catch (error) {
    console.error("Помилка відправки email:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Помилка відправки. Спробуйте пізніше.",
        error: process.env.NODE_ENV === "development" ? (error as Error).message : undefined,
      },
      { status: 500 },
    )
  }
}
