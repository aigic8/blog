export interface BlogPostFrontmatter {
  title: string;
  description: string;
  // TODO: add summary to BlogPosts later
  // summary: string;
  pubDate: Date;
  lastEditDate: Date;
  category: string;
  authors: string[];
}
