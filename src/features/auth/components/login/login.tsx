'use client'

import { loginWithEmail } from '@/lib/firebaseAuth'
import { Button, Form, Input } from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const cleanEmail = email.trim().toLowerCase()
      const cleanPassword = password.trim()

      await loginWithEmail(cleanEmail, cleanPassword)
      router.push('/dashboard')
    } catch (err: unknown) {
      console.log(err)
      setError('Email ou senha inválidos.')
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            <Link href="/">
              <span className="text-orange-500">agende</span>já
            </Link>
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Faça login na sua conta</p>
        </div>

        <Form onSubmit={handleLogin} className="space-y-4 p-6 rounded-2xl shadow">
          <Input
            id="email"
            type="email"
            label="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return 'Porfavor insira seu e-mail'
              }
            }}
          />
          <Input
            id="password"
            type="password"
            label="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return 'Porfavor insira sua senha'
              }
            }}
          />

          <div className="w-full text-right">
            <Link href="/forgot" className="text-sm text-orange-500 hover:underline">
              Esqueci a senha
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
            Entrar
          </Button>

          <div className="w-full text-center text-sm text-gray-500 mt-4">
            Ainda não possui conta?{' '}
            <Link href="/register" className="text-orange-500 font-medium hover:underline">
              Cadastre-se
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
