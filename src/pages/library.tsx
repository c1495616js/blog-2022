import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ArticleJsonLd } from 'next-seo';

import PostList, { PostForPostList } from '@/components/PostList';
import { allCategoriesPostsNewToOld } from '@/lib/contentLayerAdapter';
import { siteConfigs } from '@/configs/siteConfigs';
import generateRSS from '@/lib/generateRSS';

import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
import Link from 'next/link';
import SectionContainer from '@/components/SectionContainer';

type PostForIndexPage = PostForPostList;

type Props = {
  posts: PostForIndexPage[];
  commandPalettePosts: PostForCommandPalette[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const commandPalettePosts = getCommandPalettePosts();

  const posts = allCategoriesPostsNewToOld().map((post) => ({
    slug: post.slug,
    publishedAt: post.publishedAt,
    title: post.title,
    description: post.description,
    path: post.path,
  })) as PostForIndexPage[];

  generateRSS();

  return { props: { posts, commandPalettePosts } };
};

const Library: NextPage<Props> = ({ posts, commandPalettePosts }) => {
  useCommandPalettePostActions(commandPalettePosts);

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
      <SectionContainer>
        <div className="my-4 divide-y divide-gray-200 transition-colors dark:divide-gray-700">
          <div className="prose prose-lg my-8 dark:prose-dark">
            <h2>My Frontend Library</h2>
          </div>

          <section>
            Build Your Own Components
            <Link href="/byo/accordian">Accordian</Link>
          </section>

          <PostList posts={posts} />
        </div>
      </SectionContainer>
    </>
  );
};

export default Library;
