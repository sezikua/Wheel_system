import { NextResponse } from "next/server";

// Допоміжні функції для форматування даних
function getDiscTypeText(type: string) {
  const types: { [key: string]: string } = {
    doubling: "Система здвоювання широкі диски",
    interrow: "Для роботи в міжрядді",
    custom: "Свій варіант",
  };
  return types[type] || type;
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
  };
  return names[id] || id;
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    console.log("--- Webhook: Отримано POST запит до /api/telegram-webhook ---");

    const body = await request.json();
    const { name, phone, email, discType, manufacturer, series, model, comment } = body;

    console.log("Webhook: Дані отримані з запиту:", {
      name, phone, email, discType, manufacturer, series, model, comment
    });

    if (!name || !phone || !discType || !manufacturer || !series || !model) {
      console.error("Webhook: Валідація провалена - відсутні обов'язкові поля.");
      return NextResponse.json({ success: false, message: "Не всі обов'язкові поля заповнені" }, { status: 400 });
    }

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      console.error("Webhook: TELEGRAM_BOT_TOKEN або TELEGRAM_CHAT_ID відсутні в оточенні Vercel!");
      return NextResponse.json({ success: false, message: "Конфігурація Telegram бота відсутня на сервері." }, { status: 500 });
    }

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
    `.trim();

    console.log("Webhook: Сформоване повідомлення для Telegram:", telegramMessage);
    console.log("Webhook: Відправка до Telegram API URL:", `https://api.telegram.org/bot${telegramBotToken}/sendMessage`);

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

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error("Webhook: Помилка від Telegram API:", telegramResponse.status, errorData);
      throw new Error(`Telegram API error: ${errorData.description || JSON.stringify(errorData)}`);
    }

    const successData = await telegramResponse.json();
    console.log("Webhook: Успішна відповідь від Telegram API:", successData);

    console.log("--- Webhook: Повідомлення успішно відправлено в Telegram! ---");
    return NextResponse.json({
      success: true,
      message: "Повідомлення відправлено в Telegram!",
    });

  } catch (error) {
    console.error("--- Webhook: Загальна помилка в /api/telegram-webhook ---");
    console.error("Webhook: Помилка:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Помилка обробки запиту в Telegram Webhook",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

// Додаємо обробку для GET-запитів, щоб він завжди повертав JSON,
// а не перенаправляв на сторінку входу Vercel. Це допоможе діагностувати проблему.
export async function GET() {
  console.log("Webhook: Отримано GET запит до /api/telegram-webhook. Метод не дозволений.");
  return NextResponse.json(
    { success: false, message: "Метод GET не дозволений для цього API роуту. Використовуйте POST." },
    { status: 405 }
  );
}
