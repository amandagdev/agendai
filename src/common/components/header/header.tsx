'use client'

import { useUser } from '@/context/UserContext'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const router = useRouter()
  const { user } = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-neutral-100 min-h-20"
    >
      <NavbarBrand>
        <Link href="/" className="text-2xl font-bold text-orange-400">
          Agendai
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex gap-6 text-sm font-bold text-neutral-600"
        justify="end"
      >
        <NavbarItem>
          <Link href="#como-funciona" className="font-normal hover:text-neutral-500 transition">
            Como funciona
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#preco" className="font-normal hover:text-neutral-500 transition">
            Preço
          </Link>
        </NavbarItem>

        {user ? (
          <NavbarItem>
            <Button
              onClick={() => router.push('/dashboard')}
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold"
            >
              MINHA CONTA
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button
              onClick={() => router.push('/login')}
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold"
            >
              ENTRAR
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenuToggle className="sm:hidden text-orange-400" />

      <NavbarMenu className="bg-neutral-50 text-neutral-800">
        <NavbarMenuItem>
          <Link onClick={() => setIsMenuOpen(false)} href="#como-funciona">
            Como Funciona
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link onClick={() => setIsMenuOpen(false)} href="#preco">
            Preço
          </Link>
        </NavbarMenuItem>

        {user ? (
          <NavbarMenuItem>
            <Link onClick={() => setIsMenuOpen(false)} href="/dashboard">
              Minha Conta
            </Link>
          </NavbarMenuItem>
        ) : (
          <NavbarMenuItem>
            <Link onClick={() => setIsMenuOpen(false)} href="/login">
              Entrar
            </Link>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  )
}
