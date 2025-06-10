import nodemailer from "nodemailer"

// Створюємо транспортер для відправки email
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.ecartoken.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "forms@kostrov.work",
    pass: process.env.SMTP_PASS || "%,50,caREov",
  },
  tls: {
    rejectUnauthorized: false,
  },
})

// Функція для відправки email (без перевірки з'єднання)
export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string
  subject: string
  html: string
  text?: string
}) {
  try {
    console.log("Attempting to send email to:", to)

    const info = await transporter.sendMail({
      from: `"TWINFORCE WHEELS" <${process.env.SMTP_FROM || "forms@kostrov.work"}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ""),
    })

    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Email sending failed:", error)

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Функція для генерації HTML шаблону листа
export function generateOrderEmailHTML({
  name,
  phone,
  email,
  discType,
  manufacturer,
  series,
  model,
  comment,
}: {
  name: string
  phone: string
  email?: string
  discType: string
  manufacturer: string
  series: string
  model: string
  comment?: string
}) {
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

  return `
    <!DOCTYPE html>
    <html lang="uk">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Нове замовлення дисків</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #059669, #047857);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .content {
          background: #f9f9f9;
          padding: 20px;
          border: 1px solid #ddd;
        }
        .footer {
          background: #374151;
          color: white;
          padding: 15px;
          border-radius: 0 0 8px 8px;
          text-align: center;
          font-size: 14px;
        }
        .info-block {
          background: white;
          padding: 15px;
          margin: 10px 0;
          border-radius: 6px;
          border-left: 4px solid #059669;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          margin: 8px 0;
          padding: 5px 0;
          border-bottom: 1px solid #eee;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          color: #374151;
        }
        .value {
          color: #059669;
          font-weight: 500;
        }
        .comment-block {
          background: #fef3c7;
          padding: 15px;
          margin: 15px 0;
          border-radius: 6px;
          border-left: 4px solid #f59e0b;
        }
        .urgent {
          background: #fee2e2;
          color: #dc2626;
          padding: 10px;
          border-radius: 6px;
          margin: 15px 0;
          font-weight: bold;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🚜 Нове замовлення дисків</h1>
        <p>TWINFORCE WHEELS</p>
      </div>
      
      <div class="content">
        <div class="urgent">
          ⚡ ТЕРМІНОВЕ ЗАМОВЛЕННЯ - ЗАТЕЛЕФОНУЙТЕ КЛІЄНТУ!
        </div>
        
        <div class="info-block">
          <h3>👤 Контактна інформація</h3>
          <div class="info-row">
            <span class="label">Ім'я:</span>
            <span class="value">${name}</span>
          </div>
          <div class="info-row">
            <span class="label">Телефон:</span>
            <span class="value">${phone}</span>
          </div>
          ${
            email
              ? `
          <div class="info-row">
            <span class="label">Email:</span>
            <span class="value">${email}</span>
          </div>
          `
              : ""
          }
        </div>
        
        <div class="info-block">
          <h3>🔧 Деталі замовлення</h3>
          <div class="info-row">
            <span class="label">Тип дисків:</span>
            <span class="value">${getDiscTypeText(discType)}</span>
          </div>
          <div class="info-row">
            <span class="label">Виробник трактора:</span>
            <span class="value">${getManufacturerName(manufacturer)}</span>
          </div>
          <div class="info-row">
            <span class="label">Серія:</span>
            <span class="value">${series}</span>
          </div>
          <div class="info-row">
            <span class="label">Модель:</span>
            <span class="value">${model === "custom" ? "Свій варіант (уточнити у клієнта)" : model}</span>
          </div>
        </div>
        
        ${
          comment
            ? `
        <div class="comment-block">
          <h3>💬 Коментар клієнта</h3>
          <p>${comment}</p>
        </div>
        `
            : ""
        }
        
        <div class="info-block">
          <h3>📅 Інформація про замовлення</h3>
          <div class="info-row">
            <span class="label">Дата замовлення:</span>
            <span class="value">${new Date().toLocaleString("uk-UA")}</span>
          </div>
          <div class="info-row">
            <span class="label">Джерело:</span>
            <span class="value">Сайт TWINFORCE WHEELS</span>
          </div>
        </div>
        
        <div style="background: #e0f2fe; padding: 15px; border-radius: 6px; margin: 20px 0;">
          <h3 style="color: #0277bd; margin-top: 0;">📋 Наступні кроки:</h3>
          <ul style="color: #01579b;">
            <li>Зателефонуйте клієнту протягом 1 години</li>
            <li>Уточніть всі технічні деталі</li>
            <li>Розрахуйте вартість та терміни</li>
            <li>Відправте комерційну пропозицію</li>
          </ul>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>TWINFORCE WHEELS</strong></p>
        <p>Професійні диски для тракторів</p>
        <p>📞 068 600 70 30 | 📧 forms@kostrov.work</p>
      </div>
    </body>
    </html>
  `
}
