export const runtime = "nodejs"

import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"
import { sendEmail, generateOrderEmailHTML } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { action, orderData } = await request.json()

    if (action === "test-connection") {
      console.log("Testing SMTP connection...")

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number.parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const result = await transporter.verify()
      console.log("SMTP connection test result:", result)
      return NextResponse.json({ success: true, message: "Connection successful", result })
    }

    if (action === "send-test") {
      console.log("Sending simple test email...")
      const result = await sendEmail({
        to: process.env.SMTP_TO || "s.kostrov@agrosolar.com.ua", // тестуємо на пошту Сергія
        subject: "Тест відправки email",
        html: `
          <h1>Тестовий лист</h1>
          <p>Це тестовий лист для перевірки налаштувань SMTP.</p>
          <p>Час відправки: ${new Date().toLocaleString("uk-UA")}</p>
          <p>Відправлено з: ${process.env.SMTP_FROM}</p>
          <p>Відправлено на: ${process.env.SMTP_TO}</p>
        `,
      })
      return NextResponse.json(result)
    }

    if (action === "send-order") {
      console.log("Sending test order email...")
      const emailHTML = generateOrderEmailHTML(orderData)
      const result = await sendEmail({
        to: process.env.SMTP_TO || "s.kostrov@agrosolar.com.ua", // тестуємо на пошту Сергія
        subject: `🚜 Тестове замовлення дисків від ${orderData.name}`,
        html: emailHTML,
      })
      return NextResponse.json(result)
    }

    return NextResponse.json({ success: false, error: "Invalid action" })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      details: error,
    })
  }
}
