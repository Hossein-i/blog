import Markdown from "markdown-to-jsx";
import { getCategoriesMetadata } from "@/utils/getDocsMetadata";
import getDocContent from "@/utils/getDocContent";
import Image from "next/image";

export const generateStaticParams = async () => {
  return getCategoriesMetadata().map((category) => ({ slug: category.slug }));
};

const CategoryPage = (props: any) => {
  const slug = props.params.slug;
  const category = getDocContent("categories", slug);

  return (
    <article className="prose lg:prose-xl">
      <Image
        src={category.data.image}
        alt={category.data.image}
        width={56}
        height={56}
      />
      <h1>{category.data.title}</h1>
      <p>{category.data.date}</p>
      <Markdown>{category.content}</Markdown>
    </article>
  );
};

export default CategoryPage;
