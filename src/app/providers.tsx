'use client'

import { HeroUIProvider, ToastProvider } from '@heroui/react'

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <HeroUIProvider>
      <ToastProvider placement="top-right" />
      {children}
    </HeroUIProvider>
  )
}
