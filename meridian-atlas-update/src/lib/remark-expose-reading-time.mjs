// remark-reading-time writes to `file.data.readingTime`, but Astro's content
// loader (for both .md and .mdx) only reads `file.data.astro.frontmatter` as
// `remarkPluginFrontmatter`. Copy it across so pages can read it from there.
export default function remarkExposeReadingTime() {
  return (_tree, file) => {
    if (!file.data.readingTime) return;
    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.readingTime = file.data.readingTime;
  };
}
