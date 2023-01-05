import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import PostContent from '../../components/posts/post-detail/post-content';
import { getAllPosts, PostDataType } from '../../helpers/posts-util';

type PostDetailPageProps = { posts: PostDataType[] };

const PostDetailPage: NextPage<PostDetailPageProps> = ({
  posts,
}: PostDetailPageProps) => {
  const router = useRouter();
  const query = router.asPath.split('/')[2];
  console.log(query);
  const detailedPost = posts.find(post => post.slug === query);
  console.log(detailedPost);
  return (
    <>
      {detailedPost ? (
        <PostContent post={detailedPost} />
      ) : (
        <p>Post Not Found</p>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const allPosts = getAllPosts();
  return {
    props: { posts: allPosts },
  };
};

export default PostDetailPage;
