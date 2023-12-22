import Detail from '@/components/Detail';
import config from '@/config';
import { allDocs } from '@contentlayer';
export function getStaticPaths() {
  const paths = allDocs.map((post) => ({
    params: { id: post._raw.flattenedPath }
  }));

  return { paths, fallback: false };
}

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const doc = allDocs.find((post) => post._raw.flattenedPath === params.id);
  const url = config.host + doc?.url;
  return {
    metadataBase: new URL('https://blog.laughingzhu.cn'),
    title: doc?.title,
    description: doc?.desc,
    canonical: url,
    openGraph: {
      title: doc?.title,
      description: doc?.desc,
      url: url,
      site_name: "LaughingZhu's Blog",
      type: 'article',
      images: [
        {
          url: doc?.cover || ''
        }
      ]
    },
    robots: {
      index: true,
      follow: false,
      googleBot: {
        index: true,
        follow: false
      }
    }
  };
};

export default function DetailPage({ params }: { params: { id: string } }) {
  const doc = allDocs.find((post) => post._raw.flattenedPath === params.id);

  return (
    <>
      <div className='w-full flex-auto overflow-y-auto p-[10px]'>
        <div className='flex h-full flex-col items-center justify-start overflow-auto rounded-[6px] bg-[#212121] p-[20px]'>
          <h1 className='mb-1 w-[100%] text-center text-2xl text-[#aaa]'>{doc?.title}</h1>

          {doc && <Detail doc={doc} />}
        </div>
      </div>
    </>
  );
}
