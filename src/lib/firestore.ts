import { getFirestore } from 'firebase/firestore'
import { app } from './firebase'

// interface Appointment {
//   userId: string
//   clientName: string
//   service: string
//   date: Timestamp
//   status: 'pendente' | 'confirmado' | 'cancelado'
//   notes?: string
// }

export const db = getFirestore(app)
