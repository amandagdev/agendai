'use client'

import { useUser } from '@/context/UserContext'
import { ProfileForm } from '@/features/user/components/profile-form/profile-form'
import { Button, Card, CardBody, Tab, Tabs } from '@heroui/react'

export default function ProfilePage() {
  const { user } = useUser()

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Minha Conta</h1>

      <Tabs aria-label="Minha Conta">
        <Tab key="conta" title="Conta">
          <ProfileForm />
        </Tab>

        <Tab key="plano" title="Meu Plano">
          <Card className="bg-white shadow-md rounded-xl">
            <CardBody className="space-y-4">
              <h2 className="text-lg font-bold text-gray-700">Plano Atual</h2>
              <p className="text-gray-600">
                Teste Gratuito até {user?.trialEndsAt?.toLocaleDateString('pt-BR')}
              </p>
              <Button isDisabled className="bg-orange-500 text-white hover:bg-orange-600 w-full">
                Assinar um plano
              </Button>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </>
  )
}
