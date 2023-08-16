import Link from "next/link";
import Image from "next/image";
import { ICategory } from "@/utils/interfaces";

const CategoryCardComponent = (category: ICategory) => {
  return (
    <Link
      key={category.slug}
      href={`/categories/${category.slug}`}
      className={`bg-white dark:bg-slate-800 shadow px-4 py-16 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition`}
    >
      <Image
        className="w-16 h-16 object-contain p-2 mb-4 rounded-lg bg-white dark:bg-slate-800"
        src={category.image}
        alt={category.title}
        width={56}
        height={56}
      />
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
        {category.title}
      </h3>
    </Link>
  );
};

export default CategoryCardComponent;
