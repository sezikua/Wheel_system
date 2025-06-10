import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Диски для вашої сільгосп техніки - Головна",
  description: `Професійні диски для тракторів. Сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку.`,
}

export default function HomePage() {
  return <ClientPage />
}
