import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '食谱',
      href: getPermalink('/blog'),
    },
    {
      text: '关于我们',
      href: getPermalink('/about'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
    // TODO: github repo
  ],
  footNote: `Made by xxx · All rights reserved.`,
};
