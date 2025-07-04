import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: `Контакти`, // Буде об'єднано з template з layout.tsx
  description: `Зв'яжіться з нами для отримання консультації або оформлення замовлення. Ми завжди готові допомогти вам підібрати найкращі диски для вашого трактора.`,
}

export default function ContactsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TWINFORCE WHEELS",
    image: "https://your-domain.com/images/twinforce-logo.png", // Замініть на ваш реальний домен
    "@id": "https://your-domain.com/contacts", // Замініть на ваш реальний домен
    url: "https://your-domain.com/contacts", // Замініть на ваш реальний домен
    telephone: "+380686007030",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Точну адресу офісу та складу уточнюйте по телефону", // Якщо немає точної адреси, можна залишити так або вказати район
      addressLocality: "Київ",
      addressRegion: "Київська область",
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.4501", // Приблизні координати Києва
      longitude: "30.5234",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    priceRange: "₴₴", // Приблизний ціновий діапазон
    // Додайте відгуки, якщо вони є
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.8",
    //   reviewCount: "500",
    // },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Додаємо JSON-LD скрипт */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navigation */}
      <nav className="bg-gray-100/90 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Image
              src="/images/twinforce-logo.png"
              alt="Twinforce Wheels Logo"
              width={90}
              height={22}
              className="h-5 w-auto sm:h-6 md:h-7"
            />
            <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-600 text-sm lg:text-base">
                {`Головна`}
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 text-sm lg:text-base">
                {`Про нас`}
              </Link>
              <Link href="/contacts" className="text-green-600 font-medium text-sm lg:text-base">
                {`Контакти`}
              </Link>
              <Link href="/order" className="text-gray-600 hover:text-green-600 text-sm lg:text-base">
                {`Замовити`}
              </Link>
            </div>
            <div className="hidden md:block w-[90px] lg:w-[120px]"></div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <Button asChild variant="ghost" className="mb-4 sm:mb-6">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {`Повернутися на головну`}
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{`Контакти`}</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {`Зв'яжіться з нами для отримання консультації або оформлення замовлення. Ми завжди готові допомогти вам
            підібрати найкращі диски для вашого трактора.`}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">{`Телефон`}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">{`Менеджер Сергій Костров`}</p>
              <a href="tel:+380686007030" className="text-xl sm:text-2xl font-bold text-green-600 hover:text-green-700">
                {`068 600 70 30`}
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">{`Пн-Пт: 8:00 - 18:00`}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">{`Адреса`}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-semibold text-gray-900">{`м. Київ`}</p>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{`Точну адресу офісу та складу уточнюйте по телефону`}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl">{`Режим роботи`}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-gray-600 text-sm sm:text-base">
                <p>
                  <span className="font-medium">{`Пн-Пт:`}</span>
                  {` 8:00 - 18:00`}
                </p>
                <p>
                  <span className="font-medium">{`Сб:`}</span>
                  {` 9:00 - 15:00`}
                </p>
                <p>
                  <span className="font-medium">{`Нд:`}</span>
                  {` Вихідний`}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{`Як з нами зв'язатися`}</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{`Телефонна консультація`}</h3>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    {`Зателефонуйте нашому менеджеру Сергію Кострову для отримання детальної консультації щодо вибору
                    дисків для вашого трактора.`}
                  </p>
                  <a
                    href="tel:+380686007030"
                    className="text-green-600 font-medium hover:text-green-700 text-sm sm:text-base"
                  >
                    {`068 600 70 30`}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{`Особистий візит`}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {`Ви можете відвідати наш офіс у Києві для особистої консультації та огляду зразків продукції.
                    Попередньо зателефонуйте для узгодження зустрічі.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{`Наші послуги`}</h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{`Консультація з вибору`}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {`Допоможемо підібрати оптимальні диски для вашої моделі трактора та умов роботи`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{`Індивідуальне виготовлення`}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {`Виготовляємо диски за індивідуальними параметрами для нестандартних рішень`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{`Доставка по Україні`}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {`Організовуємо швидку доставку замовлених дисків у будь-який регіон України`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{`Технічна підтримка`}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {`Надаємо технічну підтримку з встановлення та експлуатації наших дисків`}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center bg-green-50 rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{`Маєте питання? Зв'яжіться з нами!`}</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            {`Наш менеджер Сергій Костров з радістю відповість на всі ваші питання та допоможе з вибором дисків`}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="tel:+380686007030">
                <Phone className="w-4 h-4 mr-2" />
                {`Зателефонувати зараз`}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/order">{`Замовити онлайн`}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
