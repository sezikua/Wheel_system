"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Truck } from "lucide-react"

type TractorSeries = {
  [manufacturer: string]: {
    [series: string]: string[]
  }
}

export default function SeriesPage() {
  const searchParams = useSearchParams()
  const discType = searchParams.get("type")
  const manufacturer = searchParams.get("manufacturer")
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null)
  const [selectedModel, setSelectedModel] = useState<string | null>(null)

  const tractorData: TractorSeries = {
    "john-deere": {
      "Серія 8R": ["8R 230", "8R 250", "8R 280", "8R 310", "8R 340", "8R 370", "8R 410"],
      "Серія 7R": ["7R 210", "7R 230", "7R 250", "7R 270", "7R 290", "7R 310", "7R 330"],
      "Серія 6R": [
        "6R 110",
        "6R 120",
        "6R 130",
        "6R 140",
        "6R 145",
        "6R 155",
        "6R 165",
        "6R 175",
        "6R 195",
        "6R 215",
        "6R 230",
        "6R 250",
      ],
      "Серія 6M": ["6M 110", "6M 120", "6M 130", "6M 140", "6M 150", "6M 155", "6M 165", "6M 175"],
      "Серія 5R": ["5R 100", "5R 110", "5R 120", "5R 130", "5R 140"],
      "Серія 5M": ["5M 090", "5M 100", "5M 105", "5M 115", "5M 125", "5M 135", "5M 140"],
    },
    "case-ih": {
      "Серія Magnum": ["Magnum 250", "Magnum 280", "Magnum 310", "Magnum 340", "Magnum 380", "Magnum 400"],
      "Серія Optum": ["Optum 270", "Optum 300"],
      "Серія Puma": [
        "Puma 130",
        "Puma 140",
        "Puma 150",
        "Puma 165",
        "Puma 180",
        "Puma 185",
        "Puma 200",
        "Puma 220",
        "Puma 230",
      ],
      "Серія Maxxum": ["Maxxum 110", "Maxxum 115", "Maxxum 125", "Maxxum 135", "Maxxum 145", "Maxxum 150"],
      "Серія Farmall": ["Farmall 75A", "Farmall 90A", "Farmall 100A", "Farmall 110A", "Farmall 120A"],
    },
    "massey-ferguson": {
      "Серія MF 8700 S": ["MF 8727 S", "MF 8730 S", "MF 8732 S", "MF 8735 S", "MF 8737 S", "MF 8740 S"],
      "Серія MF 7700 S": [
        "MF 7714 S",
        "MF 7716 S",
        "MF 7718 S",
        "MF 7719 S",
        "MF 7720 S",
        "MF 7722 S",
        "MF 7724 S",
        "MF 7726 S",
      ],
      "Серія MF 6700": ["MF 6712", "MF 6713", "MF 6714", "MF 6715", "MF 6716", "MF 6718"],
      "Серія MF 5700": ["MF 5708", "MF 5709", "MF 5710", "MF 5711", "MF 5712", "MF 5713"],
      "Серія MF 4700": ["MF 4707", "MF 4708", "MF 4709", "MF 4710", "MF 4711"],
    },
    kubota: {
      "Серія M7": ["M7-131 (130 к.с.)", "M7-151 (150 к.с.)", "M7-171 (170 к.с.)", "M7-172 (172 к.с.)"],
      "Серія M6": ["M6-131 (131 к.с.)", "M6-141 (141 к.с.)"],
      "Серія M5": ["M5-091 (92 к.с.)", "M5-101 (101 к.с.)", "M5-111 (105 к.с.)", "M5-131 (131 к.с.)"],
      "Серія M4": ["M4-063 (63 к.с.)", "M4-071 (71 к.с.)"],
      "Серія L": ["L2501 (24,8 к.с.)", "L3301 (33 к.с.)", "L3901 (37,5 к.с.)", "L4701 (47 к.с.)", "L5740 (57 к.с.)"],
      "Серія B": ["B2301 (23 к.с.)", "B2601 (26 к.с.)", "B3350 (33,5 к.с.)"],
    },
    "new-holland": {
      "Серія T8": ["T8.320", "T8.350", "T8.380", "T8.410", "T8.435"],
      "Серія T7": ["T7.165", "T7.175", "T7.190", "T7.210", "T7.230", "T7.245", "T7.260", "T7.270", "T7.290", "T7.315"],
      "Серія T6": ["T6.120", "T6.140", "T6.145", "T6.155", "T6.160", "T6.165", "T6.175", "T6.180"],
      "Серія T5": ["T5.100", "T5.110", "T5.115", "T5.120", "T5.130", "T5.140"],
      "Серія T4": ["T4.55", "T4.65", "T4.75", "T4.85", "T4.95", "T4.105"],
    },
    fendt: {
      "Серія 1000 Vario": [
        "Fendt 1038 Vario (396 к.с.)",
        "Fendt 1042 Vario (435 к.с.)",
        "Fendt 1046 Vario (476 к.с.)",
        "Fendt 1050 Vario (517 к.с.)",
      ],
      "Серія 900 Vario": [
        "Fendt 924 Vario",
        "Fendt 927 Vario",
        "Fendt 930 Vario",
        "Fendt 933 Vario",
        "Fendt 936 Vario",
        "Fendt 939 Vario",
        "Fendt 942 Vario",
      ],
      "Серія 800 Vario": [
        "Fendt 818 Vario",
        "Fendt 820 Vario",
        "Fendt 822 Vario",
        "Fendt 824 Vario",
        "Fendt 826 Vario",
        "Fendt 828 Vario",
      ],
      "Серія 700 Vario Gen7": [
        "Fendt 720 Vario",
        "Fendt 722 Vario",
        "Fendt 724 Vario",
        "Fendt 726 Vario",
        "Fendt 728 Vario",
      ],
      "Серія 600 Vario": [
        "Fendt 614 Vario (149 к.с.)",
        "Fendt 616 Vario (165 к.с.)",
        "Fendt 618 Vario (185 к.с.)",
        "Fendt 620 Vario (209 к.с.)",
      ],
      "Серія 500 Vario": [
        "Fendt 512 Vario (124 к.с.)",
        "Fendt 513 Vario (135 к.с.)",
        "Fendt 514 Vario (145 к.с.)",
        "Fendt 516 Vario (163 к.с.)",
      ],
      "Серія 300 Vario": [
        "Fendt 310 Vario (100 к.с.)",
        "Fendt 311 Vario (110 к.с.)",
        "Fendt 312 Vario (120 к.с.)",
        "Fendt 313 Vario (130 к.с.)",
        "Fendt 314 Vario (142 к.с.)",
      ],
    },
    claas: {
      "Серія Xerion 5000/4000": ["Xerion 5000 (530 к.с.)", "Xerion 4500 (462 к.с.)", "Xerion 4000 (435 к.с.)"],
      "Серія Axion 900": ["Axion 960", "Axion 950", "Axion 940", "Axion 930", "Axion 920"],
      "Серія Axion 800": ["Axion 870", "Axion 850", "Axion 840", "Axion 830", "Axion 820", "Axion 810", "Axion 800"],
      "Серія Arion 600": ["Arion 660", "Arion 650", "Arion 640", "Arion 630", "Arion 620", "Arion 610"],
      "Серія Arion 500": ["Arion 560", "Arion 550", "Arion 540", "Arion 530", "Arion 520", "Arion 510"],
      "Серія Arion 400": ["Arion 470", "Arion 460", "Arion 450", "Arion 440", "Arion 430", "Arion 420", "Arion 410"],
      "Серія Axos": ["Axos 340", "Axos 330", "Axos 320", "Axos 310"],
      "Серія Elios": ["Elios 240", "Elios 230", "Elios 220", "Elios 210"],
      "Серія Nexos": ["Nexos 250", "Nexos 240", "Nexos 230", "Nexos 220", "Nexos 210"],
    },
    mahindra: {
      "Серія 6000": ["6065 (65 к.с.)", "6075 (75 к.с.)"],
      "Серія 7000": ["7085 (85 к.с.)", "7095 (95 к.с.)"],
      "Серія 9000": ["9125 (125 к.с.)"],
    },
    "deutz-fahr": {
      "Серія 5G": ["5105G (105 к.с.)", "5115G (115 к.с.)", "5125G (125 к.с.)"],
      "Серія 6": ["6130 (130 к.с.)", "6140 (140 к.с.)", "6155 (155 к.с.)", "6165 (165 к.с.)", "6185 (185 к.с.)"],
      "Серія 7": ["7250 TTV (246 к.с.)"],
    },
    landini: {
      "Серія 7": ["7-160", "7-175", "7-190"],
      "Серія 6H": ["6-125H", "6-135H", "6-145H"],
      "Серія 5": ["5-100", "5-110", "5-120"],
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
      "john-deere": "John Deere",
      "case-ih": "Case IH",
      "massey-ferguson": "Massey Ferguson",
      kubota: "Kubota",
      "new-holland": "New Holland",
      fendt: "Fendt",
      claas: "CLAAS",
      mahindra: "Mahindra & Mahindra",
      "deutz-fahr": "Deutz-Fahr",
      landini: "Landini",
    }
    return names[id] || id
  }

  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Головна
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600">
                Про нас
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-green-600">
                Контакти
              </Link>
              <Link href="/order" className="text-green-600 font-medium">
                Замовити
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Тип дисків</span>
            </div>
            <div className="w-8 h-px bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <span className="ml-2 text-green-600 font-medium">Виробник</span>
            </div>
            <div className="w-8 h-px bg-green-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <span className="ml-2 text-green-600 font-medium">Модель</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <span className="ml-2 text-gray-500">Контакти</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Вибір серії та моделі</h1>
          <p className="text-lg text-gray-600">
            Крок 3: Оберіть серію та модель трактора {manufacturer ? getManufacturerName(manufacturer) : ""}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Series Selection */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Серія трактора</h2>
            <div className="space-y-3">
              {availableSeries.map((series) => (
                <Card
                  key={series}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedSeries === series ? "ring-2 ring-green-600 shadow-md" : "hover:shadow-sm"
                  }`}
                  onClick={() => {
                    setSelectedSeries(series)
                    setSelectedModel(null)
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{series}</span>
                      {selectedSeries === series && (
                        <span className="text-green-600 text-sm font-medium">✓ Вибрано</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Model Selection */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Модель трактора
              {selectedSeries && <span className="text-base font-normal text-gray-600 ml-2">({selectedSeries})</span>}
            </h2>
            {selectedSeries ? (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {availableModels.map((model) => (
                  <Card
                    key={model}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedModel === model ? "ring-2 ring-green-600 shadow-md" : "hover:shadow-sm"
                    }`}
                    onClick={() => setSelectedModel(model)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{model}</span>
                        {selectedModel === model && <span className="text-green-600 text-sm font-medium">✓</span>}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Custom Option */}
                <Card
                  className={`cursor-pointer transition-all hover:shadow-md border-dashed ${
                    selectedModel === "custom" ? "ring-2 ring-green-600 shadow-md" : "hover:shadow-sm"
                  }`}
                  onClick={() => setSelectedModel("custom")}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Свій варіант (моделі немає в списку)</span>
                      {selectedModel === "custom" && <span className="text-green-600 text-sm font-medium">✓</span>}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Спочатку оберіть серію трактора</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Button onClick={handleBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>

          <Button onClick={handleNext} disabled={!selectedModel} className="bg-green-600 hover:bg-green-700">
            Далі: Контактні дані
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Не знайшли свою модель?</h3>
          <p className="text-blue-700 mb-4">
            Якщо вашої моделі немає в списку, оберіть "Свій варіант" і вкажіть точну модель в коментарях на наступному
            кроці. Наш менеджер зв'яжеться з вами для уточнення деталей.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <a href="tel:+380686007030">Зателефонувати менеджеру</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
