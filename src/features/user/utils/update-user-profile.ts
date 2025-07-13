import { UserData } from '@/context/UserContext'
import { db } from '@/lib/firestore'
import { doc, updateDoc } from 'firebase/firestore'

export async function updateUserProfile(uid: string, data: Partial<UserData>) {
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, data)
}
