'use client'

import { useUser } from '@/context/UserContext'
import { Avatar, Button, Card, CardBody, Input } from '@heroui/react'
import { useProfileForm } from '../../hooks/useProfileForm'

export function ProfileForm() {
  const { user } = useUser()
  const {
    editing,
    setEditing,
    saving,
    preview,
    fileInputRef,
    handleFileChange,
    handleSubmit,
    handleChange,
    hasChanges,
  } = useProfileForm()

  if (!user) return null

  return (
    <Card className="bg-white shadow-md rounded-xl">
      <CardBody className="space-y-6">
        <form onSubmit={handleSubmit} onChange={handleChange} className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="w-20 h-20 text-large" src={preview || user?.photo || ''} />

            <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-2">
              {editing && (
                <label className="cursor-pointer text-sm text-blue-600 font-medium">
                  <span className="underline">Alterar foto</span>
                  <input
                    type="file"
                    name="photoFile"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}

              <Button
                variant="ghost"
                className="text-sm font-semibold"
                onClick={() => setEditing((prev) => !prev)}
                type="button"
              >
                {editing ? 'Cancelar' : 'Editar dados'}
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Input label="Nome" name="name" defaultValue={user.name} readOnly={!editing} />
            <Input label="E-mail" value={user.email} readOnly />
            <Input
              label="Celular"
              name="phone"
              defaultValue={user.phone || ''}
              readOnly={!editing}
            />
            <Input label="CPF" name="cpf" defaultValue={user.cpf || ''} readOnly={!editing} />
          </div>

          {editing && (
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
              isLoading={saving}
              isDisabled={!hasChanges || saving}
            >
              Salvar alterações
            </Button>
          )}
        </form>
      </CardBody>
    </Card>
  )
}
