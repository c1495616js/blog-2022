import { siteConfigs } from '@/configs/siteConfigs';
import { Feed } from 'feed';
import { writeFileSync } from 'fs';
import { allPostsNewToOld } from './contentLayerAdapter';
import { getPostOGImage } from './getPostOGImage';

export default function generateRSS() {
  const author = {
    name: siteConfigs.author,
    email: siteConfigs.email,
    link: siteConfigs.fqdn,
  };

  const feed = new Feed({
    title: siteConfigs.title,
    description: siteConfigs.description,
    id: siteConfigs.fqdn,
    link: siteConfigs.fqdn,
    image: siteConfigs.logoUrl,
    favicon: siteConfigs.logoUrl,
    copyright: `Copyright © ${new Date().getFullYear()} ${siteConfigs.credit}`,
    feedLinks: {
      rss2: `${siteConfigs.fqdn}/feed.xml`,
      json: `${siteConfigs.fqdn}/feed.json`,
      atom: `${siteConfigs.fqdn}/atom.xml`,
    },
    author: author,
  });

  allPostsNewToOld.forEach((post) => {
    feed.addItem({
      id: siteConfigs.fqdn + post.path,
      title: post.title,
      link: siteConfigs.fqdn + post.path,
      description: post.description,
      image: post.socialImage ? getPostOGImage(post.socialImage) : '',
      author: [author],
      contributor: [author],
      date: new Date(post.date),
      // content: post.body.html,
    });
  });

  writeFileSync('./public/feed.xml', feed.rss2());
  writeFileSync('./public/atom.xml', feed.atom1());
  writeFileSync('./public/feed.json', feed.json1());
}
