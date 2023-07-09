import Image from "next/image";
import Link from "next/link";
import { ArticleMetadata } from "@/utils/getDocsMetadata";

const ArticleCardComponent = (article: ArticleMetadata) => {
  return (
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
        <h3 className="md:text-lg lg:text-xl font-bold">{article.title}</h3>
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
            <span>{new Date(article.date).toDateString().slice(0, 11)}</span>
            <span className="bg-black w-1 h-1 rounded-full"></span>
            <span>{article.timeToRead}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCardComponent;
