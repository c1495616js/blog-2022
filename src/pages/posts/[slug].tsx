import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { siteConfigs } from '@/configs/siteConfigs';
import { getPostOGImage } from '@/lib/getPostOGImage';
import mdxComponents from '@/lib/mdxComponents';
import PostLayout, {
  PostForPostLayout,
  RelatedPostForPostLayout,
} from '@/components/PostLayout';
import {
  allPosts,
  allPostsNewToOld,
  allCategoriesPostsNewToOld,
} from '@/lib/contentLayerAdapter';
import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
import SectionContainer from '@/components/SectionContainer';

type PostForPostPage = PostForPostLayout & {
  title: string;
  description: string;
  publishedAt: string;
  path: string;
  socialImage: string | null;
  body: {
    code: string;
    raw: string;
  };
};

type Props = {
  post: PostForPostPage;
  prevPost: RelatedPostForPostLayout;
  nextPost: RelatedPostForPostLayout;
  commandPalettePosts: PostForCommandPalette[];
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map((post) => post.path);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const commandPalettePosts = getCommandPalettePosts();

  let allPosts = allPostsNewToOld;

  let postIndex = allPostsNewToOld.findIndex(
    (post) => post.slug === params?.slug
  );
  if (postIndex === -1) {
    postIndex = allCategoriesPostsNewToOld().findIndex(
      (post) => post.slug === params?.slug
    );
    if (postIndex === -1) {
      return {
        notFound: true,
      };
    }
    allPosts = allCategoriesPostsNewToOld();
  }
  const prevFull = allPosts[postIndex + 1] || null;
  const prevPost: RelatedPostForPostLayout = prevFull
    ? { title: prevFull.title, path: prevFull.path }
    : null;
  const nextFull = allPosts[postIndex - 1] || null;
  const nextPost: RelatedPostForPostLayout = nextFull
    ? { title: nextFull.title, path: nextFull.path }
    : null;
  const postFull = allPosts[postIndex];
  const post: PostForPostPage = {
    title: postFull.title,
    publishedAt: postFull.publishedAt,
    description: postFull.description,
    path: postFull.path,
    socialImage: postFull.socialImage || null,
    body: {
      code: postFull.body.code,
      raw: postFull.body.raw,
    },
  };

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
      prevPost,
      nextPost,
      commandPalettePosts,
    },
  };
};

const PostPage: NextPage<Props> = ({
  post,
  prevPost,
  nextPost,
  commandPalettePosts,
}) => {
  const {
    description,
    title,
    publishedAt,
    path,
    socialImage,
    body: { code },
  } = post;
  useCommandPalettePostActions(commandPalettePosts);

  const url = siteConfigs.fqdn + path;
  const ogImage = getPostOGImage(socialImage);

  const MDXContent = useMDXComponent(code);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title: title,
          description: description,
          url: url,
          images: [
            {
              url: ogImage,
            },
          ],
          type: 'article',
          article: {
            publishedTime: publishedAt,
            modifiedTime: publishedAt,
          },
        }}
      />

      <ArticleJsonLd
        url={url}
        title={title}
        images={[ogImage]}
        datePublished={publishedAt}
        dateModified={publishedAt}
        authorName={siteConfigs.author}
        description={description}
      />

      <SectionContainer>
        <PostLayout post={post} prevPost={prevPost} nextPost={nextPost}>
          <MDXContent components={mdxComponents} />
        </PostLayout>
      </SectionContainer>
    </>
  );
};

export default PostPage;
