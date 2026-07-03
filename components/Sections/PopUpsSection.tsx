export function PopUpsSection() {
  const popUps = [
    {
      date: 'August 26th',
      location: 'Highland, Utah',
      time: '10am–4pm',
    },
  ]

  return (
    <section id="pop-ups" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2
            className="text-foreground text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Find Us at Pop-Ups
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Come see us in person
          </p>
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden overflow-x-auto sm:block">
          <table className="w-full">
            <thead>
              <tr className="border-accent border-b-2">
                <th className="px-6 py-4 text-left">
                  <span
                    className="text-foreground font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Date
                  </span>
                </th>
                <th className="px-6 py-4 text-left">
                  <span
                    className="text-foreground font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Location
                  </span>
                </th>
                <th className="px-6 py-4 text-left">
                  <span
                    className="text-foreground font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Time
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {popUps.map((popUp, index) => (
                <tr
                  key={index}
                  className="border-border hover:bg-background/50 border-b"
                >
                  <td className="text-foreground px-6 py-4">{popUp.date}</td>
                  <td className="text-foreground px-6 py-4">
                    {popUp.location}
                  </td>
                  <td className="text-foreground px-6 py-4">{popUp.time}</td>
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
              className="border-accent bg-card rounded-lg border-2 p-6"
            >
              <div className="space-y-3">
                <div>
                  <p
                    className="text-muted-foreground text-sm font-semibold tracking-wider uppercase"
                    style={{ fontFamily: 'var(--font-accent)' }}
                  >
                    Date
                  </p>
                  <p className="text-foreground mt-1 text-lg font-semibold">
                    {popUp.date}
                  </p>
                </div>
                <div>
                  <p
                    className="text-muted-foreground text-sm font-semibold tracking-wider uppercase"
                    style={{ fontFamily: 'var(--font-accent)' }}
                  >
                    Location
                  </p>
                  <p className="text-foreground mt-1 text-lg font-semibold">
                    {popUp.location}
                  </p>
                </div>
                <div>
                  <p
                    className="text-muted-foreground text-sm font-semibold tracking-wider uppercase"
                    style={{ fontFamily: 'var(--font-accent)' }}
                  >
                    Time
                  </p>
                  <p className="text-foreground mt-1 text-lg font-semibold">
                    {popUp.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
