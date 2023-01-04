import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


type MarkdownProps = { children: string };
const Markdown = ({ children }: MarkdownProps) => {
  return <ReactMarkdown>{children}</ReactMarkdown>;
};

export default Markdown;
