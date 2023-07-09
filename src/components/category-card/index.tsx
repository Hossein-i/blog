import Link from "next/link";
import Image from "next/image";
import { CategoryMetadata } from "@/utils/getDocsMetadata";

const CategoryCardComponent = (category: CategoryMetadata) => {
  return (
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
  );
};

export default CategoryCardComponent;
