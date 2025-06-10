import { type NextRequest, NextResponse } from "next/server"
import { testEmailConnection, sendTestEmail } from "@/lib/email-alternative"

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json()

    if (action === "test-connection") {
      const result = await testEmailConnection()
      return NextResponse.json(result)
    }

    if (action === "send-test") {
      const result = await sendTestEmail()
      return NextResponse.json(result)
    }

    return NextResponse.json({ success: false, error: "Invalid action" })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
