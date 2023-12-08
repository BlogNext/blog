import { Docs } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns/esm';
import Link from 'next/link';
import Image from '../Image';
export default function MdxCard(post: Docs) {
  console.log(post.cover, '-----post');
  return (
    <Link
      key={post._id}
      href={post.url}
      className='mb-[20px] flex w-full flex-row justify-start rounded-[6px] bg-[#212121] p-[30px] transition-all'
    >
      {post?.cover && <Image width={180} height={120} src={post.cover} alt={post.title} />}
      <div className='ml-[20px]'>
        <h2 className='mb-1 text-xl'>{post.title}</h2>
        <div>{post.desc}</div>
        <div className='flex flex-row justify-around'>
          <div>{post.auth}</div>
          <time dateTime={post.date} className='mb-2 block text-xs text-gray-600'>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <div>count</div>
        </div>
      </div>
    </Link>
  );
}
