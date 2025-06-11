import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "TWINFORCE WHEELS - Диски для тракторів",
    template: "%s | TWINFORCE WHEELS",
  },
  description: `Професійні диски для тракторів. Сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку. Якість, надійність та індивідуальний підхід до кожного клієнта.`,
  generator: `v0.dev`,
  applicationName: "TWINFORCE WHEELS",
  keywords: [
    "диски для тракторів",
    "система здвоювання",
    "міжрядний обробіток",
    "сільгосптехніка",
    "тракторні диски",
    "колеса для тракторів",
    "агротехніка",
    "Україна",
    "купити диски для трактора",
    "TWINFORCE WHEELS",
  ],
  authors: [{ name: "TWINFORCE WHEELS" }],
  creator: "TWINFORCE WHEELS",
  publisher: "TWINFORCE WHEELS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TWINFORCE WHEELS - Диски для тракторів",
    description: `Професійні диски для тракторів. Сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку. Якість, надійність та індивідуальний підхід до кожного клієнта.`,
    url: "https://your-domain.com", // Замініть на ваш реальний домен
    siteName: "TWINFORCE WHEELS",
    images: [
      {
        url: "/images/system-doubling.png", // Використовуємо зображення здвоєння для Open Graph
        width: 1200,
        height: 630,
        alt: "Трактор з системою здвоювання від TWINFORCE WHEELS",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TWINFORCE WHEELS - Диски для тракторів",
    description: `Професійні диски для тракторів. Сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку.`,
    images: ["/images/system-doubling.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Додайте favicon.ico до папки public
    shortcut: "/favicon-16x16.png", // Додайте інші розміри іконок
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // Додайте site.webmanifest до папки public для PWA
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
