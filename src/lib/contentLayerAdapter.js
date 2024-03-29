import { allPosts, Post } from 'contentlayer/generated';
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import { compareDesc } from 'date-fns';

export { allPosts, defineDocumentType, defineNestedType, makeSource, Post };

export const allPostsNewToOld =
  allPosts
    ?.filter((p) => p.isPublished && !p.categories)
    ?.sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    }) || [];

export const allCategoriesPostsNewToOld = (category) =>
  allPosts
    ?.filter(
      (p) => p.isPublished && p.categories?.includes(category || 'library')
    )
    ?.sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    }) || [];
