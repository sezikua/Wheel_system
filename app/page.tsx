import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Award, Truck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TractorDiscs</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-green-600 font-medium">
                Головна
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600">
                Про нас
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-green-600">
                Контакти
              </Link>
              <Link href="/order" className="text-gray-600 hover:text-green-600">
                Замовити
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Професійні диски для тракторів</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку. Якість, надійність та
            індивідуальний підхід до кожного клієнта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/order">
                Замовити диски <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Дізнатися більше</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tractor Images Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Наші диски в роботі</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Трактор з широкими дисками"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Система здвоювання</h3>
                  <p className="text-gray-600">Широкі диски для максимальної стабільності</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Трактор для міжрядного обробітку"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Міжрядний обробіток</h3>
                  <p className="text-gray-600">Вузькі диски для роботи між рядами</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Трактор з індивідуальною конфігурацією"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Індивідуальні рішення</h3>
                  <p className="text-gray-600">Диски під ваші специфічні потреби</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Чому обирають нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Висока якість</h3>
              <p className="text-gray-600">
                Використовуємо тільки найкращі матеріали та сучасні технології виробництва
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Індивідуальний підхід</h3>
              <p className="text-gray-600">Кожне замовлення розглядається індивідуально з урахуванням ваших потреб</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Швидка доставка</h3>
              <p className="text-gray-600">Оперативне виконання замовлень та доставка по всій Україні</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Готові замовити диски для вашого трактора?</h2>
          <p className="text-green-100 mb-8 text-lg">Зв'яжіться з нами прямо зараз або оформіть замовлення онлайн</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/order">Замовити онлайн</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              <Link href="/contacts">Зв'язатися з нами</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">TractorDiscs</span>
          </div>
          <p className="text-gray-400 mb-4">Професійні диски для тракторів. Якість та надійність з 2020 року.</p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white">
              Головна
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">
              Про нас
            </Link>
            <Link href="/contacts" className="text-gray-400 hover:text-white">
              Контакти
            </Link>
            <Link href="/order" className="text-gray-400 hover:text-white">
              Замовити
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
