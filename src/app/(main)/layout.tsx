'use client'

import Footer from '@/common/components/footer/footer'
import Header from '@/common/components/header/header'
import Sidebar from '@/common/components/sidebar/sidebar'
import { UserProvider } from '@/context/UserContext'
import { usePathname } from 'next/navigation'
import '../globals.css'
import { Providers } from '../providers'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()

  const isPublicRoute =
    pathname === '/' || pathname.startsWith('/login') || pathname.startsWith('/register')

  return (
    <html lang="pt-BR" className="light">
      <body>
        <UserProvider>
          {isPublicRoute ? (
            <>
              <Header />
              <Providers>{children}</Providers>
              <Footer />
            </>
          ) : (
            <Sidebar>
              <Providers>{children}</Providers>
            </Sidebar>
          )}
        </UserProvider>
      </body>
    </html>
  )
}
