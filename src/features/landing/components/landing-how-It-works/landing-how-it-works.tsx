'use client'

import { Card, CardBody, CardHeader } from '@heroui/react'
import { CalendarDays, CheckCircle, Share2 } from 'lucide-react'

const STEPS = [
  {
    icon: <Share2 size={30} />,
    title: 'Compartilhe seu link',
    description: 'Envie o link de agendamento pelo WhatsApp, Instagram ou onde preferir.',
  },
  {
    icon: <CalendarDays size={30} />,
    title: 'O cliente escolhe o horário',
    description: 'Seu cliente seleciona o serviço, data e hora direto na sua página personalizada.',
  },
  {
    icon: <CheckCircle size={30} />,
    title: 'Você confirma e pronto',
    description: 'Agendamento feito com lembretes automáticos para você e para o cliente.',
  },
]

export default function LandingHowItWorks() {
  return (
    <section
      className="bg-white py-20 max-w-[83%] rounded-2xl p-6 lg:p-20 lg:pb-12 absolute top-170"
      id="como-funciona"
    >
      <div className=" flex items-center">
        <div className="w-full text-start">
          <p className="text-orange-500 text-sm">AGENDAMENTOS</p>
          <h2 className="text-3xl lg:text-4xl text-gray-800 mt-4">Como funciona</h2>
          <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">o AgendeJá?</h2>
        </div>

        <p className="text-gray-600 text-md max-w-2xl mx-auto">
          Simples, rápido e automatizado. Seus clientes agendam quando quiserem — e você só
          confirma.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {STEPS.map((step) => (
          <Card
            key={step.title}
            shadow="none"
            radius="lg"
            className="bg-white min-h-[200px] flex flex-col justify-between p-4"
          >
            <CardHeader className="flex flex-col items-start gap-4">
              <div className="text-orange-500 p-2">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            </CardHeader>
            <CardBody className="text-gray-600">{step.description}</CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}
