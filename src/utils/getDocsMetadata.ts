import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export interface DocMetadata {
  data: any;
  slug: string;
}

export interface ArticleMetadata {
  image: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: Date;
  timeToRead: string;
  category: string;
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
      slug: fileName.replace(".md", ""),
    };
  });

  return docs;
};

const getArticlesMetadata = (): ArticleMetadata[] => {
  return getDocsMetadata("articles").map((doc) => {
    return {
      image: doc.data.image,
      title: doc.data.title,
      description: doc.data.description,
      author: doc.data.author,
      avatar: doc.data.avatar,
      date: doc.data.date,
      timeToRead: doc.data.timeToRead,
      category: doc.data.category,
      slug: doc.slug,
    };
  });
};

const getCategoriesMetadata = (): CategoryMetadata[] => {
  return getDocsMetadata("categories").map((doc) => {
    return {
      index: doc.data.index,
      image: doc.data.image,
      title: doc.data.title,
      description: doc.data.description,
      background: doc.data.background,
      color: doc.data.color,
      slug: doc.slug,
    };
  });
};

export default getDocsMetadata;
export { getArticlesMetadata, getCategoriesMetadata };
