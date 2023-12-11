import config from '@/config';
import { allDocs } from '@contentlayer';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Detail from './detail';
export function getStaticPaths() {
  const paths = allDocs.map((post) => ({
    params: { id: post._raw.flattenedPath }
  }));
  return { paths, fallback: false };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const doc = allDocs.find((post) => post._raw.flattenedPath === params.id);
  return {
    title: doc?.title,
    titleShort: "LaughingZhu's Blog",
    description: doc?.desc,
    author: doc?.auth,
    logoPath: '/favicon.ico',
    datePublished: doc?.date
  };
}
export default async function DetailPage({ params }: { params: { id: string } }) {
  const doc = allDocs.find((post) => post._raw.flattenedPath === params.id);
  const url = config.host + doc?.url;

  return (
    <>
      <NextSeo
        title={doc?.title}
        description={doc?.desc}
        canonical={config.host}
        openGraph={{
          title: doc?.title,
          description: doc?.desc,
          url,
          images: [
            {
              url: doc?.cover || ''
            }
          ],
          type: 'article',
          article: {
            publishedTime: doc?.date,
            modifiedTime: doc?.date
          }
        }}
      />
      <ArticleJsonLd
        type='Blog'
        url={url}
        title={doc?.title || ''}
        images={[doc?.cover || '']}
        datePublished={doc?.date || ''}
        authorName={doc?.auth || ''}
        description={doc?.desc || ''}
      />
      <div className='flex-auto p-[10px]'>
        <div className='flex h-full flex-col items-center justify-start overflow-auto rounded-[6px] bg-[#212121] p-[20px]'>
          <h1 className='mb-1 w-[100%] text-center text-2xl text-[#aaa]'>{doc?.title}</h1>

          {doc && <Detail doc={doc} />}
        </div>
      </div>
    </>
  );
}
