'use client'

import { AppointmentsTable } from '@/features/appointments/appointments-table/appointments-table'

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Meus Agendamentos</h1>
      <AppointmentsTable />
    </>
  )
}
