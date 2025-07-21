'use client'

import { useUser } from '@/context/UserContext'
import { db } from '@/lib/firestore'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export function useAppointments() {
  const { user } = useUser()
  const [appointments, setAppointments] = useState<unknown[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const q = query(
      collection(db, 'appointments'),
      where('userId', '==', user.uid),
      orderBy('date', 'asc'),
    )

    const unsub = onSnapshot(q, (snapshot) => {
      const arr = snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data()) }))
      setAppointments(arr)
      setLoading(false)
    })

    return () => unsub()
  }, [user])

  return { appointments, loading }
}
