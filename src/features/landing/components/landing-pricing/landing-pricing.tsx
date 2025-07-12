'use client'

import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import { Check } from 'lucide-react'

const features = [
  'Agendamentos ilimitados',
  'Página personalizada',
  'Dashboard fácil e intuitiva',
  'Lembretes via Whatsapp',
  'Suporte técnico',
]

export default function LandingPricing() {
  return (
    <section className="py-20 bg-white" id="preco">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
          Um único plano, todos os recursos
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Comece com 14 dias gratuitos. Sem cartão de crédito.
        </p>

        <div className="flex justify-center">
          <Card className="w-full max-w-md shadow-lg rounded-2xl bg-white text-gray-800">
            <CardHeader className="pb-0 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900">Plano Pro</h3>
              <p className="text-3xl font-bold text-orange-400">R$19,00</p>
              <p className="text-gray-600 mb-4">por mês (14 dias gratuitos)</p>
            </CardHeader>

            <CardBody className="px-6">
              <ul className="space-y-3 mb-6 justify-center align-center">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-gray-700">
                    <Check className="text-green-500 w-4 h-4 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardBody>

            <CardFooter className="px-6">
              <Button className="w-full bg-orange-400 text-white hover:bg-orange-500 font-bold">
                COMECE AGORA
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
