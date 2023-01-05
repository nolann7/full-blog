import { GetStaticProps, NextPage } from 'next';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts, PostDataType } from '../../helpers/posts-util';

type AllPostsPageProps = { allPosts: PostDataType[] };

const AllPostsPage: NextPage<AllPostsPageProps> = ({
  allPosts,
}: AllPostsPageProps) => {
  return <AllPosts posts={allPosts} />;
};

export const getStaticProps: GetStaticProps = ctx => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
    revalidate: 600,
  };
};

export default AllPostsPage;
