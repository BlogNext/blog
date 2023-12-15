import { Feed } from 'feed';
import { writeFileSync } from 'fs';

import { siteConfigs } from '@/config/siteConfig';
import { allDocsNewToOld } from '@/lib/contentLayerAdapter';

export default function generateRSS() {
  const author = {
    name: siteConfigs.author,
    email: siteConfigs.email,
    link: siteConfigs.baseUrl
  };

  const feed = new Feed({
    title: siteConfigs.title,
    description: siteConfigs.description,
    id: siteConfigs.baseUrl,
    link: siteConfigs.baseUrl,
    image: siteConfigs.logoPath,
    favicon: siteConfigs.logoPath,
    copyright: `Copyright © 2020 - ${new Date().getFullYear()} ${siteConfigs.credit}`,
    feedLinks: {
      rss2: `${siteConfigs.baseUrl}/feed.xml`,
      json: `${siteConfigs.baseUrl}/feed.json`,
      atom: `${siteConfigs.baseUrl}/atom.xml`
    },
    author: author
  });

  allDocsNewToOld.forEach((post) => {
    feed.addItem({
      id: siteConfigs.baseUrl + post.url,
      title: post.title,
      link: siteConfigs.baseUrl + post.url,
      description: post.desc,
      image: post.cover,
      author: [author],
      contributor: [author],
      date: new Date(post.date)
      // content: post.body.html,
    });
  });

  writeFileSync('./public/feed.xml', feed.rss2());
  writeFileSync('./public/atom.xml', feed.atom1());
  writeFileSync('./public/feed.json', feed.json1());
}
