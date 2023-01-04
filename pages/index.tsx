import { NextPage } from 'next';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { DUMMY_POSTS } from '../dummy-data';



type HomePageProps = {};
const HomePage: NextPage<HomePageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Blog for Javascript, Typescript, ReactJs, NextJs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
