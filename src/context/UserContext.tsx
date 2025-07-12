'use client'

import { auth } from '@/lib/firebase'
import { db } from '@/lib/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

type UserData = {
  uid: string
  email: string
  name: string
  phone: string
}

const UserContext = createContext<{ user: UserData | null; loading: boolean }>({
  user: null,
  loading: true,
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
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            name: data.name,
            phone: data.phone,
          })
        }
      } else {
        setUser(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return <UserContext.Provider value={{ user, loading }}>{children}</UserContext.Provider>
}

export function useUser() {
  return useContext(UserContext)
}
