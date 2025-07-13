'use client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingIntro() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Agendou? <span className="text-orange-400">Agendai!</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Agendamentos automáticos, lembretes e controle em um só lugar. Simples, rápido e sem
            complicações.
          </p>
          <Button className="text-white bg-orange-400 hover:bg-orange-500 text-lg px-6 py-3 rounded-xl">
            <Link href="/register">COMEÇAR AGORA</Link>
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/calendar.png"
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
