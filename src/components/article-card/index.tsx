import Image from "next/image";
import Link from "next/link";
import { ArticleMetadata } from "@/utils/getDocsMetadata";

type Props = {
  article: ArticleMetadata;
};

const ArticleCardComponent = ({ article }: Props) => {
  return (
    <Link
      key={article.slug}
      href={`/articles/${article.slug}`}
      className="grid md:grid-cols-5 gap-4 bg-white shadow p-4 hover:bg-black hover:text-white transition rounded-lg group"
    >
      <div className="md:col-span-3 grid gap-2">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{article.timeToRead}</span>
          <span className="bg-gray-500 w-1 h-1 rounded-full"></span>
          <span>{new Date(article.date).toDateString().slice(0, 11)}</span>
        </div>
        <h3 className="md:text-lg lg:text-xl font-bold">{article.title}</h3>
        <p className="text-sm md:text-base text-gray-500">
          {article.description}
        </p>
      </div>
      <div className="md:col-span-2">
        <Image
          src={article.image}
          alt={article.title}
          width={250}
          height={250}
          className="object-cover w-full h-full aspect-video rounded-lg"
        />
      </div>
    </Link>
  );
};

export default ArticleCardComponent;
