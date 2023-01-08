import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts, PostDataType } from '../../helpers/posts-util';

type AllPostsPageProps = { allPosts: PostDataType[] };

const AllPostsPage: NextPage<AllPostsPageProps> = ({
  allPosts,
}: AllPostsPageProps) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming related tutorials and posts" />
      </Head>
      <AllPosts posts={allPosts} />;
    </>
  );
};

export const getStaticProps: GetStaticProps = ctx => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
    revalidate: 600,
  };
};

export default AllPostsPage;
