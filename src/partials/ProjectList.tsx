type Project = {
  name: string;
  description: string;
  link: string;
  img: {
    src: string;
    alt: string;
  };
  tags: string[];
};

const projects: Project[] = [
  {
    name: 'Deploy Preview Dashboard',
    description:
      'A clean dashboard to inspect build status, preview URLs, and live logs in one place — inspired by modern deploy flows.',
    link: '/',
    img: {
      src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimal dashboard UI with charts and panels',
    },
    tags: ['Astro', 'Tailwind', 'TypeScript', 'DX'],
  },
  {
    name: 'Edge Blog Starter',
    description:
      'A fast, content-first blog starter running on edge runtimes with sharp typography and instant transitions.',
    link: '/',
    img: {
      src: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Developer workspace with blog layout on screen',
    },
    tags: ['Next.js', 'Content', 'JavaScript'],
  },
  {
    name: 'Launch Links Microsite',
    description:
      'A tiny microsite for sharing launch links, status badges, and checklists in a single focused view.',
    link: '/',
    img: {
      src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Abstract map with pins representing connected links',
    },
    tags: ['Astro', 'UI Kit', 'TypeScript'],
  },
];

export function ProjectList() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10">
      {/* Title row */}
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-semibold text-black">Recent Projects</h2>
        <a
          href="/projects"
          className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 underline-offset-4 transition hover:text-black hover:underline"
        >
          View all →
        </a>
      </header>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col overflow-hidden rounded-xl border border-black bg-white"
          >
            <a href={project.link} className="block">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.img.src}
                  alt={project.img.alt}
                  loading="lazy"
                  className="size-full object-cover grayscale transition-transform duration-300 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            </a>

            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-base font-semibold text-black">
                <a
                  href={project.link}
                  className="transition-colors hover:text-gray-700"
                >
                  {project.name}
                </a>
              </h3>

              <p className="mt-2 text-sm text-gray-700">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 text-[0.65rem]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black px-2 py-0.5 uppercase tracking-[0.14em] text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
