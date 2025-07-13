import { auth } from '@/lib/firebase'
import { db } from '@/lib/firestore'
import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

import { useState } from 'react'

type RegisterResult = {
  success: boolean
  error: string | null
}

export function useRegister() {
  const [loading, setLoading] = useState(false)

  const register = async (
    email: string,
    password: string,
    name: string,
    phone?: string,
  ): Promise<RegisterResult> => {
    setLoading(true)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      console.log({ email, password, name, phone })

      await setDoc(doc(db, 'users', res.user.uid), {
        name,
        phone: phone || '',
        email,
        createdAt: new Date(),
      })

      return { success: true, error: null }
    } catch (err: unknown) {
      let errorMessage = 'Erro ao criar conta.'

      if (err instanceof FirebaseError) {
        switch (err.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'Este e-mail já está em uso.'
            break
          case 'auth/invalid-email':
            errorMessage = 'E-mail inválido.'
            break
          case 'auth/weak-password':
            errorMessage = 'A senha é muito fraca.'
            break
        }
      }

      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  return { register, loading }
}
