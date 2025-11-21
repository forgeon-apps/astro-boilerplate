import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

export type BlogPostFrontmatter = {
  title: string;
  description?: string;
  pubDate?: string | Date;
  imgSrc?: string;
  imgAlt?: string;
};

type BlogPostProps = {
  frontmatter: BlogPostFrontmatter;
  children: ReactNode;
};

export function BlogPost({ frontmatter, children }: BlogPostProps) {
  const { title, description, pubDate, imgSrc, imgAlt } = frontmatter;

  const formattedDate =
    pubDate != null ? new Date(pubDate).toLocaleDateString() : null;

  const hasAuthor = Boolean(AppConfig.author);

  return (
    <section className="w-full bg-white px-4 py-8 text-black sm:px-0">
      <article className="mx-auto max-w-3xl">
        {/* Cover image */}
        {imgSrc && (
          <div className="mb-6 overflow-hidden rounded-xl">
            <img
              src={imgSrc}
              alt={imgAlt || title}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-6 border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
            {title}
          </h1>

          {description && (
            <p className="mt-2 text-sm text-gray-700">{description}</p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            {formattedDate && (
              <time
                dateTime={new Date(pubDate as string | Date).toISOString()}
                className="uppercase tracking-[0.16em]"
              >
                {formattedDate}
              </time>
            )}

            {hasAuthor && (
              <span className="inline-flex items-center gap-1">
                <span className="size-1 rounded-full bg-gray-400" />
                <span>By {AppConfig.author}</span>
              </span>
            )}
          </div>
        </header>

        {/* Content */}
        <div
          className="
            prose max-w-none
            prose-headings:text-black
            prose-p:text-gray-800
            prose-a:text-black
            prose-a:underline
            prose-a:underline-offset-2
            prose-strong:text-black prose-code:text-black prose-li:text-gray-800
          "
        >
          {children}
        </div>
      </article>
    </section>
  );
}
