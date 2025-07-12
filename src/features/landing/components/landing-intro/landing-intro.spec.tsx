import { render, screen } from '@testing-library/react'
import LandingIntro from './landing-intro'

describe('LandingIntro', () => {
  it('renders the main heading with highlight', () => {
    render(<LandingIntro />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Agendou\? Agendai!/i)
    expect(heading.querySelector('span')).toHaveClass('text-orange-400')
  })

  it('renders the intro paragraph', () => {
    render(<LandingIntro />)
    expect(
      screen.getByText(/Agendamentos automáticos, lembretes e controle em um só lugar\./i),
    ).toBeInTheDocument()
  })

  it('renders the call-to-action button', () => {
    render(<LandingIntro />)
    const button = screen.getByRole('button', { name: /Começar agora/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-orange-400')
  })

  it('renders the calendar image with correct alt text', () => {
    render(<LandingIntro />)
    const img = screen.getByAltText(/Calendário 3D/i)
    expect(img).toBeInTheDocument()
  })

  it('has correct section background and spacing', () => {
    const { container } = render(<LandingIntro />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-gray-100 py-20')
  })
})
