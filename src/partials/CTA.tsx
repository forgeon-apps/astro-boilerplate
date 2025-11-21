import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-black/80 px-6 py-10 text-neutral-100 shadow-xl sm:px-8 sm:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_55%)]" />
      <div className="relative">
        <Newsletter
          title={
            <>
              Stay in the <GradientText>Loop</GradientText>
            </>
          }
          description="Get occasional updates about new playgrounds, experiments, and ideas around modern frontend, Astro, and deployment workflows."
        />
      </div>
    </div>
  </Section>
);

export { CTA };
