import Image from 'next/image';
import React from 'react';

import classes from './post-header.module.css'

type PostHeaderProps={ title:string;
imagePath:string };

const PostHeader = ({title,imagePath}:PostHeaderProps) => {
return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt={title} width={200} height={150}/>
    </header>
  );
};

export default PostHeader;