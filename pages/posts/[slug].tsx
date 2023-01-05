import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import PostContent from '../../components/posts/post-detail/post-content';
import {
  getAllPosts,
  getFilesData,
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
  };
};
export const getStaticPaths: GetStaticPaths = async ctx => {
  const slugs = getFilesData().map(fileName => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
