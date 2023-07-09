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
        .sort((a, b) => (a.index > b.index ? 1 : -1))
        .slice(0, 4)
        .map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className={`bg-white px-4 py-16 rounded-2xl hover:bg-black hover:text-white transition`}
          >
            <Image
              className="w-16 h-16 object-contain p-2 mb-4 rounded-xl bg-white"
              src={category.image}
              alt={category.title}
              width={56}
              height={56}
            />
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
              {category.title}
            </h3>
          </Link>
        ))}
    </div>
  );
  const articleCards = () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {articlesMetadata
        .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
        .slice(0, 4)
        .map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="flex flex-col gap-4 p-4 border hover:bg-black hover:text-white transition rounded-2xl group"
          >
            <div>
              <Image
                src={article.image}
                alt={article.title}
                width={250}
                height={250}
                className="object-cover w-full aspect-video rounded-2xl"
              />
            </div>
            <div className="flex-auto">
              <h3 className="md:text-lg lg:text-xl font-bold">
                {article.title}
              </h3>
            </div>
            <div className="flex gap-4">
              <Image
                src={article.avatar}
                alt={article.author}
                width={56}
                height={56}
                className="w-14 h-14 bg-black rounded-full group-hover:bg-white transition"
              />
              <div className="flex-auto grid">
                <div className="font-semibold">{article.author}</div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {new Date(article.date).toDateString().slice(0, 11)}
                  </span>
                  <span className="bg-black w-1 h-1 rounded-full"></span>
                  <span>{article.timeToRead}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );

  return (
    <>
      <HeroHeaderContainer />
      <section className="mb-20">
        <div className="px-4 md:px-8 max-w-screen-2xl mx-auto">
          {sectionHeader("مرور دسته ها", "دیدن همه دسته ها", "/categories")}
          {categoryCards()}
        </div>
      </section>
      <section className="bg-white mb-20">
        <div className="p-4 md:p-8 max-w-screen-2xl mx-auto">
          {sectionHeader("مقالات برجسته", "دیدن همه مقالات", "/articles")}
          {articleCards()}
        </div>
      </section>
    </>
  );
};

export default HomePage;
