import MdxCard from '@/components/Mdx/card';
import { allDocs } from '@contentlayer';
import { compareDesc } from 'date-fns';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'LaughingZhu的技术文章记录',
  description: "LaughingZhu's Blog, 技术、生活、兴趣博客",
  keywords: 'LaughingZhu Blog LaughingZhu'
};

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
        {posts.map((post, idx) => (
          <MdxCard key={idx} {...post} />
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
