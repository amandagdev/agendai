import Footer from '@/common/components/footer/footer'
import Header from '@/common/components/header/header'
import '../globals.css'
import { Providers } from '../providers'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
