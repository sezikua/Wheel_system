import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Головна", // Буде об'єднано з template з layout.tsx
  description: `Професійні диски для тракторів. Сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку.`,
  openGraph: {
    title: "Диски для вашої сільгосп техніки - Головна",
    description: `Професійні диски для тракторів. Сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку.`,
    url: "https://your-domain.com/", // Замініть на ваш реальний домен
    images: [
      {
        url: "/images/tractor-hero.png", // Специфічне зображення для головної сторінки
        width: 1200,
        height: 630,
        alt: "Трактор з дисками TWINFORCE WHEELS",
      },
    ],
  },
  twitter: {
    images: ["/images/tractor-hero.png"],
  },
}

export default function HomePage() {
  return <ClientPage />
}
