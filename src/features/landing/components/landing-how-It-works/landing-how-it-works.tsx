'use client'

import { Card, CardBody, CardHeader } from '@heroui/react'
import { CalendarDays, CheckCircle, Share2 } from 'lucide-react'

const STEPS = [
  {
    icon: <Share2 size={24} />,
    title: 'Compartilhe seu link',
    description: 'Envie o link de agendamento pelo WhatsApp, Instagram ou onde preferir.',
  },
  {
    icon: <CalendarDays size={24} />,
    title: 'O cliente escolhe o horário',
    description: 'Seu cliente seleciona o serviço, data e hora direto na sua página personalizada.',
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Você confirma e pronto',
    description: 'Agendamento feito com lembretes automáticos para você e para o cliente.',
  },
]

export default function LandingHowItWorks() {
  return (
    <section className="bg-gray-50 py-20" id="como-funciona">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
          Como funciona o Agendai?
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Simples, rápido e automatizado. Seus clientes agendam quando quiserem — e você só
          confirma.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <Card
              key={step.title}
              shadow="sm"
              radius="lg"
              className="bg-white min-h-[200px] flex flex-col justify-between p-4"
            >
              <CardHeader className="flex items-center gap-4">
                <div className="bg-orange-100 text-orange-500 p-2 rounded-full">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              </CardHeader>
              <CardBody className="text-gray-600">{step.description}</CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
