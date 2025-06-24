"use server";

export async function submitOrder(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string | null;
    const comment = formData.get("comment") as string | null;
    const discType = formData.get("discType") as string;
    const manufacturer = formData.get("manufacturer") as string;
    const series = formData.get("series") as string;
    const model = formData.get("model") as string;

    if (!name || !phone || !discType || !manufacturer || !series || !model) {
      return {
        success: false,
        error: "Не всі обов'язкові поля заповнені",
      };
    }

    const baseUrl =
      process.env.VERCEL_URL && !process.env.VERCEL_URL.startsWith("http")
        ? `https://${process.env.VERCEL_URL}`
        : process.env.VERCEL_URL || "http://localhost:3000";

    const webhookUrl = `${baseUrl}/api/telegram-webhook`;

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email: email || undefined,
        comment: comment || undefined,
        discType,
        manufacturer,
        series,
        model,
      }),
    });

    const text = await response.text();

    let json;
    try {
      json = JSON.parse(text);
    } catch (e) {
      console.error("Не вдалося розпарсити відповідь:", text);
      return {
        success: false,
        error: "Некоректна відповідь від сервера. Спробуйте пізніше.",
      };
    }

    if (!json.success) {
      console.error("Telegram API помилка:", json);
      return {
        success: false,
        error: json.message || "Помилка надсилання замовлення.",
      };
    }

    return { success: true, message: json.message };
  } catch (error) {
    console.error("submitOrder помилка:", error);
    return {
      success: false,
      error: "Серверна помилка. Спробуйте ще раз або зателефонуйте нам.",
    };
  }
}
