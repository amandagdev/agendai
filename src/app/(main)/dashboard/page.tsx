'use client'

import { AuthGuard } from '@/common/components/auth-guard/auth-guard'
import { useUser } from '@/context/UserContext'
import { Spinner } from '@heroui/react'

export default function DashboardPage() {
  const { user, loading } = useUser()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <Spinner />
      </div>
    )
  }

  if (!user) {
    return <p className="text-center text-red-500 mt-10">Não autorizado</p>
  }

  return (
    <AuthGuard>
      <div className="flex bg-white justify-center items-center h-screen">
        <p className="text-xl font-semibold text-orange-400">Olá, {user.name}</p>
      </div>
    </AuthGuard>
  )
}
