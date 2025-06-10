import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Замовлення дисків - Крок 4: Контакти",
  description: `Залиште свої контактні дані для зв'язку та перегляньте деталі замовлення перед відправкою.`,
}

export default function ContactPage() {
  return <ContactPageClient />
}
