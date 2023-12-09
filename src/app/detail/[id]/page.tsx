import { allDocs } from 'contentlayer/generated';
import Detail from './detail';
export async function getStaticPaths() {
  const paths = allDocs.map((post) => ({
    params: { id: post._raw.flattenedPath }
  }));
  return { paths, fallback: false };
}

export default async function DetailPage({ params }: { params: { id: string } }) {
  const doc = allDocs.find((post) => post._raw.flattenedPath === params.id);
  return (
    <div className='flex-auto p-[10px]'>
      <div className='flex h-full flex-col items-center justify-start overflow-auto rounded-[6px] bg-[#212121] p-[20px]'>
        <h1 className='mb-1 w-[100%] text-center text-2xl text-[#aaa]'>{doc?.title}</h1>

        {doc && <Detail doc={doc} />}
      </div>
    </div>
  );
}
