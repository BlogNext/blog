import { Docs, allDocs } from '.contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { Metadata } from 'next';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'LaughingZhu的技术文章记录',
  description: "LaughingZhu's Blog, 技术、生活、兴趣博客",
  keywords: 'LaughingZhu Blog LaughingZhu'
};

// console.log(allDocs, '-----allDocs');
function PostCard(post: Docs) {
  const Content = getMDXComponent(post.body.code);
  return (
    <div className='mb-8'>
      <h2 className='mb-1 text-xl'>
        <Link href={post.url} className='text-blue-700 hover:text-blue-900 dark:text-blue-400'>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className='mb-2 block text-xs text-gray-600'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className='text-sm [&>*:last-child]:mb-0 [&>*]:mb-3'>
        <Content />
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allDocs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <main className='flex flex-auto flex-col items-center justify-between overflow-auto'>
      <div className='flex w-full flex-none flex-col justify-start border-y-rose-700 align-top'>
        <div className='relative flex w-full flex-col items-center justify-center bg-[#1D1F20] p-[20px] text-[30px] leading-normal text-[#aaa]'>
          <div
            className='slogan relative'
            data-spotlight="LaughingZhu's Blog"
          >{`LaughingZhu's Blog`}</div>
          <div className='mt-[18px] text-[18px] tracking-[3px]'>
            桌上的文字太拥挤 想出去走走去散心
          </div>
        </div>
      </div>
      <div className='flex w-full flex-auto flex-col items-center justify-start p-[20px]'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div
            key={index}
            className='mb-[20px] w-full rounded-[6px] bg-[#212121] p-[30px] transition-all'
          >
            content
          </div>
        ))}
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
      <div className='w-full flex-none text-center'>
        <span>Copyright © 2020-2021 LaughingZhu 版权所有 </span>
        <a href='https://beian.miit.gov.cn/' target='_blank'>
          京ICP备2020039821号-1
        </a>
      </div>
    </main>
  );
}
