'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-700 py-10 lg:h-[250px]">
      <div className="flex lg:flex-row w-full items-center justify-center gap-10 flex-col">
        <Link href="/">
          <Image src={'/images/logo.png'} alt="Agendai" width={200} height={200} />
        </Link>
        <Link href="#como-funciona" className="font-bold hover:text-neutral-500 transition">
          Como funciona
        </Link>
        <Link href="#preco" className="font-bold hover:text-neutral-500 transition">
          Preço
        </Link>
      </div>

      <p className="font-bold hover:text-neutral-500 text-center mt-10">agendaja@email.com</p>
    </footer>
  )
}
