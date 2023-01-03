import { NextPage } from 'next';
import Head from 'next/head';

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
    </>
  );
};

export default HomePage;
