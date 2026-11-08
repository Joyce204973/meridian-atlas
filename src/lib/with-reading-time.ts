import { render, type CollectionEntry } from "astro:content";

export async function withReadingTime(posts: CollectionEntry<"posts">[]) {
  return Promise.all(
    posts.map(async (post) => {
      const { remarkPluginFrontmatter } = await render(post);
      return { post, readingTime: remarkPluginFrontmatter.readingTime?.text as string | undefined };
    })
  );
}
