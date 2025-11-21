const sponsors = [
  {
    name: 'Sponsor One',
    href: 'https://example.com',
    imgSrc: 'https://placehold.co/180x48/png?text=Sponsor+1',
    alt: 'Sponsor One logo',
  },
  {
    name: 'Sponsor Two',
    href: 'https://example.com',
    imgSrc: 'https://placehold.co/180x48/png?text=Sponsor+2',
    alt: 'Sponsor Two logo',
  },
  {
    name: 'Sponsor Three',
    href: 'https://example.com',
    imgSrc: 'https://placehold.co/180x48/png?text=Sponsor+3',
    alt: 'Sponsor Three logo',
  },
];

export function Sponsors() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8">
        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-gray-500">
          <span className="size-1.5 rounded-full bg-gray-500" />
          Trusted by builders
        </div>

        {/* Card */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 sm:px-6 sm:py-5">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 transition hover:border-black"
              >
                <img
                  src={sponsor.imgSrc}
                  alt={sponsor.alt}
                  className="h-8 w-auto opacity-80 grayscale transition hover:opacity-100"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
