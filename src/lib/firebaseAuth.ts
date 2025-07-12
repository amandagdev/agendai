import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'

export async function loginWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}
