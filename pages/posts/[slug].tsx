import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import PostContent from '../../components/posts/post-detail/post-content';
import {
  getFileNames,
  getPostData,
  PostDataType,
} from '../../helpers/posts-util';

type PostDetailPageProps = { detailedPost: PostDataType };

const PostDetailPage: NextPage<PostDetailPageProps> = ({
  detailedPost,
}: PostDetailPageProps) => {
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

export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx?.params?.slug;
  if (!slug) return { props: { detailedPost: null } };
  const detailedPost = getPostData(slug.toString());
  return {
    props: { detailedPost },
    revalidate: 600,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getFileNames().map(fileName => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
