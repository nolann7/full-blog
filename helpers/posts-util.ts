import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type PostDataType = {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
  slug: string;
  content: string;
};
type PostMetaDataType = {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
};
const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes file extension in the end
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postData: PostDataType = {
    slug: postSlug,
    ...(data as PostMetaDataType),
    content,
  };
  return postData;
};

export const getFilesData = () => {
  return fs.readdirSync(postsDirectory);
}
export const getAllPosts = () => {
  const postFiles = getFilesData()

  const allPosts = postFiles.map(postFile => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allSortedPosts = getAllPosts();
  const featuredPosts = allSortedPosts.filter(post => post.isFeatured === true);
  return featuredPosts;
};
