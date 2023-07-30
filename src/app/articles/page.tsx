import ArticleCardComponent from "@/components/article-card";
import ArticleCardsComponent from "@/components/article-cards";
import Section from "@/components/section";
import {
  getArticlesMetadataByCategory,
  getCategoryMetadata,
} from "@/utils/getDocsMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مقالات",
  description: "",
};

const ArticlesPage = () => {
  const articlesMetadata = getArticlesMetadataByCategory("");

  return (
    <Section>
      <Section.SectionWrapperComponent className="pt-2 pb-2">
        <Section.SectionHeaderComponent title="آخرین مقالات" />
        <ArticleCardsComponent>
          {articlesMetadata.map((article) => (
            <ArticleCardComponent key={article.slug} article={article} />
          ))}
        </ArticleCardsComponent>
      </Section.SectionWrapperComponent>
    </Section>
  );
};

export default ArticlesPage;
