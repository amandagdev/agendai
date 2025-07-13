import { useUser } from '@/context/UserContext'
import { addToast } from '@heroui/react'
import { useRef, useState } from 'react'
import { updateUserProfile } from '../utils/update-user-profile'
import { uploadUserAvatar } from '../utils/upload-user-avatar'

export function useProfileForm() {
  const { user, setUser } = useUser()
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [hasChanges, setHasChanges] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const previewURL = URL.createObjectURL(file)
      setPreview(previewURL)
    }
  }

  const checkChanges = (form: HTMLFormElement) => {
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const cpf = formData.get('cpf') as string
    const file = formData.get('photoFile') as File

    return name !== user?.name || phone !== user?.phone || cpf !== user?.cpf || (file && file.name)
  }

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const changed = checkChanges(e.currentTarget) === true
    setHasChanges(changed)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!user) return

    setSaving(true)
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    let photoURL = user.photo || ''
    const file = formData.get('photoFile') as File

    if (file?.name) {
      photoURL = await uploadUserAvatar(user.uid, file)
    }

    try {
      const updatedUser = {
        name: data.name as string,
        phone: data.phone as string,
        cpf: data.cpf as string,
        photo: photoURL,
      }

      await updateUserProfile(user.uid, updatedUser)

      setUser({
        ...user,
        ...updatedUser,
      })

      setEditing(false)
      addToast({ description: 'Perfil atualizado', color: 'success' })
    } catch (err) {
      console.error('Erro ao atualizar perfil:', err)
      addToast({
        description: 'Erro ao atualizar perfil, tente novamente',
        color: 'danger',
      })
    } finally {
      setSaving(false)
      setPreview(null)
    }
  }

  return {
    editing,
    setEditing,
    saving,
    preview,
    setPreview,
    fileInputRef,
    handleFileChange,
    handleSubmit,
    handleChange,
    hasChanges,
  }
}
