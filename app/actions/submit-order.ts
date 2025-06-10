"use server"

import { sendEmail, generateOrderEmailHTML } from "@/lib/email"

export async function submitOrder(formData: FormData) {
  try {
    // Отримуємо дані з форми
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const comment = formData.get("comment") as string
    const discType = formData.get("discType") as string
    const manufacturer = formData.get("manufacturer") as string
    const series = formData.get("series") as string
    const model = formData.get("model") as string

    // Валідація обов'язкових полів
    if (!name || !phone || !discType || !manufacturer || !series || !model) {
      return {
        success: false,
        error: "Не всі обов'язкові поля заповнені",
      }
    }

    // Генеруємо HTML для email
    const emailHTML = generateOrderEmailHTML({
      name,
      phone,
      email,
      discType,
      manufacturer,
      series,
      model,
      comment,
    })

    // Відправляємо email менеджеру
    const emailResult = await sendEmail({
      to: "forms@kostrov.work", // Email менеджера
      subject: `🚜 Нове замовлення дисків від ${name}`,
      html: emailHTML,
    })

    if (!emailResult.success) {
      console.error("Failed to send email:", emailResult.error)
      return {
        success: false,
        error: "Помилка відправки email",
      }
    }

    // Відправляємо підтвердження клієнту (якщо вказав email)
    if (email) {
      const clientEmailHTML = `
        <!DOCTYPE html>
        <html lang="uk">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Підтвердження замовлення</title>
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
            .success-block {
              background: #d1fae5;
              color: #065f46;
              padding: 20px;
              border-radius: 6px;
              margin: 20px 0;
              text-align: center;
            }
            .info-block {
              background: white;
              padding: 15px;
              margin: 15px 0;
              border-radius: 6px;
              border-left: 4px solid #059669;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✅ Замовлення прийнято!</h1>
            <p>TWINFORCE WHEELS</p>
          </div>
          
          <div class="content">
            <div class="success-block">
              <h2>Дякуємо за ваше замовлення, ${name}!</h2>
              <p>Ваше замовлення успішно отримано і передано менеджеру.</p>
            </div>
            
            <div class="info-block">
              <h3>📞 Що далі?</h3>
              <ul>
                <li>Наш менеджер <strong>Сергій Костров</strong> зв'яжеться з вами протягом робочого дня</li>
                <li>Разом уточнимо всі деталі замовлення</li>
                <li>Розрахуємо точну вартість та терміни виготовлення</li>
                <li>Організуємо доставку в зручний для вас час</li>
              </ul>
            </div>
            
            <div class="info-block">
              <h3>📱 Контакти для зв'язку</h3>
              <p><strong>Телефон:</strong> 068 600 70 30</p>
              <p><strong>Email:</strong> forms@kostrov.work</p>
              <p><strong>Режим роботи:</strong> Пн-Пт 8:00-18:00, Сб 9:00-15:00</p>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #92400e;">
                <strong>💡 Підказка:</strong> Підготуйте серійний номер або фото вашого трактора - 
                це допоможе нашому менеджеру швидше підібрати оптимальні диски.
              </p>
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

      await sendEmail({
        to: email,
        subject: "✅ Підтвердження замовлення дисків - TWINFORCE WHEELS",
        html: clientEmailHTML,
      })
    }

    return {
      success: true,
      message: "Замовлення успішно відправлено",
    }
  } catch (error) {
    console.error("Error submitting order:", error)
    return {
      success: false,
      error: "Внутрішня помилка сервера",
    }
  }
}
