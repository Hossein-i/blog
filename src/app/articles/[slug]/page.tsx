import Markdown from "markdown-to-jsx";
import { getArticlesMetadata } from "@/utils/getDocsMetadata";
import getDocContent from "@/utils/getDocContent";
import Image from "next/image";

export const generateStaticParams = async () => {
  return getArticlesMetadata().map((article) => ({ slug: article.slug }));
};

const ArticlePage = (props: any) => {
  const slug = props.params.slug;
  const article = getDocContent("articles", slug);

  return (
    <article className="prose lg:prose-xl">
      <Image src={article.data.image} alt={article.data.image} />
      <h1>{article.data.title}</h1>
      <p>{article.data.date}</p>
      <Markdown>{article.content}</Markdown>
    </article>
  );
};

export default ArticlePage;
