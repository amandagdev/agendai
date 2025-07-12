import { render, screen } from '@testing-library/react'
import Header from './header'

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /agendai/i })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText(/como funciona/i)).toBeInTheDocument()
    expect(screen.getByText(/preço/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('renders mobile menu toggle', () => {
    render(<Header />)

    const buttons = screen.getAllByRole('button')
    const toggleButton = buttons.find((btn) =>
      btn.innerHTML.toLowerCase().includes('open navigation menu'),
    )

    expect(toggleButton).toBeDefined()
  })
})
