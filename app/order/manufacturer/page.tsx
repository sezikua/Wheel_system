import ManufacturerPageClient from "./ManufacturerPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Замовлення дисків - Крок 2: Виробник",
  description: "Оберіть виробника вашого трактора для підбору відповідних дисків.",
}

export default function ManufacturerPage() {
  return <ManufacturerPageClient />
}
