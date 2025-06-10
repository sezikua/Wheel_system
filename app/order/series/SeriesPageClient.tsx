"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeading } from "@/components/ui/section-heading"
import Image from "next/image"

type TractorSeries = {
  [manufacturer: string]: {
    [series: string]: string[]
  }
}

export default function SeriesPageClient() {
  const searchParams = useSearchParams()
  const discType = searchParams.get("type")
  const manufacturer = searchParams.get("manufacturer")
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null)
  const [selectedModel, setSelectedModel] = useState<string | null>(null)

  const tractorData: TractorSeries = {
    "john-deere": {
      [`Серія 8R`]: [`8R 230`, `8R 250`, `8R 280`, `8R 310`, `8R 340`, `8R 370`, `8R 410`],
      [`Серія 7R`]: [`7R 210`, `7R 230`, `7R 250`, `7R 270`, `7R 290`, `7R 310`, `7R 330`],
      [`Серія 6R`]: [
        `6R 110`,
        `6R 120`,
        `6R 130`,
        `6R 140`,
        `6R 145`,
        `6R 155`,
        `6R 165`,
        `6R 175`,
        `6R 195`,
        `6R 215`,
        `6R 230`,
        `6R 250`,
      ],
      [`Серія 6M`]: [`6M 110`, `6M 120`, `6M 130`, `6M 140`, `6M 150`, `6M 155`, `6M 165`, `6M 175`],
      [`Серія 5R`]: [`5R 100`, `5R 110`, `5R 120`, `5R 130`, `5R 140`],
      [`Серія 5M`]: [`5M 090`, `5M 100`, `5M 105`, `5M 115`, `5M 125`, `5M 135`, `5M 140`],
    },
    "case-ih": {
      [`Серія Magnum`]: [`Magnum 250`, `Magnum 280`, `Magnum 310`, `Magnum 340`, `Magnum 380`, `Magnum 400`],
      [`Серія Optum`]: [`Optum 270`, `Optum 300`],
      [`Серія Puma`]: [
        `Puma 130`,
        `Puma 140`,
        `Puma 150`,
        `Puma 165`,
        `Puma 180`,
        `Puma 185`,
        `Puma 200`,
        `Puma 220`,
        `Puma 230`,
      ],
      [`Серія Maxxum`]: [`Maxxum 110`, `Maxxum 115`, `Maxxum 125`, `Maxxum 135`, `Maxxum 145`, `Maxxum 150`],
      [`Серія Farmall`]: [`Farmall 75A`, `Farmall 90A`, `Farmall 100A`, `Farmall 110A`, `Farmall 120A`],
    },
    "massey-ferguson": {
      [`Серія MF 8700 S`]: [`MF 8727 S`, `MF 8730 S`, `MF 8732 S`, `MF 8735 S`, `MF 8737 S`, `MF 8740 S`],
      [`Серія MF 7700 S`]: [
        `MF 7714 S`,
        `MF 7716 S`,
        `MF 7718 S`,
        `MF 7719 S`,
        `MF 7720 S`,
        `MF 7722 S`,
        `MF 7724 S`,
        `MF 7726 S`,
      ],
      [`Серія MF 6700`]: [`MF 6712`, `MF 6713`, `MF 6714`, `MF 6715`, `MF 6716`, `MF 6718`],
      [`Серія MF 5700`]: [`MF 5708`, `MF 5709`, `MF 5710`, `MF 5711`, `MF 5712`, `MF 5713`],
      [`Серія MF 4700`]: [`MF 4707`, `MF 4708`, `MF 4709`, `MF 4710`, `MF 4711`],
    },
    kubota: {
      [`Серія M7`]: [`M7-131 (130 к.с.)`, `M7-151 (150 к.с.)`, `M7-171 (170 к.с.)`, `M7-172 (172 к.с.)`],
      [`Серія M6`]: [`M6-131 (131 к.с.)`, `M6-141 (141 к.с.)`],
      [`Серія M5`]: [`M5-091 (92 к.с.)`, `M5-101 (101 к.с.)`, `M5-111 (105 к.с.)`, `M5-131 (131 к.с.)`],
      [`Серія M4`]: [`M4-063 (63 к.с.)`, `M4-071 (71 к.с.)`],
      [`Серія L`]: [`L2501 (24,8 к.с.)`, `L3301 (33 к.с.)`, `L3901 (37,5 к.с.)`, `L4701 (47 к.с.)`, `L5740 (57 к.с.)`],
      [`Серія B`]: [`B2301 (23 к.с.)`, `B2601 (26 к.с.)`, `B3350 (33,5 к.с.)`],
    },
    "new-holland": {
      [`Серія T8`]: [`T8.320`, `T8.350`, `T8.380`, `T8.410`, `T8.435`],
      [`Серія T7`]: [
        `T7.165`,
        `T7.175`,
        `T7.190`,
        `T7.210`,
        `T7.230`,
        `T7.245`,
        `T7.260`,
        `T7.270`,
        `T7.290`,
        `T7.315`,
      ],
      [`Серія T6`]: [`T6.120`, `T6.140`, `T6.145`, `T6.155`, `T6.160`, `T6.165`, `T6.175`, `T6.180`],
      [`Серія T5`]: [`T5.100`, `T5.110`, `T5.115`, `T5.120`, `T5.130`, `T5.140`],
      [`Серія T4`]: [`T4.55`, `T4.65`, `T4.75`, `T4.85`, `T4.95`, `T4.105`],
    },
    fendt: {
      [`Серія 1000 Vario`]: [
        `Fendt 1038 Vario (396 к.с.)`,
        `Fendt 1042 Vario (435 к.с.)`,
        `Fendt 1046 Vario (476 к.с.)`,
        `Fendt 1050 Vario (517 к.с.)`,
      ],
      [`Серія 900 Vario`]: [
        `Fendt 924 Vario`,
        `Fendt 927 Vario`,
        `Fendt 930 Vario`,
        `Fendt 933 Vario`,
        `Fendt 936 Vario`,
        `Fendt 939 Vario`,
        `Fendt 942 Vario`,
      ],
      [`Серія 800 Vario`]: [
        `Fendt 818 Vario`,
        `Fendt 820 Vario`,
        `Fendt 822 Vario`,
        `Fendt 824 Vario`,
        `Fendt 826 Vario`,
        `Fendt 828 Vario`,
      ],
      [`Серія 700 Vario Gen7`]: [
        `Fendt 720 Vario`,
        `Fendt 722 Vario`,
        `Fendt 724 Vario`,
        `Fendt 726 Vario`,
        `Fendt 728 Vario`,
      ],
      [`Серія 600 Vario`]: [
        `Fendt 614 Vario (149 к.с.)`,
        `Fendt 616 Vario (165 к.с.)`,
        `Fendt 618 Vario (185 к.с.)`,
        `Fendt 620 Vario (209 к.с.)`,
      ],
      [`Серія 500 Vario`]: [
        `Fendt 512 Vario (124 к.с.)`,
        `Fendt 513 Vario (135 к.с.)`,
        `Fendt 514 Vario (145 к.с.)`,
        `Fendt 516 Vario (163 к.с.)`,
      ],
      [`Серія 300 Vario`]: [
        `Fendt 310 Vario (100 к.с.)`,
        `Fendt 311 Vario (110 к.с.)`,
        `Fendt 312 Vario (120 к.с.)`,
        `Fendt 313 Vario (130 к.с.)`,
        `Fendt 314 Vario (142 к.с.)`,
      ],
    },
    claas: {
      [`Серія Xerion 5000/4000`]: [`Xerion 5000 (530 к.с.)`, `Xerion 4500 (462 к.с.)`, `Xerion 4000 (435 к.с.)`],
      [`Серія Axion 900`]: [`Axion 960`, `Axion 950`, `Axion 940`, `Axion 930`, `Axion 920`],
      [`Серія Axion 800`]: [`Axion 870`, `Axion 850`, `Axion 840`, `Axion 830`, `Axion 820`, `Axion 810`, `Axion 800`],
      [`Серія Arion 600`]: [`Arion 660`, `Arion 650`, `Arion 640`, `Arion 630`, `Arion 620`, `Arion 610`],
      [`Серія Arion 500`]: [`Arion 560`, `Arion 550`, `Arion 540`, `Arion 530`, `Arion 520`, `Arion 510`],
      [`Серія Arion 400`]: [`Arion 470`, `Arion 460`, `Arion 450`, `Arion 440`, `Arion 430`, `Arion 420`, `Arion 410`],
      [`Серія Axos`]: [`Axos 340`, `Axos 330`, `Axos 320`, `Axos 310`],
      [`Серія Elios`]: [`Elios 240`, `Elios 230`, `Elios 220`, `Elios 210`],
      [`Серія Nexos`]: [`Nexos 250`, `Nexos 240`, `Nexos 230`, `Nexos 220`, `Nexos 210`],
    },
    mahindra: {
      [`Серія 6000`]: [`6065 (65 к.с.)`, `6075 (75 к.с.)`],
      [`Серія 7000`]: [`7085 (85 к.с.)`, `7095 (95 к.с.)`],
      [`Серія 9000`]: [`9125 (125 к.с.)`],
    },
    "deutz-fahr": {
      [`Серія 5G`]: [`5105G (105 к.с.)`, `5115G (115 к.с.)`, `5125G (125 к.с.)`],
      [`Серія 6`]: [`6130 (130 к.с.)`, `6140 (140 к.с.)`, `6155 (155 к.с.)`, `6165 (165 к.с.)`, `6185 (185 к.с.)`],
      [`Серія 7`]: [`7250 TTV (246 к.с.)`],
    },
    landini: {
      [`Серія 7`]: [`7-160`, `7-175`, `7-190`],
      [`Серія 6H`]: [`6-125H`, `6-135H`, `6-145H`],
      [`Серія 5`]: [`5-100`, `5-110`, `5-120`],
    },
  }

  const currentManufacturerData = manufacturer ? tractorData[manufacturer] : null
  const availableSeries = currentManufacturerData ? Object.keys(currentManufacturerData) : []
  const availableModels = selectedSeries && currentManufacturerData ? currentManufacturerData[selectedSeries] : []

  const handleNext = () => {
    if (selectedModel) {
      window.location.href = `/order/contact?type=${discType}&manufacturer=${manufacturer}&series=${selectedSeries}&model=${encodeURIComponent(selectedModel)}`
    }
  }

  const handleBack = () => {
    window.location.href = `/order/manufacturer?type=${discType}`
  }

  const getManufacturerName = (id: string) => {
    const names: { [key: string]: string } = {
      "john-deere": `John Deere`,
      "case-ih": `Case IH`,
      "massey-ferguson": `Massey Ferguson`,
      kubota: `Kubota`,
      "new-holland": `New Holland`,
      fendt: `Fendt`,
      claas: `CLAAS`,
      mahindra: `Mahindra & Mahindra`,
      "deutz-fahr": `Deutz-Fahr`,
      landini: `Landini`,
    }
    return names[id] || id
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          {" "}
          {/* Reduced py-4 to py-3 for smaller menu */}
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Image src="/images/twinforce-logo.png" alt="Twinforce Wheels Logo" width={120} height={30} />{" "}
              {/* Adjusted size */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex flex-1 justify-center space-x-6"
            >
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors relative group">
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
              <Link href="/order" className="text-green-600 font-medium relative group">
                {`Замовити`}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600"></span>
              </Link>
            </motion.div>
            <div className="hidden md:block w-[120px]"></div> {/* Adjusted width to match logo */}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button onClick={handleBack} variant="ghost" className="mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {`Назад`}
          </Button>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">{`Тип дисків`}</span>
            </div>
            <div className="w-8 h-px bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">{`Виробник`}</span>
            </div>
            <div className="w-8 h-px bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                3
              </div>
              <span className="ml-2 text-green-600 font-medium">{`Модель`}</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <span className="ml-2 text-gray-500">{`Контакти`}</span>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <SectionHeading
          title={`Вибір серії та моделі`}
          subtitle={`Крок 3: Оберіть серію та модель трактора ${manufacturer ? getManufacturerName(manufacturer) : ""}`}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Series Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{`Серія трактора`}</h2>
            <div className="space-y-3">
              {availableSeries.map((series, index) => (
                <AnimatedCard
                  key={series}
                  delay={0.1 * (index + 1)}
                  className={`cursor-pointer transition-all ${
                    selectedSeries === series ? "ring-2 ring-green-600 shadow-md" : "hover:shadow-sm"
                  }`}
                  onClick={() => {
                    setSelectedSeries(series)
                    setSelectedModel(null)
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{series}</span>
                    {selectedSeries === series && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-green-600 text-sm font-medium flex items-center"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" /> {`Вибрано`}
                      </motion.span>
                    )}
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </motion.div>

          {/* Model Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {`Модель трактора`}
              {selectedSeries && (
                <span className="text-base font-normal text-gray-600 ml-2">{`(${selectedSeries})`}</span>
              )}
            </h2>
            {selectedSeries ? (
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {availableModels.map((model, index) => (
                  <AnimatedCard
                    key={model}
                    delay={0.1 * (index + 1)}
                    className={`cursor-pointer transition-all ${
                      selectedModel === model ? "ring-2 ring-green-600 shadow-md" : "hover:shadow-sm"
                    }`}
                    onClick={() => setSelectedModel(model)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{model}</span>
                      {selectedModel === model && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-green-600 text-sm font-medium flex items-center"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                        </motion.span>
                      )}
                    </div>
                  </AnimatedCard>
                ))}

                {/* Custom Option */}
                <AnimatedCard
                  delay={0.1 * (availableModels.length + 1)}
                  className={`cursor-pointer transition-all border-dashed ${
                    selectedModel === "custom" ? "ring-2 ring-green-600 shadow-md" : "hover:shadow-sm"
                  }`}
                  onClick={() => setSelectedModel("custom")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{`Свій варіант (моделі немає в списку)`}</span>
                    {selectedModel === "custom" && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-green-600 text-sm font-medium flex items-center"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                      </motion.span>
                    )}
                  </div>
                </AnimatedCard>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>{`Спочатку оберіть серію трактора`}</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-between items-center mt-12"
        >
          <Button onClick={handleBack} variant="outline" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {`Назад`}
          </Button>

          <Button
            onClick={handleNext}
            disabled={!selectedModel}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 group"
          >
            {`Далі: Контактні дані`}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-blue-50 rounded-lg p-6 shadow-md"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-2">{`Не знайшли свою модель?`}</h3>
          <p className="text-blue-700 mb-4">
            {`Якщо вашої моделі немає в списку, оберіть "Свій варіант" і вкажіть точну модель в коментарях на наступному
            кроці. Наш менеджер зв'яжеться з вами для уточнення деталей.`}
          </p>
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group"
          >
            <a href="tel:+380686007030">
              <Phone className="w-4 h-4 mr-2" />
              {`Зателефонувати менеджеру`}
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
