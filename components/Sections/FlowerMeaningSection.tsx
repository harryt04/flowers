export function FlowerMeaningSection() {
  const flowers = [
    {
      name: 'Roses',
      meanings: ['Love', 'Passion', 'Beauty'],
    },
    {
      name: 'Sunflowers',
      meanings: ['Joy', 'Warmth', 'Longevity'],
    },
    {
      name: 'Tulips',
      meanings: ['Grace', 'Perfect Love', 'Elegance'],
    },
    {
      name: 'Peonies',
      meanings: ['Romance', 'Prosperity', 'Bashfulness'],
    },
    {
      name: 'Daisies',
      meanings: ['Innocence', 'Loyalty', 'Cheerfulness'],
    },
    {
      name: 'Lavender',
      meanings: ['Calmness', 'Purity', 'Grace'],
    },
  ]

  return (
    <section id="flower-meaning" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-warm-charcoal text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Flower Meanings
          </h2>
          <p className="text-warm-gray mt-4 text-lg">
            Every bloom carries a message
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flowers.map((flower) => (
            <div
              key={flower.name}
              className="border-accent rounded-lg border-l-4 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3
                className="text-warm-charcoal text-xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {flower.name}
              </h3>
              <p className="text-warm-gray mt-3">
                {flower.meanings.join(' • ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
