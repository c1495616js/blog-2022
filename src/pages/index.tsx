import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ArticleJsonLd } from 'next-seo';
import React from 'react';

import PostList, { PostForPostList } from '@/components/PostList';
import { allPostsNewToOld } from '@/lib/contentLayerAdapter';
import { siteConfigs } from '@/configs/siteConfigs';
import generateRSS from '@/lib/generateRSS';

import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
import { Home, Layout } from '@/components/Home';

type PostForIndexPage = PostForPostList;

type Props = {
  posts: PostForIndexPage[];
  commandPalettePosts: PostForCommandPalette[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const commandPalettePosts = getCommandPalettePosts();

  const posts = allPostsNewToOld.map((post) => ({
    slug: post.slug,
    publishedAt: post.publishedAt,
    title: post.title,
    description: post.description,
    path: post.path,
  })) as PostForIndexPage[];

  generateRSS();

  return { props: { posts, commandPalettePosts } };
};

const HomePage: NextPage<Props> = ({ posts, commandPalettePosts }) => {
  useCommandPalettePostActions(commandPalettePosts);
  const [isNavbar, setIsNavbar] = React.useState('/');
  return (
    <>
      <ArticleJsonLd
        type="Blog"
        url={siteConfigs.fqdn}
        title={siteConfigs.title}
        images={[siteConfigs.bannerUrl]}
        datePublished={siteConfigs.datePublished}
        authorName={siteConfigs.author}
        description={siteConfigs.description}
      />
      <Home />
    </>
  );
};

export default HomePage;
