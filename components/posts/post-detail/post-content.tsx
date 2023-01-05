import React from 'react';
import { PostDataType } from '../../../helpers/posts-util';
import Markdown from './markdown';

import classes from './post-content.module.css';
import PostHeader from './post-header';

type PostContentProps = { post: PostDataType };

const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} imagePath={imagePath} />
      <Markdown slug={post.slug}>{post.content}</Markdown>
    </article>
  );
};

export default PostContent;
