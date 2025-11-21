const Navbar = () => (
  <header className="border-b border-gray-200 bg-white">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      {/* Left: site title */}
      <a href="/" className="flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
          Astro
        </span>
        <span className="hidden text-sm text-gray-400 sm:inline">
          / playground blog
        </span>
      </a>

      {/* Right: nav items */}
      <nav>
        <ul className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
          <li>
            <a href="/posts/" className="hover:text-black">
              Blogs
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black"
            >
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export { Navbar };
