import React from 'react';
import { PostDataType } from '../../helpers/posts-util';

import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

type AllPostsProps = { posts: PostDataType[] };

const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
