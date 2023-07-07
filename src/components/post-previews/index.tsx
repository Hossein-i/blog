import Link from "next/link";
import { PostMetadata } from "../../utils/getDocsMetadata";
import Image from "next/image";

const PostPreviewsComponent = (props: PostMetadata) => {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <Image src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </Link>
    </div>
  );
};

export default PostPreviewsComponent;
