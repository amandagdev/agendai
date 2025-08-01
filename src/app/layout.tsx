import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgendeJá',
  description:
    'Transforma a tua rotina com o AgendeJá. Automatiza agendamentos, envia lembretes e muito mais!',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="light">
      <body>{children}</body>
    </html>
  )
}
