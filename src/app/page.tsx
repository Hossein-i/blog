import ArticleCardComponent from "@/components/article-card";
import ArticleCardsComponent from "@/components/article-cards";
import CategoryCardComponent from "@/components/category-card";
import CategoryCardsComponent from "@/components/category-cards";
import Section from "@/components/section";
import HeroHeaderContainer from "@/containers/hero-header";
import {
  getArticlesByCategory, getCategories,
} from "@/utils/getData";

const HomePage = () => {
  const categoryCards = () => (
    <CategoryCardsComponent>
      {getCategories()
        .slice(0, 4)
        .map((category) => (
          <CategoryCardComponent key={category.slug} {...category} />
        ))}
    </CategoryCardsComponent>
  );
  const articleCards = (category: string) => (
    <ArticleCardsComponent>
      {getArticlesByCategory(category)
        .slice(0, 4)
        .map((article) => (
          <ArticleCardComponent key={article.slug} article={article} />
        ))}
    </ArticleCardsComponent>
  );
  const articleSections = () => (
    <>
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
      {getCategories()
        .slice(0, 4)
        .map((category) => (
          <Section key={category.slug}>
            <Section.SectionWrapperComponent className="py-8">
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
      <Section>
        <Section.SectionWrapperComponent>
          <Section.SectionHeaderComponent
            title="مرور دسته ها"
            link="/categories"
            linkTitle="دیدن همه دسته ها"
          />
          {categoryCards()}
        </Section.SectionWrapperComponent>
      </Section>
      {articleSections()}
    </>
  );
};

export default HomePage;
