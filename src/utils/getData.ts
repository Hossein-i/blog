import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import moment from "moment-jalaali";
import { IArticle, ICategory, IDoc } from "./interfaces";

export const getDoc = (folder: string, slug: string): IDoc => {
  const path = `docs/${folder}/`;
  const file = `${path}${slug}.md`;
  const content = readFileSync(file, "utf-8");
  const matterResult = matter(content);

  return {
    slug: slug,
    data: matterResult.data,
    content: matterResult.content,
  };
};

export const getDocs = (folder: string): IDoc[] => {
  const path = `docs/${folder}/`;
  const files = readdirSync(path);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const docs = markdownFiles.map((fileName) =>
    getDoc(folder, fileName.replace(".md", ""))
  );

  return docs;
};

export const getArticle = (slug: string): IArticle => {
  const doc = getDoc("articles", slug);

  return {
    slug: doc.slug,
    image: doc.data.image,
    title: doc.data.title,
    description: doc.data.description,
    date: doc.data.date,
    timeToRead: doc.data.timeToRead,
    categories: doc.data.categories,
    content: doc.content,
  };
};

export const getArticles = (): IArticle[] =>
  getDocs("articles")
    .sort((a, b) =>
      moment(a.data.date).isBefore(b.data.date) ? 1 : -1
    )
    .map((doc) => ({
      slug: doc.slug,
      image: doc.data.image,
      title: doc.data.title,
      description: doc.data.description,
      date: doc.data.date,
      timeToRead: doc.data.timeToRead,
      categories: doc.data.categories,
    }));

export const getArticlesByCategory = (category: string) =>
  getArticles().filter((article) =>
    category === "" ? article : article.categories.includes(category)
  );

export const getCategory = (slug: string): ICategory => {
  const doc = getDoc("categories", slug);

  return {
    slug: doc.slug,
    index: doc.data.index,
    image: doc.data.image,
    title: doc.data.title,
    description: doc.data.description,
  };
};

export const getCategories = (): ICategory[] =>
  getDocs("categories")
    .sort((a, b) => (a.data.index > b.data.index ? 1 : -1))
    .map((doc) => ({
      slug: doc.slug,
      index: doc.data.index,
      image: doc.data.image,
      title: doc.data.title,
      description: doc.data.description,
    }));
