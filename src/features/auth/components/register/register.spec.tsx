// Mocks primeiro
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}))

jest.mock('../../hooks/useRegister', () => ({
  useRegister: jest.fn(),
}))

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { useRegister } from '../../hooks/useRegister'
import Register from './register'

const mockedUseRouter = useRouter as jest.Mock
const mockedUseRegister = useRegister as jest.Mock

describe('Register', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the form correctly', () => {
    mockedUseRegister.mockReturnValue({ register: jest.fn(), loading: false })

    render(<Register />)

    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/celular/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/crie uma senha/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/repita a senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /criar conta/i })).toBeInTheDocument()
  })

  it('should show error when fields are empty', async () => {
    mockedUseRegister.mockReturnValue({ register: jest.fn(), loading: false })

    render(<Register />)

    fireEvent.click(screen.getByRole('button', { name: /criar conta/i }))

    await waitFor(() => {
      expect(screen.getByText(/preencha todos os campos/i)).toBeInTheDocument()
    })
  })

  it('should show error when passwords do not match', async () => {
    mockedUseRegister.mockReturnValue({ register: jest.fn(), loading: false })

    render(<Register />)

    fireEvent.change(screen.getByLabelText(/nome completo/i), { target: { value: 'Usuário' } })
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'teste@email.com' } })
    fireEvent.change(screen.getByLabelText(/celular/i), { target: { value: '11999999999' } })
    fireEvent.change(screen.getByLabelText(/crie uma senha/i), { target: { value: 'senha1' } })
    fireEvent.change(screen.getByLabelText(/repita a senha/i), { target: { value: 'senha2' } })

    fireEvent.click(screen.getByRole('button', { name: /criar conta/i }))

    await waitFor(() => {
      expect(screen.getByText(/as senhas não coincidem/i)).toBeInTheDocument()
    })
  })

  it('should call register and redirect on success', async () => {
    const push = jest.fn()
    mockedUseRouter.mockReturnValue({ push })

    const registerMock = jest.fn().mockResolvedValue({ success: true })
    mockedUseRegister.mockReturnValue({ register: registerMock, loading: false })

    render(<Register />)

    fireEvent.change(screen.getByLabelText(/nome completo/i), { target: { value: 'Usuário' } })
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'teste@email.com' } })
    fireEvent.change(screen.getByLabelText(/celular/i), { target: { value: '11999999999' } })
    fireEvent.change(screen.getByLabelText(/crie uma senha/i), { target: { value: 'senha123' } })
    fireEvent.change(screen.getByLabelText(/repita a senha/i), { target: { value: 'senha123' } })

    fireEvent.click(screen.getByRole('button', { name: /criar conta/i }))

    await waitFor(() => {
      expect(registerMock).toHaveBeenCalledWith('teste@email.com', 'senha123')
      expect(push).toHaveBeenCalledWith('/admin')
    })
  })

  it('should show error on register failure', async () => {
    mockedUseRegister.mockReturnValue({
      register: jest.fn().mockResolvedValue({ success: false, error: 'Erro no cadastro' }),
      loading: false,
    })

    render(<Register />)

    fireEvent.change(screen.getByLabelText(/nome completo/i), { target: { value: 'Usuário' } })
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'teste@email.com' } })
    fireEvent.change(screen.getByLabelText(/celular/i), { target: { value: '11999999999' } })
    fireEvent.change(screen.getByLabelText(/crie uma senha/i), { target: { value: 'senha123' } })
    fireEvent.change(screen.getByLabelText(/repita a senha/i), { target: { value: 'senha123' } })

    fireEvent.click(screen.getByRole('button', { name: /criar conta/i }))

    await waitFor(() => {
      expect(screen.getByText('Erro no cadastro')).toBeInTheDocument()
    })
  })
})
