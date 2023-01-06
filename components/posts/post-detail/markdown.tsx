import Image from 'next/image';
import React, { CSSProperties } from 'react';
import { Components } from 'react-markdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
type MarkdownProps = { children: string; slug: string };
const Markdown = ({ children, slug }: MarkdownProps) => {
  const customComponents: Components = {
    img: image => (
      <Image
        src={`/images/posts/${slug}/${image.src}`}
        alt={image.alt!.toString()}
        width={600}
        height={300}
      />
    ),
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    // p: (paragraph: any) => {
    //   const { node } = paragraph;
    //   if (node.children[0].type === 'image') {
    //     const image = node.children[0];
    //     return (
    //       <div>
    //         <Image
    //           src={`/images/posts/${slug}/${image.url}`}
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }
    //   return <p>{paragraph.children}</p>;
    // },
  };

  return (
    <ReactMarkdown components={customComponents}>{children}</ReactMarkdown>
  );
};

export default Markdown;
