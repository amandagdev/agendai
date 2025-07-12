import { auth } from '@/lib/firebase'
import { db } from '@/lib/firestore'
import { User as FirebaseUser, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

type User = {
  uid: string
  email: string
  name: string
  whatsapp: string
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const docRef = doc(db, 'users', firebaseUser.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            ...docSnap.data(),
          } as User)
        } else {
          setUser(null)
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { user, loading }
}
