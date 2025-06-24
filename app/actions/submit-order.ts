"use server" // Ця директива тут має бути!

export async function submitOrder(formData: FormData) {
  try {
    console.log("=== Starting order submission ===");

    // Отримуємо дані з форми
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const comment = formData.get("comment") as string;
    const discType = formData.get("discType") as string;
    const manufacturer = formData.get("manufacturer") as string;
    const series = formData.get("series") as string;
    const model = formData.get("model") as string;

    console.log("Form data received:", {
      name,
      phone,
      email: email || "not provided",
      discType,
      manufacturer,
      series,
      model,
      hasComment: !!comment,
    });

    // Валідація обов'язкових полів
    if (!name || !phone || !discType || !manufacturer || !series || !model) {
      console.error("Validation failed - missing required fields");
      return {
        success: false,
        error: "Не всі обов'язкові поля заповнені",
      };
    }

    // --- ФІКС: Формуємо абсолютний URL для API-роуту ---
    // process.env.VERCEL_URL автоматично надається Vercel для серверних функцій.
    // Важливо додати 'https://', оскільки VERCEL_URL не включає протокол.
    // Для локальної розробки використовуємо 'http://localhost:3000' як запасний варіант.
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'; // Переконайтесь, що 3000 - це порт вашого Next.js додатка локально

    const telegramWebhookUrl = `${baseUrl}/api/telegram-webhook`;

    console.log("Sending order data to webhook URL:", telegramWebhookUrl);
    // --- КІНЕЦЬ ФІКСУ ---


    // Відправляємо дані в Telegram через API route
    const telegramResponse = await fetch(
      telegramWebhookUrl, // <-- Використовуємо повний, абсолютний URL
      {
        method: "POST", // Метод має бути POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          discType,
          manufacturer,
          series,
          model,
          comment: comment || undefined,
        }),
      },
    );

    // Зчитуємо відповідь як текст, щоб уникнути помилки парсингу, якщо це не JSON
    const responseText = await telegramResponse.text();
    console.log("Raw response from webhook:", responseText);

    let telegramResult;
    try {
        telegramResult = JSON.parse(responseText);
    } catch (parseError) {
        console.error("Failed to parse webhook response as JSON:", parseError);
        console.error("Response that caused error (first 500 chars):", responseText.substring(0, 500)); // Логуємо частину відповіді
        throw new Error("Невідома відповідь від сервера. Будь ласка, спробуйте ще раз."); // Нове повідомлення для користувача
    }

    if (!telegramResult.success) {
      console.error("Telegram notification failed:", telegramResult.error);
      return {
        success: false,
        error: "Помилка відправки замовлення в Telegram. Будь ласка, спробуйте ще раз або зателефонуйте нам.",
      };
    }

    console.log("=== Order submission completed successfully ===");
    return {
      success: true,
      message: "Замовлення успішно відправлено в Telegram!",
    };
  } catch (error) {
    console.error("=== Error in submitOrder ===");
    console.error("Error:", error);

    return {
      success: false,
      error: error instanceof Error ? error.message : "Внутрішня помилка сервера. Спробуйте ще раз або зателефонуйте нам.",
    };
  }
}
