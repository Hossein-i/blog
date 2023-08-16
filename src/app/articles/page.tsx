import ArticleCardComponent from "@/components/article-card";
import ArticleCardsComponent from "@/components/article-cards";
import Section from "@/components/section";
import { getArticlesByCategory } from "@/utils/getData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "آخرین مقالات",
};

const ArticlesPage = () => {
  return (
    <Section>
      <Section.SectionWrapperComponent className="pt-2 pb-2">
        <Section.SectionHeaderComponent title="آخرین مقالات" />
        <ArticleCardsComponent>
          {getArticlesByCategory("").map((article) => (
            <ArticleCardComponent key={article.slug} article={article} />
          ))}
        </ArticleCardsComponent>
      </Section.SectionWrapperComponent>
    </Section>
  );
};

export default ArticlesPage;
