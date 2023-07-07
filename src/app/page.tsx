import PostPreviewsComponent from "@/components/post-previews";
import HeroHeaderContainer from "@/containers/hero-header";
import { getPostsMetadata } from "@/utils/getDocsMetadata";

const HomePage = () => {
  const PostMetadata = getPostsMetadata();

  return (
    <>
      <HeroHeaderContainer />
      {PostMetadata.map((post) => (
        <PostPreviewsComponent key={post.slug} {...post} />
      ))}
    </>
  );
};

export default HomePage;
