import ArticleCardComponent from "@/components/article-card";
import ArticleCardsComponent from "@/components/article-cards";
import CategoryCardComponent from "@/components/category-card";
import CategoryCardsComponent from "@/components/category-cards";
import Section from "@/components/section";
import HeroHeaderContainer from "@/containers/hero-header";
import {
  getArticlesMetadataByCategory,
  getCategoriesMetadata,
} from "@/utils/getDocsMetadata";

const HomePage = () => {
  const categoriesMetadata = getCategoriesMetadata();

  const categoryCards = () => (
    <CategoryCardsComponent>
      {categoriesMetadata.slice(0, 4).map((category) => (
        <CategoryCardComponent key={category.slug} {...category} />
      ))}
    </CategoryCardsComponent>
  );
  const articleCards = (category: string) => (
    <ArticleCardsComponent>
      {getArticlesMetadataByCategory(category)
        .slice(0, 4)
        .map((article) => (
          <ArticleCardComponent key={article.slug} {...article} />
        ))}
    </ArticleCardsComponent>
  );
  const articleSections = () => (
    <>
      {categoriesMetadata
        .slice(0, 4)
        .map((category) => (
          <Section key={category.slug}>
            <Section.SectionWrapperComponent>
              <Section.SectionHeaderComponent
                title={category.title}
                link={`/categories/${category.slug}`}
                linkTitle="دیدن همه مقالات"
              />
              {articleCards(category.slug)}
            </Section.SectionWrapperComponent>
          </Section>
        ))}
    </>
  );

  return (
    <>
      <HeroHeaderContainer />
      <Section className="py-10">
        <Section.SectionWrapperComponent>
          <Section.SectionHeaderComponent
            title="مرور دسته ها"
            link="/categories"
            linkTitle="دیدن همه دسته ها"
          />
          {categoryCards()}
        </Section.SectionWrapperComponent>
      </Section>
      <section className="mb-20 bg-white">
        <Section>
          <Section.SectionWrapperComponent>
            <Section.SectionHeaderComponent
              title="آخرین مقالات"
              link="/articles"
              linkTitle="دیدن همه مقالات"
            />
            {articleCards("")}
          </Section.SectionWrapperComponent>
        </Section>
        {articleSections()}
      </section>
    </>
  );
};

export default HomePage;
