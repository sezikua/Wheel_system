import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: `Контакти - TractorDiscs`,
  description: `Зв'яжіться з нами для отримання консультації або оформлення замовлення. Ми завжди готові допомогти вам підібрати найкращі диски для вашого трактора.`,
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-100/80 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Image src="/images/twinforce-logo.png" alt="Twinforce Wheels Logo" width={150} height={40} />
            <div className="hidden md:flex flex-1 justify-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                {`Головна`}
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600">
                {`Про нас`}
              </Link>
              <Link href="/contacts" className="text-green-600 font-medium">
                {`Контакти`}
              </Link>
              <Link href="/order" className="text-gray-600 hover:text-green-600">
                {`Замовити`}
              </Link>
            </div>
            <div className="hidden md:block w-[150px]"></div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {`Повернутися на головну`}
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{`Контакти`}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {`Зв'яжіться з нами для отримання консультації або оформлення замовлення. Ми завжди готові допомогти вам
            підібрати найкращі диски для вашого трактора.`}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>{`Телефон`}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{`Менеджер Сергій Костров`}</p>
              <a href="tel:+380686007030" className="text-2xl font-bold text-green-600 hover:text-green-700">
                {`068 600 70 30`}
              </a>
              <p className="text-sm text-gray-500 mt-2">{`Пн-Пт: 8:00 - 18:00`}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>{`Адреса`}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-900">{`м. Київ`}</p>
              <p className="text-gray-600 mt-2">{`Точну адресу офісу та складу уточнюйте по телефону`}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>{`Режим роботи`}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-gray-600">
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{`Як з нами зв'язатися`}</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{`Телефонна консультація`}</h3>
                  <p className="text-gray-600 mb-2">
                    {`Зателефонуйте нашому менеджеру Сергію Кострову для отримання детальної консультації щодо вибору
                    дисків для вашого трактора.`}
                  </p>
                  <a href="tel:+380686007030" className="text-green-600 font-medium hover:text-green-700">
                    {`068 600 70 30`}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{`Особистий візит`}</h3>
                  <p className="text-gray-600">
                    {`Ви можете відвідати наш офіс у Києві для особистої консультації та огляду зразків продукції.
                    Попередньо зателефонуйте для узгодження зустрічі.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{`Наші послуги`}</h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{`Консультація з вибору`}</h3>
                  <p className="text-gray-600 text-sm">
                    {`Допоможемо підібрати оптимальні диски для вашої моделі трактора та умов роботи`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{`Індивідуальне виготовлення`}</h3>
                  <p className="text-gray-600 text-sm">
                    {`Виготовляємо диски за індивідуальними параметрами для нестандартних рішень`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{`Доставка по Україні`}</h3>
                  <p className="text-gray-600 text-sm">
                    {`Організовуємо швидку доставку замовлених дисків у будь-який регіон України`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{`Технічна підтримка`}</h3>
                  <p className="text-gray-600 text-sm">
                    {`Надаємо технічну підтримку з встановлення та експлуатації наших дисків`}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{`Маєте питання? Зв'яжіться з нами!`}</h2>
          <p className="text-gray-600 mb-6">
            {`Наш менеджер Сергій Костров з радістю відповість на всі ваші питання та допоможе з вибором дисків`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
