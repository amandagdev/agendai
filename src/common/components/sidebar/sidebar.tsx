'use client'

import { AuthGuard } from '@/common/components/auth-guard/auth-guard'
import { auth } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { CalendarDays, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
}

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: CalendarDays },
  { href: '/profile', label: 'Perfil', icon: User },
]

export default function SidebarLayout({ children }: Readonly<SidebarProps>) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/')
  }

  return (
    <AuthGuard>
      <div className="flex h-screen overflow-hidden bg-neutral-50">
        <aside className="w-64 bg-white shadow-md border-r flex flex-col justify-between p-4">
          <div className="space-y-6 overflow-y-auto">
            <div className="text-2xl font-bold text-orange-500">
              <Link href="/">Agendai</Link>
            </div>
            <nav className="flex flex-col gap-2">
              {links.map(({ href, label, icon: Icon }) => (
                <Link
                  prefetch
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition
                    ${pathname === href ? 'bg-orange-100 text-orange-600' : 'text-neutral-700 hover:bg-neutral-100'}`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100"
          >
            <LogOut size={18} /> SAIR
          </button>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <section className="bg-neutral-50 min-h-screen py-10 px-4">
            <div className="max-w-[1200px] mx-auto">{children}</div>
          </section>
        </main>
      </div>
    </AuthGuard>
  )
}
