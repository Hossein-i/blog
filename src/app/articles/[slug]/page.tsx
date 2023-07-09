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
    <div className="grid gap-4 lg:grid-cols-4 max-w-screen-2xl mx-auto p-4">
      <div className="lg:col-span-3">
        <article className="prose lg:prose-xl max-w-none prose-img:rounded-2xl">
          <div className="bg-white p-4 mb-4 rounded-2xl grid">
            <div>
              <Image
                src={article.data.image}
                alt={article.data.image}
                width={250}
                height={250}
                className="w-full rounded-2xl mt-0 lg:mt-0"
              />
            </div>
            <div>
              <h1>{article.data.title}</h1>
              <p>{article.data.description}</p>
            </div>
            <div className="not-prose flex items-center gap-4">
              <Image
                src={article.data.avatar}
                alt=""
                width={56}
                height={56}
                className="w-14 h-14 bg-black rounded-full"
              />
              <div className="flex-auto">
                <p>{article.data.author}</p>
                <div className="flex justify-between items-center">
                  <span>
                    {new Date(article.data.date).toDateString().slice(0, 11)}
                  </span>
                  <span></span>
                  <span>{article.data.timeToRead}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl">
            <Markdown>{article.content}</Markdown>
          </div>
        </article>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-white p-4 rounded-2xl">
          <p>مقالات مرتب</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
