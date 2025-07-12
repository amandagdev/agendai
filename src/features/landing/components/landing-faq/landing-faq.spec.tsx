import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { faqQuestions } from './faq-question'
import LandingFAQ from './landing-faq'

describe('LandingFAQ', () => {
  it('renders the FAQ section title', () => {
    render(<LandingFAQ />)
    expect(screen.getByRole('heading', { name: /dúvidas/i })).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<LandingFAQ />)
    faqQuestions.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument()
    })
  })

  it('renders the first FAQ answer expanded by default', async () => {
    render(<LandingFAQ />)

    const firstAnswer = await screen.findByText(faqQuestions[0].answer)
    expect(firstAnswer).toBeInTheDocument()
  })
})
