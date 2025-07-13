'use client'

import { useUser } from '@/context/UserContext'
import { auth } from '@/lib/firebase'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { user, loading } = useUser()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/')
  }

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
        {!user && (
          <>
            <NavbarItem>
              <Link href="#como-funciona" className="hover:text-neutral-500 transition">
                COMO FUNCIONA
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#preco" className="hover:text-neutral-500 transition">
                PREÇO
              </Link>
            </NavbarItem>
          </>
        )}

        {!loading && !user && (
          <NavbarItem>
            <Link href="/login">
              <Button className="bg-orange-400 hover:bg-orange-500 text-white font-bold">
                ENTRAR
              </Button>
            </Link>
          </NavbarItem>
        )}

        {!loading && user && (
          <Dropdown>
            <DropdownTrigger>
              <Button variant="ghost" className="font-bold text-orange-500 hover:text-orange-600">
                MINHA CONTA
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="perfil">
              <DropdownItem key="profile" as={Link} href="/profile" className="text-gray-800">
                PERFIL
              </DropdownItem>
              <DropdownItem key="logout" onClick={handleLogout} className="text-orange-500">
                SAIR
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
          {user ? <Button onClick={handleLogout}>Sair</Button> : <Link href="/login">Entrar</Link>}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
