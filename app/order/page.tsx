import type { Metadata } from "next"
import OrderPageClient from "./OrderPageClient"

export const metadata: Metadata = {
  title: "Замовлення дисків - Крок 1: Тип дисків",
  description:
    "Виберіть тип дисків для вашого трактора: система здвоювання, для міжрядного обробітку або індивідуальний варіант.",
}

export default function OrderPage() {
  return <OrderPageClient />
}
