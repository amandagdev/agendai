'use client'

import { auth } from '@/lib/firebase'
import { db } from '@/lib/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, Timestamp } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

export type UserData = {
  uid: string
  email: string
  name: string
  phone?: string
  cpf?: string
  photo?: string
  createdAt: Date
  trialEndsAt: Date
}

const UserContext = createContext<{
  user: UserData | null
  loading: boolean
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>
}>({
  user: null,
  loading: true,
  setUser: () => {},
})

export function UserProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const docRef = doc(db, 'users', firebaseUser.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data()
          const createdAt = (data.createdAt as Timestamp).toDate()
          const trialEndsAt = new Date(createdAt)
          trialEndsAt.setDate(trialEndsAt.getDate() + 15)

          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            name: data.name,
            phone: data.phone,
            cpf: data.cpf,
            photo: data.photo || '',
            createdAt,
            trialEndsAt,
          })
        }
      } else {
        setUser(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return <UserContext.Provider value={{ user, loading, setUser }}>{children}</UserContext.Provider>
}

export function useUser() {
  return useContext(UserContext)
}
