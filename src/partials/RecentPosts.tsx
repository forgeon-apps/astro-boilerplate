import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { Section } from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = ({ postList }: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-lg font-semibold text-black">Recent Posts</div>

        <a
          href="/posts/"
          className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 underline-offset-4 transition hover:text-black hover:underline"
        >
          View all posts →
        </a>
      </div>
    }
  >
    <div className="mt-4 rounded-2xl border border-black bg-white p-4 text-black sm:p-5">
      <ul className="divide-y divide-gray-200">
        {postList.map((post) => (
          <li key={post.url} className="py-3 first:pt-0 last:pb-0">
            <a href={post.url} className="block">
              <h3 className="text-sm font-semibold text-black">
                {post.frontmatter.title}
              </h3>
              {post.frontmatter.description && (
                <p className="mt-1 text-xs text-gray-600">
                  {post.frontmatter.description}
                </p>
              )}
              {post.frontmatter.pubDate && (
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-gray-500">
                  {new Date(post.frontmatter.pubDate).toLocaleDateString()}
                </p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export { RecentPosts };
