import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PostType } from '../../dummy-data';
import { PostDataType } from '../../helpers/posts-util';

import classes from './post-item.module.css';

type PostItemProps = {
  post: PostDataType;
};

const PostItem = ({ post }: PostItemProps) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
