import { db } from '@/lib/firestore'
import { addDoc, collection, Timestamp } from 'firebase/firestore'

type Appointment = {
  userId: string
  date: Timestamp
  service: string
  status?: 'pendente' | 'confirmado' | 'cancelado'
}

export async function createAppointment(appointment: Appointment) {
  return await addDoc(collection(db, 'appointments'), {
    ...appointment,
    status: appointment.status || 'pendente',
    createdAt: Timestamp.now(),
  })
}
