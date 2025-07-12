jest.mock('@/lib/firebaseAuth', () => ({
  loginWithEmail: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}))

import { loginWithEmail } from '@/lib/firebaseAuth'
import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import Login from './login'

const mockedLogin = loginWithEmail as jest.Mock
const mockedUseRouter = useRouter as jest.Mock

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should display an error message on login failure', async () => {
    mockedLogin.mockRejectedValue(new Error('Login failed'))

    render(<Login />)

    fireEvent.change(screen.getByLabelText(/seu e-mail/i), {
      target: { value: 'usuario@invalido.com' },
    })
    fireEvent.change(screen.getByLabelText(/sua senha/i), {
      target: { value: 'senhainvalida' },
    })
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))

    const errorMessage = await screen.findByText('Email ou senha inválidos.')
    expect(errorMessage).toBeInTheDocument()

    const push = mockedUseRouter().push
    expect(push).not.toHaveBeenCalled()
  })
})
