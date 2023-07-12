import CategoryCardComponent from "@/components/category-card";
import CategoryCardsComponent from "@/components/category-cards";
import Section from "@/components/section";
import { getCategoriesMetadata } from "@/utils/getDocsMetadata";

const CategoriesPage = () => {
  const categoriesMetadata = getCategoriesMetadata();

  return (
    <Section className="pt-14 md:pt-28">
      <Section.SectionWrapperComponent>
        <Section.SectionHeaderComponent title="دسته بندی ها" />
        <CategoryCardsComponent>
          {categoriesMetadata
            .sort((a, b) => (a.index > b.index ? 1 : -1))
            .slice(0, 4)
            .map((category) => (
              <CategoryCardComponent key={category.slug} {...category} />
            ))}
        </CategoryCardsComponent>
      </Section.SectionWrapperComponent>
    </Section>
  );
};

export default CategoriesPage;
