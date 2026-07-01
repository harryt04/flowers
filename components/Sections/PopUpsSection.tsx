export function PopUpsSection() {
  const popUps = [
    {
      date: "August 26th",
      location: "Highland, Utah",
      time: "10am–4pm",
    },
  ];

  return (
    <section id="pop-ups" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-4xl font-bold text-warm-charcoal sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Find Us at Pop-Ups
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            Come see us in person
          </p>
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-soft-green">
                <th className="px-6 py-4 text-left">
                  <span
                    className="font-bold text-warm-charcoal"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Date
                  </span>
                </th>
                <th className="px-6 py-4 text-left">
                  <span
                    className="font-bold text-warm-charcoal"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Location
                  </span>
                </th>
                <th className="px-6 py-4 text-left">
                  <span
                    className="font-bold text-warm-charcoal"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Time
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {popUps.map((popUp, index) => (
                <tr key={index} className="border-b border-border hover:bg-cream/50">
                  <td className="px-6 py-4 text-warm-charcoal">{popUp.date}</td>
                  <td className="px-6 py-4 text-warm-charcoal">{popUp.location}</td>
                  <td className="px-6 py-4 text-warm-charcoal">{popUp.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {popUps.map((popUp, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-soft-green bg-white p-6"
            >
              <div className="space-y-3">
                <div>
                  <p
                    className="text-sm font-semibold text-warm-gray uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    Date
                  </p>
                  <p className="mt-1 text-lg font-semibold text-warm-charcoal">
                    {popUp.date}
                  </p>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-warm-gray uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    Location
                  </p>
                  <p className="mt-1 text-lg font-semibold text-warm-charcoal">
                    {popUp.location}
                  </p>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-warm-gray uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    Time
                  </p>
                  <p className="mt-1 text-lg font-semibold text-warm-charcoal">
                    {popUp.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
