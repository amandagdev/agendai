import { render, screen } from '@testing-library/react'
import LandingHowItWorks from './landing-how-it-works'

describe('LandingHowItWorks', () => {
  it('renders the section title', () => {
    render(<LandingHowItWorks />)
    expect(screen.getByText(/Como funciona o Agendai/i)).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<LandingHowItWorks />)
    expect(screen.getByText(/Simples, rápido e automatizado/i)).toBeInTheDocument()
  })

  it('renders all three steps with title and description', () => {
    render(<LandingHowItWorks />)

    const titles = [
      /Compartilhe seu link/i,
      /O cliente escolhe o horário/i,
      /Você confirma e pronto/i,
    ]

    const descriptions = [
      /Envie o link de agendamento/i,
      /seleciona o serviço/i,
      /lembretes automáticos/i,
    ]

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })

    descriptions.forEach((desc) => {
      expect(screen.getByText(desc)).toBeInTheDocument()
    })
  })
})
