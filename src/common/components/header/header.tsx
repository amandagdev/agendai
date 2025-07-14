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

export default function Header() {
  const router = useRouter()
  const { user } = useUser()

  return (
    <Navbar className="bg-neutral-100 min-h-20">
      <NavbarBrand>
        <Link href="/" className="text-2xl font-bold text-orange-400">
          Agendai
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex gap-6 text-sm font-bold text-neutral-600"
        justify="end"
      >
        <>
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
        </>

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

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/como-funciona">Como Funciona</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/preco">Preço</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/login">Entrar</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
