import {
  getArticlesMetadataByCategory,
  getCategoriesMetadata,
  getCategoryMetadata,
} from "@/utils/getDocsMetadata";
import getDocContent from "@/utils/getDocContent";
import Image from "next/image";
import ArticleCardComponent from "@/components/article-card";
import ArticleCardsComponent from "@/components/article-cards";
import Section from "@/components/section";

export const generateStaticParams = async () => {
  return getCategoriesMetadata().map((category) => ({ slug: category.slug }));
};

const CategoryPage = (props: any) => {
  const slug = props.params.slug;
  const category = getCategoryMetadata(slug);
  const articlesMetadata = getArticlesMetadataByCategory(slug);

  const articleCards = () => (
    <ArticleCardsComponent>
      {articlesMetadata.map((articleMetadata) => (
        <ArticleCardComponent key={articleMetadata.slug} {...articleMetadata} />
      ))}
    </ArticleCardsComponent>
  );

  return (
    <Section className="pt-14 md:pt-28">
      <Section className="">
        <Section.SectionWrapperComponent>
          <Image
            src={category.image}
            alt={category.title}
            width={56}
            height={56}
          />
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </Section.SectionWrapperComponent>
      </Section>
      <Section className="bg-white">
        <Section.SectionWrapperComponent>
          <Section.SectionHeaderComponent title={category.title} />
          {articleCards()}
        </Section.SectionWrapperComponent>
      </Section>
    </Section>
  );
};

export default CategoryPage;
