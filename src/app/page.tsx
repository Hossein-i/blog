import ArticleCardComponent from "@/components/article-card";
import ArticleCardsComponent from "@/components/article-cards";
import CategoryCardComponent from "@/components/category-card";
import CategoryCardsComponent from "@/components/category-cards";
import Section from "@/components/section";
import HeroHeaderContainer from "@/containers/hero-header";
import {
  getArticlesMetadata,
  getCategoriesMetadata,
} from "@/utils/getDocsMetadata";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const categoriesMetadata = getCategoriesMetadata();
  const articlesMetadata = getArticlesMetadata();

  const categoryCards = () => (
    <CategoryCardsComponent>
      {categoriesMetadata
        .sort((a, b) => (a.index > b.index ? 1 : -1))
        .slice(0, 4)
        .map((category) => (
          <CategoryCardComponent key={category.slug} {...category} />
        ))}
    </CategoryCardsComponent>
  );
  const articleCards = (category: string) => (
    <ArticleCardsComponent>
      {articlesMetadata
        .filter((article) => article.category.includes(category))
        .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
        .slice(0, 4)
        .map((article) => (
          <ArticleCardComponent key={article.slug} {...article} />
        ))}
    </ArticleCardsComponent>
  );
  const articleSections = () => (
    <>
      {categoriesMetadata
        .sort((a, b) => (a.index > b.index ? 1 : -1))
        .slice(0, 4)
        .map((category) => (
          <Section key={category.slug}>
            <Section.SectionHeaderComponent
              title={category.title}
              link={`/articles?filter=${category.slug}`}
              linkTitle="دیدن همه مقالات"
            />
            {articleCards(category.slug)}
          </Section>
        ))}
    </>
  );

  return (
    <>
      <HeroHeaderContainer />
      <Section className="mb-20">
        <Section.SectionHeaderComponent
          title="مرور دسته ها"
          link="/categories"
          linkTitle="دیدن همه دسته ها"
        />
        {categoryCards()}
      </Section>
      <section className="mb-20 bg-white">
        <Section>
          <Section.SectionHeaderComponent
            title="آخرین مقالات"
            link="/articles"
            linkTitle="دیدن همه مقالات"
          />
          {articleCards("")}
        </Section>
        {articleSections()}
      </section>
    </>
  );
};

export default HomePage;
