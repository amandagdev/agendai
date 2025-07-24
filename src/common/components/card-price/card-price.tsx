import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import { Check } from 'lucide-react'

const features = [
  'Agendamentos ilimitados',
  'Página personalizada',
  'Dashboard fácil e intuitiva',
  'Lembretes via Whatsapp',
  'Suporte técnico',
]

export default function CardPrice() {
  return (
    <Card className="w-full max-w-md shadow-lg rounded-2xl bg-white text-gray-800 p-10">
      <CardHeader className="flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900">Plano Pro</h3>
        <p className="text-3xl font-bold text-orange-500">R$19,00</p>
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
        <Button className="w-full bg-orange-500 text-white hover:bg-orange-400">
          Começar agora
        </Button>
      </CardFooter>
    </Card>
  )
}
