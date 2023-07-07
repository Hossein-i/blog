import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export interface DocMetadata {
  data: any;
  slug: string;
}

export interface PostMetadata {
  image: string;
  title: string;
  date: string;
  description: string;
  slug: string;
}
export interface CategoryMetadata {
  image: string;
  title: string;
  date: string;
  description: string;
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

const getPostsMetadata = (): PostMetadata[] => {
  return getDocsMetadata("posts").map((doc) => {
    return {
      image: doc.data.image,
      title: doc.data.title,
      date: doc.data.date,
      description: doc.data.description,
      slug: doc.slug,
    };
  });
};

const getCategoriesMetadata = (): CategoryMetadata[] => {
  return getDocsMetadata("categories").map((doc) => {
    return {
      image: doc.data.image,
      title: doc.data.title,
      date: doc.data.date,
      description: doc.data.description,
      slug: doc.slug,
    };
  });
};

export default getDocsMetadata;
export { getPostsMetadata, getCategoriesMetadata };
