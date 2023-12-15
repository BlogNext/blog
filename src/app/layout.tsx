import '@/common/styles/global.css';
import Aside from '@/components/Aside';
import Header from '@/components/Header';
import Sliderbar from '@/components/Sliderbar';
import config from '@/config';
import generateRSS from '@/lib/generateRSS';
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import React from 'react';

const NoSSR = dynamic(() => import('../components/bg'), { ssr: false });
const inter = Inter({ subsets: ['latin'] });
export const generateMetadata = async () => {
  generateRSS();
  return {
    title: "LaughingZhu's Blog",
    description: "LaughingZhu's Blog",
    canonical: config.host,
    metadataBase: new URL('https://blog.laughingzhu.cn'),
    openGraph: {
      title: "LaughingZhu's Blog",
      description: "LaughingZhu's Blog",
      url: config.host,
      site_name: "LaughingZhu's Blog",
      type: 'website',
      images: [
        {
          url: '/favicon.ico'
        }
      ]
    },
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico'
      },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        href: '/feed.xml'
      },
      {
        rel: 'alternate',
        type: 'application/atom+xml',
        href: '/atom.xml'
      }
    ]
  };
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} relative flex h-screen flex-col items-center justify-start md:w-full lg:px-24 xl:px-32 2xl:px-80`}
      >
        <Script src='//at.alicdn.com/t/c/font_2023298_sq9wgxz8l8g.js' />
        <NoSSR />
        <Header />
        <div className='z-10 mt-[1px] flex w-full flex-auto flex-row overflow-hidden'>
          <Aside />
          <main className='flex flex-auto flex-col items-center justify-between overflow-auto'>
            {children}
          </main>
          <Sliderbar />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
