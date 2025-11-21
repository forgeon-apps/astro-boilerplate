import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,_transparent_55%)]" />

    <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:items-start md:py-24">
      <HeroAvatar
        title={
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Frontend / DX playground
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-50 md:text-4xl">
              <GradientText>Hi, I&apos;m Astro</GradientText>
            </h1>
          </div>
        }
        description={
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-400 md:text-base">
            <p>
              I craft minimal, fast web experiences — clean layouts, sharp
              typography, and no unnecessary noise.
            </p>
            <p>
              Lately I&apos;ve been playing with{' '}
              <a
                className="border-b border-dotted border-neutral-500 text-neutral-100 hover:border-neutral-300"
                href="/"
              >
                Astro
              </a>{' '}
              on edge runtimes, taking cues from Vercel-style workflows to see
              how far a modern frontend stack can go.
            </p>
          </div>
        }
        avatar={
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-2xl " />
            <div className="relative overflow-hidden rounded-2xl border">
              <img
                className="h-64 w-56 object-cover md:h-72 md:w-60"
                src="/src/images/astro.jpg"
                alt="Developer working at a computer in a dark UI environment"
                loading="lazy"
              />
            </div>
          </div>
        }
        socialButtons={
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <HeroSocial
                src="https://img.icons8.com/color/48/twitter--v1.png"
                alt="Twitter icon"
              />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <HeroSocial
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="Facebook icon"
              />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <HeroSocial
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="LinkedIn icon"
              />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <HeroSocial
                src="https://img.icons8.com/color/48/youtube-play.png"
                alt="YouTube icon"
              />
            </a>

            <span className="ml-2 inline-flex items-center rounded-full border border-neutral-800 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-400">
              Deploy · Preview · Iterate
            </span>
          </div>
        }
      />
    </div>
  </Section>
);

export { Hero };
