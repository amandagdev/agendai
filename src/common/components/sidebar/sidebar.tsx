'use client'

import { AuthGuard } from '@/common/components/auth-guard/auth-guard'
import { auth } from '@/lib/firebase'
import { Button } from '@heroui/react'
import { signOut } from 'firebase/auth'
import { CalendarDays, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { MobileNavbar } from './navbar-mobile'

interface SidebarProps {
  children: ReactNode
}

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: CalendarDays },
  { href: '/profile', label: 'Perfil', icon: User },
]

export default function SidebarLayout({ children }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/')
  }

  return (
    <AuthGuard>
      <div className="flex bg-neutral-50">
        <aside className="hidden sm:flex sm:w-64 bg-white shadow-md border-r flex-col p-4">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Agendai
          </Link>
          <nav className="flex flex-col gap-2 mt-6">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  pathname === href
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Button
              onClick={handleLogout}
              startContent={<LogOut size={16} />}
              className="text-white hover:bg-orange-300 bg-orange-400"
              fullWidth
            >
              SAIR
            </Button>
          </div>
        </aside>

        <div className="sm:hidden fixed top-0 left-0 right-0 z-50">
          <MobileNavbar />
        </div>

        <main className="flex-1 overflow-auto pt-16 sm:pt-0">
          <section className="min-h-screen py-10 px-4">
            <div className="max-w-[1200px] mx-auto">{children}</div>
          </section>
        </main>
      </div>
    </AuthGuard>
  )
}
