import { render, screen } from '@testing-library/react'
import LandingPricing from './landing-pricing'

describe('LandingPricing', () => {
  it('renders the main pricing title', () => {
    render(<LandingPricing />)
    expect(
      screen.getByRole('heading', { name: /um único plano, todos os recursos/i }),
    ).toBeInTheDocument()
  })

  it('shows the free trial message', () => {
    render(<LandingPricing />)
    expect(
      screen.getByText(/Comece com 14 dias gratuitos\. Sem cartão de crédito\./i),
    ).toBeInTheDocument()
  })

  it('renders the plan name and price', () => {
    render(<LandingPricing />)
    expect(screen.getByText(/Plano Pro/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$19,00/i)).toBeInTheDocument()
  })

  it('displays all plan features', () => {
    render(<LandingPricing />)
    const features = [
      'Agendamentos ilimitados',
      'Página personalizada',
      'Dashboard fácil e intuitiva',
      'Lembretes via Whatsapp',
      'Suporte técnico',
    ]

    for (const feature of features) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }
  })

  it('has a call-to-action button', () => {
    render(<LandingPricing />)
    const button = screen.getByRole('button', { name: /comece agora/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-orange-400')
  })
})
