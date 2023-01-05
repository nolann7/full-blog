import Image from 'next/image';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

type MarkdownProps = { children: string; slug: string };
const Markdown = ({ children, slug }: MarkdownProps) => {
  const customComponents = {
    img: (image: any) => (
      <Image
        src={`/images/posts/${slug}/${image.src}`}
        alt={image.alt}
        width={600}
        height={300}
      />
    ),
  };

  return (
    <ReactMarkdown components={customComponents}>{children}</ReactMarkdown>
  );
};

export default Markdown;
