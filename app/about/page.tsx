import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Factory, Cog, Shield, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Про нашу компанію - TractorDiscs`,
  description: `Ми - сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку. Дізнайтеся більше про нашу історію та переваги.`,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/about" className="text-green-600 font-medium text-sm lg:text-base">
                {`Про нас`}
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-green-600 text-sm lg:text-base">
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

        {/* Hero Section */}
        <section className="text-center py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{`Про нашу компанію`}</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {`Ми - сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку. Наша місія -
            забезпечити аграріїв України найкращими рішеннями для підвищення ефективності роботи.`}
          </p>
        </section>

        {/* Company Story */}
        <section className="py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{`Наша історія`}</h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {`Компанія TractorDiscs була заснована в 2020 році з метою революціонізувати ринок сільськогосподарської
                техніки в Україні. Ми почали як невелика команда інженерів та агрономів, які розуміли потреби сучасного
                фермера.`}
              </p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {`За роки роботи ми стали провідним постачальником дисків для тракторів, обслуговуючи понад 500
                господарств по всій Україні. Наші рішення допомагають фермерам підвищити продуктивність та знизити
                витрати на обслуговування техніки.`}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {`Сьогодні ми продовжуємо інновації, розробляючи нові технології та вдосконалюючи існуючі продукти для
                максимального задоволення потреб наших клієнтів.`}
              </p>
            </div>
            <div className="order-first lg:order-last">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={`Наше виробництво`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-8 sm:py-12 bg-gray-50 rounded-lg">
          <div className="px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              {`Чому варто зупинити вибір саме на наших дисках?`}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Сучасне виробництво`}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {`Використовуємо найновіші технології та обладнання для виробництва дисків`}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Гарантія якості`}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {`Всі наші диски проходять суворий контроль якості та мають гарантію 2 роки`}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cog className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Індивідуальні рішення`}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {`Розробляємо диски під конкретні моделі тракторів та умови експлуатації`}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Точність виготовлення`}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {`Кожен диск виготовляється з точністю до міліметра для ідеальної посадки`}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">{`Переваги наших дисків`}</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Підвищена міцність`}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {`Використання високоякісної сталі та спеціальних сплавів забезпечує довговічність дисків навіть в
                    найскладніших умовах експлуатації.`}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Оптимальний розподіл ваги`}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {`Наші диски забезпечують рівномірний розподіл ваги трактора, що знижує ущільнення ґрунту та покращує
                    тягові характеристики.`}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Легке встановлення`}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {`Продумана конструкція дозволяє швидко та легко встановити диски без спеціального обладнання та
                    складних налаштувань.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Економія палива`}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {`Правильно підібрані диски знижують опір кочення та покращують зчеплення, що призводить до економії
                    палива до 15%.`}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Універсальність`}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {`Наші диски підходять для різних типів робіт: оранка, культивація, посів, міжрядний обробіток та
                    транспортні роботи.`}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{`Сервісна підтримка`}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {`Надаємо повну технічну підтримку, консультації з вибору та післяпродажне обслуговування по всій
                    Україні.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 sm:py-12 text-center bg-green-50 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{`Готові зробити ваш трактор ще ефективнішим?`}</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{`Зв'яжіться з нами для консультації або оформіть замовлення прямо зараз`}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/order">{`Замовити диски`}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacts">{`Отримати консультацію`}</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
