'use client'

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/table'

export function AppointmentsTable() {
  //   const { appointments, loading } = useAppointments()

  const appointments = [
    {
      id: '1',
      client: 'João Silva',
      service: 'Corte de cabelo',
      date: '2025-07-15 14:00',
      status: 'confirmado',
    },
    {
      id: '2',
      client: 'Maria Souza',
      service: 'Manicure',
      date: '2025-07-16 10:30',
      status: 'pendente',
    },
    {
      id: '3',
      client: 'Pedro Lima',
      service: 'Depilação',
      date: '2025-07-17 09:00',
      status: 'cancelado',
    },
  ]

  return (
    <Table isStriped aria-label="Lista de Agendamentos">
      <TableHeader>
        <TableColumn>Cliente</TableColumn>
        <TableColumn>Serviço</TableColumn>
        <TableColumn>Data</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        {appointments.map((appt) => (
          <TableRow key={appt.id}>
            <TableCell>{appt.client}</TableCell>
            <TableCell>{appt.service}</TableCell>
            <TableCell>
              {new Date(appt.date).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'short',
              })}
            </TableCell>
            <TableCell className="capitalize">{appt.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
