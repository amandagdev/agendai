'use client'

import { useUser } from '@/context/UserContext'
import { Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function AuthGuard({ children }: Readonly<{ children: React.ReactNode }>) {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) return <Spinner />

  return <>{user ? children : null}</>
}
