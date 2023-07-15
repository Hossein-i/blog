import Section from "@/components/section";
import {
  getArticleMetadata,
  getArticlesMetadata,
} from "@/utils/getDocsMetadata";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const article = getArticleMetadata(slug);

  return {
    title: article.title,
    description: article.description,
  };
}

export const generateStaticParams = async () =>
  getArticlesMetadata().map((article) => ({ slug: article.slug }));

const ArticlePage = (props: any) => {
  const slug = props.params.slug;
  const article = getArticleMetadata(slug);

  return (
    <Section>
      <Section.SectionWrapperComponent className="pt-0 pb-2">
        <div className="">
          <article className="prose lg:prose-xl max-w-none prose-img:rounded-lg">
            <div className="bg-white p-4 mb-4 rounded-lg grid text-center">
              <div>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <div className="flex justify-center items-center gap-2">
                  <span>{article.timeToRead}</span>
                  <span className="p-1 bg-slate-500 rounded-full"></span>
                  <span>
                    {new Date(article.date).toDateString().slice(0, 11)}
                  </span>
                </div>
              </div>
              <div>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={250}
                  height={250}
                  className="w-full"
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Markdown>{article.content}</Markdown>
            </div>
          </article>
        </div>
        <div className=""></div>
      </Section.SectionWrapperComponent>
    </Section>
  );
};

export default ArticlePage;
