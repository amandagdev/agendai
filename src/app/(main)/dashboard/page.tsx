'use client'

import { useUser } from '@/features/auth/hooks/useUser'

export default function DashboardPage() {
  const { user, loading } = useUser()

  if (loading) return null
  if (!user) return <p>Não autorizado</p>

  return <div className="p-6 text-xl font-semibold">Olá, {user.name}</div>
}
