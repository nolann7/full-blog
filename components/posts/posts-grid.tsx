import React from 'react';
import PostItem from './post-item';

import classes from './posts-grid.module.css';

export type PostType = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
};
type PostsGridProps = { posts: PostType[] };

const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul className={classes.grid}>
      {posts.map(post => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostsGrid;
