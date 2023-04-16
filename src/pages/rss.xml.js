import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const post = await getCollection('tips');
  return rss({
    title: 'Temptips',
    description: 'Amazing tips site',
    site: context.site,
    items: post.map((post) => ({
      ...post.data,
      link: `/post/${post.slug}/`,
    })),
  });
}