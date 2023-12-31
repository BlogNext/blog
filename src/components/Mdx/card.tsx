import { Docs } from '@contentlayer';
import { format, parseISO } from 'date-fns/esm';
import Image from 'next/image';
import Link from 'next/link';
import IconFont from '../IconFont';
export default function MdxCard(post: Docs) {
  return (
    <Link
      key={post._id}
      href={post.url}
      className='mb-[20px] flex w-full flex-none flex-row justify-start overflow-hidden rounded-[6px] bg-[#212121] p-[30px] transition-all hover:shadow-2xl'
    >
      {post?.cover && (
        <div className='h-[120px] w-[180px] flex-none overflow-hidden rounded-xl'>
          <Image
            width={180}
            height={120}
            className='h-[120px] w-[180px] object-contain transition-all hover:scale-125'
            src={post.cover}
            alt={post.title}
          />
        </div>
      )}
      <div className='ml-[20px] flex h-full flex-auto flex-col justify-start overflow-hidden '>
        <div className='flex w-full flex-auto flex-col'>
          <h2 className='textOVerFlow mb-1 w-[100%] text-xl text-[#aaa]'>{post.title}</h2>
          <div className='threeRowOverflow w-[100%] text-sm text-[#777]'>{post.desc}</div>
        </div>
        <div className='flex w-full flex-row justify-between text-[14px] text-[#777]'>
          <div className='flex items-center'>
            <IconFont name='icon-user' size={16} />
            <span className='ml-[10px]'>{post.auth}</span>
          </div>
          <div className='flex items-center'>
            <IconFont name='icon-time1' size={16} />
            <span className='ml-[10px]'>{format(parseISO(post.date), 'LLLL d, yyyy')}</span>
          </div>
          <div className='flex items-center'>
            <IconFont name='icon-message-comments' color='#777' size={16} />
            <span className='ml-[10px]'>No comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
