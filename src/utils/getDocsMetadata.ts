import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export interface DocMetadata {
  data: any;
  content: string;
  slug: string;
}

export interface ArticleMetadata {
  image: string;
  title: string;
  description: string;
  date: Date;
  timeToRead: string;
  categories: string[];
  content: string;
  slug: string;
}
export interface CategoryMetadata {
  index: number;
  image: string;
  title: string;
  description: string;
  background: string;
  color: string;
  slug: string;
}

const getDocsMetadata = (folder: string): DocMetadata[] => {
  const path = `docs/${folder}/`;
  const files = readdirSync(path);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const docs = markdownFiles.map((fileName) => {
    const fileContent = readFileSync(`${path}${fileName}`, "utf-8");
    const matterResult = matter(fileContent);

    return {
      data: matterResult.data,
      content: matterResult.content,
      slug: fileName.replace(".md", ""),
    };
  });

  return docs;
};

const getArticlesMetadata = (): ArticleMetadata[] =>
  getDocsMetadata("articles")
    .sort((a, b) => (new Date(a.data.date) < new Date(b.data.date) ? 1 : -1))
    .map((doc) => ({
      image: doc.data.image,
      title: doc.data.title,
      description: doc.data.description,
      date: doc.data.date,
      timeToRead: doc.data.timeToRead,
      categories: doc.data.categories,
      content: doc.content,
      slug: doc.slug,
    }));

const getArticleMetadata = (slug: string): ArticleMetadata =>
  getArticlesMetadata().filter((doc) => doc.slug.includes(slug))[0];

const getArticlesMetadataByCategory = (category: string) =>
  getArticlesMetadata().filter((article) =>
    category === "" ? article : article.categories.includes(category)
  );

const getCategoriesMetadata = (): CategoryMetadata[] =>
  getDocsMetadata("categories")
    .sort((a, b) => (a.data.index > b.data.index ? 1 : -1))
    .map((doc) => ({
      index: doc.data.index,
      image: doc.data.image,
      title: doc.data.title,
      description: doc.data.description,
      background: doc.data.background,
      color: doc.data.color,
      slug: doc.slug,
    }));

const getCategoryMetadata = (slug: string): CategoryMetadata =>
  getCategoriesMetadata().filter((doc) => doc.slug.includes(slug))[0];

export default getDocsMetadata;
export {
  getArticlesMetadata,
  getArticleMetadata,
  getArticlesMetadataByCategory,
  getCategoriesMetadata,
  getCategoryMetadata,
};
