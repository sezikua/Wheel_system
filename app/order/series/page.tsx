import type { Metadata } from "next"
import SeriesPageClient from "./SeriesPageClient"

export const metadata: Metadata = {
  title: "Замовлення дисків - Крок 3: Модель",
  description: "Оберіть серію та модель трактора для підбору відповідних дисків.",
}

export default function SeriesPage() {
  return <SeriesPageClient />
}
