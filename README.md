# The Meridian Atlas

The website for [The Meridian Atlas](https://meridian-atlas.vercel.app) — essays that hold Western
medicine and Traditional Chinese Medicine side by side, written by Joyce Ma.

Built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com).

## Commands

All commands run from the project root:

| Command           | What it does                              |
| :----------------- | :----------------------------------------- |
| `npm run dev`       | Look at the site on your laptop            |
| `git add .`         | Gather up what you changed                 |
| `git commit -m ""`  | Save it with a note                        |
| `git push`          | Send it live (Vercel rebuilds automatically) |

## Writing a new post

Add a `.mdx` file to `src/content/posts/`. See an existing post for the frontmatter shape
(`title`, `series`, `description`, `pubDate`, `pullQuote`, `draft`). New posts default to
`draft: true` — flip it to `false` when the essay is ready to publish.
