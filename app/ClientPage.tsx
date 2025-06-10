"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Truck,
  ChevronDown,
  Zap,
  Shield,
  Settings,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FeatureCard } from "@/components/ui/feature-card"
import { AnimatedImage } from "@/components/ui/animated-image"

export default function ClientPage() {
  const { ref: scrollRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-md">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                TractorDiscs
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-6"
            >
              <Link href="/" className="text-green-600 font-medium relative group">
                {`Головна`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                {`Про нас`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                {`Контакти`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/order" className="text-gray-600 hover:text-green-600 transition-colors relative group">
                {`Замовити`}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Background */}
      <AnimatedGradientBackground className="pt-24 pb-20">
        <div className="container mx-auto px-4 pt-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                {`Інноваційні `}
                <span className="text-green-600">{`диски`}</span>
                {` для вашого трактора`}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                {`Сучасне виробництво систем здвоювання та систем для роботи в міжрядному обробітку. Якість, надійність та індивідуальний підхід до кожного клієнта.`}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
                >
                  <Link href="/order">
                    {`Замовити диски `}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Link href="/about">{`Дізнатися більше`}</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/system-doubling.png"
                  alt={`Трактор з системою здвоювання`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{`Система здвоювання`}</h3>
                    <p className="text-sm">{`Підвищена стабільність та зниження тиску на ґрунт`}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-20 shadow-xl">
                <span className="animate-pulse">{`Новинка`}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mt-16"
          >
            <a
              href="#products"
              className="flex flex-col items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <span className="mb-2">{`Дізнатися більше`}</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </AnimatedGradientBackground>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title={`Наші диски в роботі`}
            subtitle={`Інноваційні рішення для різних типів сільськогосподарських робіт`}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <AnimatedImage
                src="/images/system-doubling.png"
                alt={`Трактор з широкими дисками`}
                width={400}
                height={300}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{`Система здвоювання широкі диски`}</h3>
              <p className="text-gray-600">{`Для збільшення стабільності та зниження тиску на ґрунт`}</p>
              <motion.div className="mt-4 flex" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/order?type=doubling"
                  className="text-green-600 hover:text-green-700 font-medium flex items-center"
                >
                  {`Замовити `}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <AnimatedImage
                src="/images/interrow-cultivation.png"
                alt={`Трактор для міжрядного обробітку`}
                width={400}
                height={300}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{`Міжрядний обробіток`}</h3>
              <p className="text-gray-600">{`Вузькі диски для точної роботи між рядами та ефективного обробітку`}</p>
              <motion.div className="mt-4 flex" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/order?type=interrow"
                  className="text-green-600 hover:text-green-700 font-medium flex items-center"
                >
                  {`Замовити `}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <AnimatedImage
                src="/images/custom-solutions.png"
                alt={`Трактор з індивідуальною конфігурацією`}
                width={400}
                height={300}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{`Індивідуальні рішення`}</h3>
              <p className="text-gray-600">{`Диски під ваші специфічні потреби та особливості техніки`}</p>
              <motion.div className="mt-4 flex" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/order?type=custom"
                  className="text-green-600 hover:text-green-700 font-medium flex items-center"
                >
                  {`Замовити `}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title={`Чому обирають нас`}
            subtitle={`Ми поєднуємо інноваційні технології та багаторічний досвід для створення найкращих рішень`}
          />

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Award}
              title={`Висока якість`}
              description={`Використовуємо тільки найкращі матеріали та сучасні технології виробництва`}
              delay={0.1}
            />
            <FeatureCard
              icon={Users}
              title={`Індивідуальний підхід`}
              description={`Кожне замовлення розглядається індивідуально з урахуванням ваших потреб`}
              delay={0.2}
            />
            <FeatureCard
              icon={Zap}
              title={`Швидка доставка`}
              description={`Оперативне виконання замовлень та доставка по всій Україні`}
              delay={0.3}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={Shield}
              title={`Гарантія якості`}
              description={`Надаємо гарантію на всі наші вироби та забезпечуємо сервісну підтримку`}
              delay={0.4}
            />
            <FeatureCard
              icon={Settings}
              title={`Технічна підтримка`}
              description={`Наші спеціалісти завжди готові надати консультацію та допомогу`}
              delay={0.5}
            />
            <FeatureCard
              icon={CheckCircle}
              title={`Перевірена надійність`}
              description={`Сотні задоволених клієнтів по всій Україні підтверджують якість нашої продукції`}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white" ref={scrollRef}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold text-green-600 mb-2"
              >
                500+
              </motion.div>
              <p className="text-gray-600">{`Задоволених клієнтів`}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl font-bold text-green-600 mb-2"
              >
                1000+
              </motion.div>
              <p className="text-gray-600">{`Виготовлених дисків`}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl font-bold text-green-600 mb-2"
              >
                10+
              </motion.div>
              <p className="text-gray-600">{`Років досвіду`}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl font-bold text-green-600 mb-2"
              >
                24/7
              </motion.div>
              <p className="text-gray-600">{`Технічна підтримка`}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 z-0"></div>
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('/images/system-doubling.png')] bg-center bg-cover opacity-20 blur-sm"></div>
        </motion.div>

        <div className="container mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {`Готові замовити диски для вашого трактора?`}
            </h2>
            <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
              {`Зв'яжіться з нами прямо зараз або оформіть замовлення онлайн. Наші спеціалісти допоможуть підібрати
              оптимальне рішення для вашої техніки.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asChild
                size="lg"
                variant="secondary"
                delay={0.2}
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                <Link href="/order">{`Замовити онлайн`}</Link>
              </AnimatedButton>
              <AnimatedButton
                asChild
                size="lg"
                variant="outline"
                delay={0.3}
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contacts">{`Зв'язатися з нами`}</Link>
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">TractorDiscs</span>
              </div>
              <p className="text-gray-400 mb-4">{`Професійні диски для тракторів. Якість та надійність з 2020 року.`}</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.247-.636-.416-1.363-.465-.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.504.344-1.857.182-.466.399-.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.023-.058 1.351-.058 4.041v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{`Навігація`}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    {`Головна`}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    {`Про нас`}
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">
                    {`Контакти`}
                  </Link>
                </li>
                <li>
                  <Link href="/order" className="text-gray-400 hover:text-white transition-colors">
                    {`Замовити`}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{`Контакти`}</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <a href="tel:+380686007030" className="text-gray-400 hover:text-white transition-colors">
                    {`068 600 70 30`}
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@tractordiscs.com" className="text-gray-400 hover:text-white transition-colors">
                    {`info@tractordiscs.com`}
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{`м. Київ, Україна`}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">{`© ${new Date().getFullYear()} TractorDiscs. Всі права захищені.`}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
