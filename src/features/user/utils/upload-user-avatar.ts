import { storage } from '@/lib/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export async function uploadUserAvatar(uid: string, file: File): Promise<string> {
  const storageRef = ref(storage, `users/${uid}/avatar.jpg`)
  await uploadBytes(storageRef, file)
  return await getDownloadURL(storageRef)
}
