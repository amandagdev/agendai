'use client'

import { auth } from '@/lib/firebase'
import { Navbar, NavbarBrand, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/navbar'
import { Button } from '@heroui/react'
import { signOut } from 'firebase/auth'
import { CalendarDays, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: CalendarDays },
  { href: '/profile', label: 'Perfil', icon: User },
]

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/')
    setIsMenuOpen(false)
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white shadow-sm sm:hidden"
    >
      <NavbarBrand>
        <Link href="/" className="text-lg font-bold text-orange-500">
          Agendai
        </Link>
      </NavbarBrand>

      <NavbarMenuToggle aria-label="Menu" className="sm:hidden text-orange-400" />

      <NavbarMenu className="bg-neutral-50 text-neutral-800">
        {links.map(({ href, label }) => (
          <NavbarMenuItem key={href} isActive={pathname === href}>
            <Link
              href={href}
              className="text-neutral-800 hover:text-orange-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            onClick={handleLogout}
            startContent={<LogOut size={18} />}
            className="text-orange-500 hover:bg-orange-100"
            variant="light"
          >
            SAIR
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
