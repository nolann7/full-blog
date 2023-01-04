import React from 'react';
import { PostType } from '../../dummy-data';
import PostItem from './post-item';

import classes from './posts-grid.module.css';


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
