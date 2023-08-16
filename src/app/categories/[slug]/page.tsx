import ArticleCardComponent from "@/components/article-card";
import ArticleCardsComponent from "@/components/article-cards";
import Section from "@/components/section";
import {
  getArticlesByCategory,
  getCategories,
  getCategory,
} from "@/utils/getData";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const category = getCategory(slug);

  const previousKeywords = (await parent)?.keywords || [];
  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: category.title,
    description: category.description,
    category: category.title,
    keywords: ["", ...previousKeywords],
    openGraph: {
      title: category.title,
      description: category.description,
      url: `https://hossein-i.ir/articles/${category.slug}`,
      type: "website",
      images: [category.image, ...previousImages],
    },
    twitter: {
      title: category.title,
      description: category.description,
      images: [category.image, ...previousImages],
    },
  };
}

export const generateStaticParams = async () => {
  return getCategories().map((category) => ({ slug: category.slug }));
};

const CategoryPage = (props: any) => {
  const slug = props.params.slug;
  const category = getCategory(slug);

  const articleCards = () => (
    <ArticleCardsComponent>
      {getArticlesByCategory(slug).map((article) => (
        <ArticleCardComponent key={article.slug} article={article} />
      ))}
    </ArticleCardsComponent>
  );

  return (
    <>
      <Section>
        <Section.SectionWrapperComponent className="bg-white dark:bg-slate-800 shadow rounded-lg p-4">
          <div className="grid justify-items-center gap-4 max-w-screen-sm mx-auto">
            <Image
              src={category.image}
              alt={category.title}
              width={112}
              height={112}
              className="p-2"
            />
            <h1 className="text-6xl font-bold mb-6">{category.title}</h1>
            <p>{category.description}</p>
          </div>
        </Section.SectionWrapperComponent>
      </Section>
      <Section>
        <Section.SectionWrapperComponent>
          <Section.SectionHeaderComponent title={category.title} />
          {articleCards()}
        </Section.SectionWrapperComponent>
      </Section>
    </>
  );
};

export default CategoryPage;
