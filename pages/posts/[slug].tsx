import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PostContent from '../../components/posts/post-detail/post-content';
import { DUMMY_POSTS } from '../../dummy-data';

type PostDetailPageProps = {};

const PostDetailPage: NextPage<PostDetailPageProps> = () => {
  const router = useRouter();
  const query = router.asPath.split('/')[2];
  console.log(query);
  const detailedPost = DUMMY_POSTS.find(post => post.slug === query);
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

export default PostDetailPage;
