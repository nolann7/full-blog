import React from 'react';
import Image from 'next/image';
import classes from './featured-posts.module.css';
import PostsGrid, { PostType } from '../posts/posts-grid';

type FeaturedPostsProps = { posts:PostType[] };

const FeaturedPosts = ({posts}: FeaturedPostsProps) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  );
};

export default FeaturedPosts;
