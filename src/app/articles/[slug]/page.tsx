import Section from "@/components/section";
import { getArticle, getArticles } from "@/utils/getData";
import Markdown from "markdown-to-jsx";
import moment from "moment-jalaali";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

moment.loadPersian({ dialect: "persian-modern" });

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const article = getArticle(slug);

  const previousKeywords = (await parent)?.keywords || [];
  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: article.title,
    description: article.description,
    category: article.categories.at(0),
    keywords: ["", ...previousKeywords],
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://hossein-i.ir/articles/${article.slug}`,
      siteName: "Hossein-i",
      type: "article",
      publishedTime: article.date.toISOString(),
      authors: ["Hossein-i"],
      images: [article.image, ...previousImages],
      locale: "fa_IR",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image, ...previousImages],
      site: "",
      siteId: "",
      creator: "",
      creatorId: "",
    },
  };
}

export const generateStaticParams = async () =>
  getArticles().map((article) => ({ slug: article.slug }));

const ArticlePage = (props: any) => {
  const slug = props.params.slug;
  const article = getArticle(slug);

  return (
    <Section>
      <Section.SectionWrapperComponent className="pt-0 pb-0">
        <div className="">
          <article className="max-w-none prose lg:prose-xl prose-img:rounded-lg dark:prose-headings:text-white dark:prose-p:text-slate-500">
            <div className="bg-white dark:bg-slate-800 p-4 mb-4 rounded-lg grid text-center">
              <div>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <div className="flex justify-center items-center gap-2 not-prose text-sm text-slate-500">
                  <p>{article.timeToRead}</p>
                  <span className="p-[2px] bg-slate-500 rounded-full"></span>
                  <p>{moment(article.date).format("jDD jMMMM, jYYYY")}</p>
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
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <Markdown>{article.content || ""}</Markdown>
            </div>
          </article>
        </div>
        {/* <div className=""></div> */}
      </Section.SectionWrapperComponent>
    </Section>
  );
};

export default ArticlePage;
