import { NextResponse } from "next/server";

function getDiscTypeText(type: string) {
  const types: Record<string, string> = {
    doubling: "Система здвоювання широкі диски",
    interrow: "Для роботи в міжрядді",
    custom: "Свій варіант",
  };
  return types[type] || type;
}

function getManufacturerName(id: string) {
  const names: Record<string, string> = {
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
  };
  return names[id] || id;
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, discType, manufacturer, series, model, comment } = body;

    if (!name || !phone || !discType || !manufacturer || !series || !model) {
      return NextResponse.json(
        { success: false, message: "Не всі обов'язкові поля заповнені" },
        { status: 400 }
      );
    }

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      return NextResponse.json(
        {
          success: false,
          message: "Telegram токен або chat_id не налаштовані в середовищі",
        },
        { status: 500 }
      );
    }

    const telegramMessage = `
🔔 *Нове замовлення дисків*

👤 *Ім'я:* ${name}
📱 *Телефон:* ${phone}
${email ? `📧 *Email:* ${email}` : ""}

---
🔧 *Тип дисків:* ${getDiscTypeText(discType)}
🚜 *Трактор:* ${getManufacturerName(manufacturer)} / Серія: ${series} / Модель: ${model === "custom" ? "Свій варіант" : model}
${comment ? `💬 *Коментар:* ${comment}` : ""}

🕒 ${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error("Telegram API Error:", telegramData);
      return NextResponse.json(
        { success: false, message: "Помилка Telegram API", error: telegramData.description },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Повідомлення надіслано в Telegram!" });
  } catch (error) {
    console.error("Telegram Webhook Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Серверна помилка",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Метод GET не підтримується. Використовуйте POST." },
    { status: 405 }
  );
}
