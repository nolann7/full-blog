import { NextPage } from 'next';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { PostType } from '../components/posts/posts-grid';

const DUMMY_POSTS: PostType[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started.png',
    excerpt:
      'NextJS is React framework for production. It makes building fullstack apps and sites a breeze and ship with server side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started.png',
    excerpt:
      'NextJS is React framework for production. It makes building fullstack apps and sites a breeze and ship with server side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started.png',
    excerpt:
      'NextJS is React framework for production. It makes building fullstack apps and sites a breeze and ship with server side rendering',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started.png',
    excerpt:
      'NextJS is React framework for production. It makes building fullstack apps and sites a breeze and ship with server side rendering',
    date: '2022-02-10',
  },

];

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
