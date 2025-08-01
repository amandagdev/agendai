'use client'
import { useUser } from '@/context/UserContext'
import { Button } from '@heroui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LandingIntro() {
  const router = useRouter()
  const { user, loading } = useUser()
  const handleClick = () => {
    if (!loading) {
      if (user) {
        router.push('/profile')
      } else {
        router.push('/register')
      }
    }
  }

  return (
    <section className="bg-gray-100 py-20 lg:pb-80">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:gap-50">
        <div className="text-center lg:text-left max-w-xl">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">Agendou?</h1>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AgendeJá!</h1>
            <p className="text-gray-600 text-lg mb-8">
              Agendamentos automáticos, lembretes e controle em um só lugar. Simples, rápido e sem
              complicações.
            </p>
          </div>
          <Button
            onClick={handleClick}
            className="text-white bg-orange-500 hover:bg-orange-400 text-sm px-8 py-5 rounded-xl"
          >
            Começar agora
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/ilustration.png"
            alt="Calendário 3D"
            width={420}
            height={420}
            className="object-contain hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}
