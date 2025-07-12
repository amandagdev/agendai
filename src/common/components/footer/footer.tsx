'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300 py-10">
      <div className="container mx-auto px-6 text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-orange-400">agendai</h2>

        <p className="text-sm">agendai@email.com</p>

        <div className="flex gap-4 mt-2">
          <Link href="#" className="hover:text-white transition">
            <i className="fab fa-instagram" /> Instagram
          </Link>
          <Link href="#" className="hover:text-white transition">
            Termos de Serviço
          </Link>
        </div>
      </div>
    </footer>
  )
}
