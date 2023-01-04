import React from 'react';

import classes from './all-posts.module.css';
import PostsGrid, { PostType } from './posts-grid';

type AllPostsProps = { posts: PostType[] };

const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
