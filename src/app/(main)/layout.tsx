import Footer from '@/common/components/footer/footer'
import Header from '@/common/components/header/header'
import { UserProvider } from '@/context/UserContext'
import '../globals.css'
import { Providers } from '../providers'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className='light'>
      <body>
        <UserProvider>
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        </UserProvider>
      </body>
    </html>
  )
}
