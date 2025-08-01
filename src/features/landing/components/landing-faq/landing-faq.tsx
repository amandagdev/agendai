'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { faqQuestions } from './faq-question'

const itemClasses = {
  base: 'bg-white rounded-lg shadow-sm',
  title: 'text-gray-800  font-medium cursor-pointer',
  trigger: 'px-4 py-3',
  content: 'text-gray-600 px-4 pb-4 pt-2',
}

export default function LandingFAQ() {
  return (
    <section className="py-20 w-ful">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Dúvidas</h2>

        <div className="max-w-2xl mx-auto text-left">
          <Accordion
            variant="splitted"
            defaultExpandedKeys={['0']}
            itemClasses={itemClasses}
            showDivider={false}
          >
            {faqQuestions.map((faq) => (
              <AccordionItem key={faq.answer} title={faq.question} aria-label={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
