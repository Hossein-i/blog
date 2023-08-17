import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: "/private/",
    },
    sitemap: "https://hossein-i.ir/sitemap.xml",
  };
};

export default robots;
