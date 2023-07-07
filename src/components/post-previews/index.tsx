import Link from "next/link";
import { ArticleMetadata } from "../../utils/getDocsMetadata";
import Image from "next/image";

const ArticlePreviewsComponent = (props: ArticleMetadata) => {
  return (
    <div>
      <Link href={`/articles/${props.slug}`}>
        <Image src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </Link>
    </div>
  );
};

export default ArticlePreviewsComponent;
