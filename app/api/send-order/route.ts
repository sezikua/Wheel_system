import { NextResponse } from "next/server"
import { logOrder, type OrderData } from "@/lib/order-handler"

export async function POST(request: Request) {
  try {
    const orderData: OrderData = await request.json()

    // Логуємо замовлення
    logOrder(orderData)

    // Тут можна додати код для відправки email через зовнішній сервіс
    // наприклад, SendGrid, Mailgun, тощо

    return NextResponse.json({ success: true, message: "Order received" })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ success: false, error: "Failed to process order" }, { status: 500 })
  }
}
