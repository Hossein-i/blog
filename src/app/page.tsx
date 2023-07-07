import ArticlePreviewsComponent from "@/components/post-previews";
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

  const sectionHeader = (title: string, titleLink: string, link: string) => (
    <div className="flex justify-between items-center mb-8">
      <h2 className="flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-bold after:content-[''] after:w-8 after:h-[1px] after:bg-black">
        {title}
      </h2>
      <Link
        className="flex items-center gap-2 md:text-lg lg:text-xl font-bold hover:underline"
        href={link}
      >
        <span>{titleLink}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
  const categoryCards = () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {categoriesMetadata
        // .sort((a, b) => (a.title > b.title ? 1 : -1))
        .slice(0, 4)
        .map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className={`bg-white px-4 py-16 rounded-2xl hover:${category.background} hover:${category.color} transition group`}
          >
            <Image
              className="w-16 h-16 object-contain p-2 mb-4 rounded-xl group-hover:bg-white"
              src={category.image}
              alt={category.title}
              width={56}
              height={56}
            />
            <h3 className="text-2xl font-bold">{category.title}</h3>
          </Link>
        ))}
    </div>
  );

  return (
    <>
      <HeroHeaderContainer />
      <section>
        <div className="px-4 py-20 md:px-8 max-w-screen-2xl mx-auto">
          {sectionHeader("مرور دسته ها", "دیدن همه دسته ها", "/categories")}
          {categoryCards()}
        </div>
      </section>
      {articlesMetadata.map((article) => (
        <ArticlePreviewsComponent key={article.slug} {...article} />
      ))}
    </>
  );
};

export default HomePage;
