'use client'

import CardPrice from '@/common/components/card-price/card-price'

export default function LandingPricing() {
  return (
    <section className="py-20 w-full pt-96 bg-orange-500" id="preco">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl  text-white mt-4">Um único plano</h2>
        <h2 className="text-4xl  text-white mb-4">todos os recursos</h2>
        <p className="text-white mb-12 text-md">
          Comece com 14 dias gratuitos. Sem cartão de crédito.
        </p>

        <div className="flex justify-center">
          <CardPrice />
        </div>
      </div>
    </section>
  )
}
