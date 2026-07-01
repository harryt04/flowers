export function FlowerMeaningSection() {
  const flowers = [
    {
      name: "Roses",
      meanings: ["Love", "Passion", "Beauty"],
    },
    {
      name: "Sunflowers",
      meanings: ["Joy", "Warmth", "Longevity"],
    },
    {
      name: "Tulips",
      meanings: ["Grace", "Perfect Love", "Elegance"],
    },
    {
      name: "Peonies",
      meanings: ["Romance", "Prosperity", "Bashfulness"],
    },
    {
      name: "Daisies",
      meanings: ["Innocence", "Loyalty", "Cheerfulness"],
    },
    {
      name: "Lavender",
      meanings: ["Calmness", "Purity", "Grace"],
    },
  ];

  return (
    <section id="flower-meaning" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Flower Meanings
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            Every bloom carries a message
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flowers.map((flower) => (
            <div
              key={flower.name}
              className="rounded-lg border-l-4 border-soft-green bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                className="text-xl font-bold text-warm-charcoal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {flower.name}
              </h3>
              <p className="mt-3 text-warm-gray">
                {flower.meanings.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
