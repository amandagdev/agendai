'use client'

import { Button, Form, Input } from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRegister } from '../../hooks/useRegister'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const { register, loading } = useRegister()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos.')
      return
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    const result = await register(email, password, name)

    if (result.success) {
      router.push('/dashboard')
    } else {
      setError(result.error || 'Erro desconhecido.')
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            <Link href="/">
              <span className="text-orange-500">agende</span>já
            </Link>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">Crie a sua conta gratuita</p>
          <p className="text-gray-700 mt-1 text-lg">
            Ganhe 14 dias para testar o Agendaí e transformar sua rotina de atendimentos.
          </p>
        </div>

        <Form onSubmit={handleRegister} className="space-y-4 bg-white p-6 rounded-2xl shadow">
          <Input
            id="name"
            type="text"
            label="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            id="email"
            type="email"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            id="password"
            type="password"
            label="Crie uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            id="confirm-password"
            type="password"
            label="Repita a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600"
            isLoading={loading}
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </Button>

          <div className="w-full text-center text-sm text-gray-500 mt-4">
            Já tem conta?{' '}
            <Link href="/login" className="text-orange-500 font-medium hover:underline">
              Entrar
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
