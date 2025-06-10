import nodemailer from "nodemailer"

// Альтернативна конфігурація з іншими налаштуваннями
export const alternativeTransporter = nodemailer.createTransport({
  host: "mail.ecartoken.com",
  port: 587,
  secure: false,
  auth: {
    user: "forms@kostrov.work",
    pass: "%,50,caREov",
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: "SSLv3",
  },
  connectionTimeout: 60000, // 60 секунд
  greetingTimeout: 30000, // 30 секунд
  socketTimeout: 60000, // 60 секунд
})

// Функція для тестування з'єднання
export async function testEmailConnection() {
  try {
    console.log("Testing email connection...")

    const testResult = await alternativeTransporter.verify()
    console.log("Email connection test result:", testResult)

    return { success: true, message: "Connection successful" }
  } catch (error) {
    console.error("Email connection test failed:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      details: error,
    }
  }
}

// Спрощена функція відправки для тестування
export async function sendTestEmail() {
  try {
    const info = await alternativeTransporter.sendMail({
      from: '"TWINFORCE WHEELS" <forms@kostrov.work>',
      to: "forms@kostrov.work",
      subject: "Тест відправки email",
      html: `
        <h1>Тестовий лист</h1>
        <p>Це тестовий лист для перевірки налаштувань SMTP.</p>
        <p>Час відправки: ${new Date().toLocaleString("uk-UA")}</p>
      `,
    })

    console.log("Test email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Test email failed:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      details: error,
    }
  }
}
