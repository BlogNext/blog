import '@/common/styles/prism-dracula.css';
import '@/common/styles/prism-plus.css';
import mdxComponents from '@/components/Mdx/mdxComponents';
import { Docs } from '@contentlayer';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Detail({ doc }: { doc: Docs }) {
  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <div className='mdx-detail flex w-full flex-col items-center justify-start p-[20px]'>
      <h2 className='w-full text-left text-[#aaa]'>{doc?.desc}</h2>

      <MDXContent components={mdxComponents} />
    </div>
  );
}
