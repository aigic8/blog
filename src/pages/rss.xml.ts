import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Aigic 8 | Blog",
    description: "My journey searching the world",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
