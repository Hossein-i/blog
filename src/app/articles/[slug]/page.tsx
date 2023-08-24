import Section from "@/components/section";
import Icon from "@/icons";
import { getArticle, getArticles } from "@/utils/getData";
import { LinkIcon } from "@heroicons/react/24/outline";
import Markdown from "markdown-to-jsx";
import moment from "moment-jalaali";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
  // const previousImages = (await parent)?.openGraph?.images || [];

  return {
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    title: article.title,
    description: article.description,
    category: article.categories.at(0),
    keywords: ["", ...previousKeywords],
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/articles/${article.slug}`,
      siteName: "Hossein-i",
      type: "article",
      publishedTime: article.date.toISOString(),
      authors: ["Hossein-i"],
      images: [article.image],
      locale: "fa_IR",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [{ url: article.image, alt: "" }],
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
        <div className="grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3">
            <article className="max-w-none prose lg:prose-xl prose-img:rounded-lg dark:prose-headings:text-white dark:prose-p:text-slate-500">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                <div>
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  <div className="flex justify-between items-center not-prose text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <p>{article.timeToRead}</p>
                      <span className="p-[2px] bg-slate-500 rounded-full"></span>
                      <p>{moment(article.date).format("jDD jMMMM jYYYY")}</p>
                    </div>
                    <div className="flex gap-4">
                      <button>
                        <LinkIcon className="w-5 h-5" />
                      </button>
                      <Link
                        href={`https://telegram.me/share/url?url=https://hossein-i.ir/articles/${article.slug}`}
                        target="_blank"
                      >
                        {Icon("Telegram")}
                      </Link>
                      <Link
                        href={`http://twitter.com/share?url=https://hossein-i.ir/articles/${
                          article.slug
                        }&hashtags=${article.categories.join(",")}`}
                        target="_blank"
                      >
                        {Icon("Twitter")}
                      </Link>
                      <Link
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://hossein-i.ir/articles/${article.slug}`}
                        target="_blank"
                      >
                        {Icon("LinkedIn")}
                      </Link>
                    </div>
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
                <Markdown>{article.content || ""}</Markdown>
              </div>
            </article>
          </div>
          <div className="lg:col-span-2">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg lg:sticky top-4"></div>
          </div>
        </div>
      </Section.SectionWrapperComponent>
    </Section>
  );
};

export default ArticlePage;

// https://telegram.me/share/url?url=<URL>&text=<TEXT>
// http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3
// https://www.linkedin.com/sharing/share-offsite/?url={url}
