import { readFileSync } from "fs";
import matter from "gray-matter";

const getDocContent = (folder: string, slug: string) => {
  const path = `docs/${folder}/`;
  const file = `${path}${slug}.md`;
  const content = readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export default getDocContent;
