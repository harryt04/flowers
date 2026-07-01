export function OccasionGuideSection() {
  const occasions = [
    {
      occasion: "Celebrating a Win",
      description: "Mark the moment with joy and vibrant blooms",
    },
    {
      occasion: "Offering Comfort",
      description: "Soft pastels and calming flowers to show support",
    },
    {
      occasion: "Just Because",
      description: "Brighten someone's day with unexpected sunshine",
    },
    {
      occasion: "New Beginnings",
      description: "Fresh starts deserve fresh flowers",
    },
    {
      occasion: "Gratitude",
      description: "Thank someone in a way that lasts longer than words",
    },
  ];

  return (
    <section id="occasion-guide" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Flowers for Every Moment
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            Find the perfect bouquet for any occasion
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {occasions.map((item) => (
            <div
              key={item.occasion}
              className="rounded-lg border-l-4 border-soft-green bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3
                className="text-xl font-bold text-warm-charcoal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.occasion}
              </h3>
              <p className="mt-2 text-warm-gray">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
