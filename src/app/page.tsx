'use client';
import MdxCard from '@/components/Mdx/card';
import { useGetDocs } from '@/hooks/use-get-docs';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function Home() {
  const category = useSearchParams().get('category') || '';
  const { docMap, docs: allDocs } = useGetDocs();
  const docs = useMemo(() => {
    if (docMap.has(category)) {
      return docMap.get(category);
    } else {
      return allDocs;
    }
  }, [allDocs, category, docMap]);

  return (
    <>
      {/* <ArticleJsonLd
        type='Blog'
        url={config.host}
        title={"LaughingZhu's Blog"}
        images={[
          'https://images.unsplash.com/photo-1495106245177-55dc6f43e83f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ]}
        datePublished={'2023-12-12'}
        authorName={'LaughingZhu'}
        description={"LaughingZhu's Blog"}
      /> */}
      <div className='flex w-full flex-none flex-col justify-start border-y-rose-700 align-top'>
        <div className='relative flex w-full flex-col items-center justify-center bg-[#1D1F20] p-[20px] text-[30px] leading-normal text-[#aaa]'>
          <h1
            className='slogan relative'
            data-spotlight="LaughingZhu's Blog"
          >{`LaughingZhu's Blog`}</h1>
          <div className='mt-[18px] text-[18px] tracking-[3px]'>
            桌上的文字太拥挤 想出去走走去散心
          </div>
        </div>
      </div>
      <div className='flex w-full flex-auto flex-col items-center justify-start overflow-y-auto p-[20px] '>
        {docs?.map((post, idx) => <MdxCard key={idx} {...post} />)}
      </div>
      <div className='w-full flex-none py-[10px] text-center'>
        <span>Copyright © 2020-2021 LaughingZhu 版权所有 </span>
        <a href='https://beian.miit.gov.cn/' target='_blank'>
          京ICP备2020039821号-1
        </a>
      </div>
    </>
  );
}
