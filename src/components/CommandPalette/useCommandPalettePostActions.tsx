import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';

import type { PostForCommandPalette } from './getCommandPalettePosts';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();

  useRegisterActions(
    posts.map((post) => ({
      id: post.slug,
      name: post.title,
      perform: () => router.push(post.path),
      section: 'Search Posts',
      parent: 'search-posts',
    })),
    []
  );
};
