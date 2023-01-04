import { NextPage } from 'next';
import AllPosts from '../../components/posts/all-posts';
import { DUMMY_POSTS } from '../../dummy-data';

type AllPostsPageProps = {};

const AllPostsPage: NextPage<AllPostsPageProps> = () => {
  return <AllPosts posts={DUMMY_POSTS}/>;
};

export default AllPostsPage;