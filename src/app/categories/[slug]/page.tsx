import {
  getArticlesMetadataByCategory,
  getCategoriesMetadata,
  getCategoryMetadata,
} from "@/utils/getDocsMetadata";
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
        <ArticleCardComponent
          key={articleMetadata.slug}
          article={articleMetadata}
        />
      ))}
    </ArticleCardsComponent>
  );

  return (
    <>
      <Section>
        <Section.SectionWrapperComponent className="bg-black text-white rounded-lg p-4">
          <div className="grid justify-items-center gap-4 max-w-screen-sm mx-auto">
            <Image
              src={category.image}
              alt={category.title}
              width={112}
              height={112}
              className="bg-white rounded-xl p-2"
            />
            <h1 className="text-6xl font-bold mb-6">{category.title}</h1>
            <p>{category.description}</p>
          </div>
        </Section.SectionWrapperComponent>
      </Section>
      <Section>
        <Section.SectionWrapperComponent className="pt-8">
          <Section.SectionHeaderComponent title={category.title} />
          {articleCards()}
        </Section.SectionWrapperComponent>
      </Section>
    </>
  );
};

export default CategoryPage;
