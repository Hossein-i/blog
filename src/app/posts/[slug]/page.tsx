import Markdown from "markdown-to-jsx";
import { getPostsMetadata } from "@/utils/getDocsMetadata";
import getDocContent from "@/utils/getDocContent";
import Image from "next/image";

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getDocContent("posts", slug);

  return (
    <article className="prose lg:prose-xl">
      <Image src={post.data.image} alt={post.data.image} />
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      <Markdown>{post.content}</Markdown>
    </article>
  );
};

export default PostPage;
