import { render, screen } from '@testing-library/react'
import Footer from './footer'

describe('Footer component', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /agendai/i })).toBeInTheDocument()
  })

  it('displays the contact email', () => {
    render(<Footer />)
    expect(screen.getByText(/agendai@email.com/i)).toBeInTheDocument()
  })

  it('includes the Instagram link', () => {
    render(<Footer />)
    expect(screen.getByText(/instagram/i)).toBeInTheDocument()
  })

  it('includes the Terms of Service link', () => {
    render(<Footer />)
    expect(screen.getByText(/termos de serviço/i)).toBeInTheDocument()
  })
})
