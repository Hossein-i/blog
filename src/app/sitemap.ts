import { getArticles, getCategories } from "@/utils/getData";
import { MetadataRoute } from "next";

const baseURL = "https://hossein-i.ir";
const categories = getCategories().map((category) => ({
  url: `${baseURL}/categories/${category.slug}/`,
  lastModified: new Date(),
}));
const articles = getArticles().map((article) => ({
  url: `${baseURL}/articles/${article.slug}/`,
  lastModified: new Date(),
}));

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about-me/`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about-me/projects/`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about-me/achievement/`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/categories/`,
      lastModified: new Date(),
    },
    ...categories,
    {
      url: `${baseURL}/articles/`,
      lastModified: new Date(),
    },
    ...articles,
  ];
};

export default sitemap;
