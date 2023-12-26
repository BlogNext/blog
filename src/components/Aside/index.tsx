'use client';
import { useGetDocs } from '@/hooks/use-get-docs';
import { BOTTOM_MENUS } from '@/type';
import Avatar from '@public/images/avatar.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import IconFont from '../IconFont';

export default function Aside() {
  const { category: allCategory } = useGetDocs();
  const category = useSearchParams().get('category');

  const checkSelected = useCallback((check: string) => check === category, [category]);
  return (
    <div className='flex h-full w-[220px] flex-none flex-col bg-[#1D1F20]'>
      <div className='flex h-[219px] w-full flex-none flex-col items-center justify-center hover:bg-[url("/images/snow.gif")] hover:bg-contain'>
        <Image
          src={Avatar}
          alt='LaughingZhu'
          priority={true}
          className='h-[107px] w-[96px] cursor-pointer rounded-full shadow-[2px_2px_3px_transparent] transition-all hover:rotate-[360deg] hover:scale-[1.2] hover:animate-toBottom'
        />
        <div className='mt-[10px] text-sm font-bold text-[#eaebed]'>LaughingZhu</div>
        <div className='mt-[5px] px-[10px] text-center text-xs text-[#8b8e99]'>
          Make or miss win or lose I put my name on it
        </div>
      </div>
      <div className='flex w-full flex-auto flex-col items-center justify-start overflow-auto'>
        {allCategory.map((item) => (
          <Link
            key={item.icon}
            href={`/?category=${item.label}`}
            className='flex w-full flex-none cursor-pointer flex-row items-center justify-start px-[25px] py-[12px] hover:bg-[rgba(30,144,255,0.2)]'
            style={{
              backgroundColor: checkSelected(item.label) ? 'rgba(30,144,255,0.2)' : 'transparent'
            }}
          >
            <IconFont name={item.icon} />
            <div className='pl-[10px] text-[14px] text-[#8b8e99]'>{item.label}</div>
          </Link>
        ))}
      </div>
      <div className='flex w-full flex-none flex-row justify-between overflow-hidden'>
        {BOTTOM_MENUS.map((item) => {
          return (
            // <Tooltip placement='top' title={item.desc} key={`aside_tools_item-${index}`}>
            <div
              key={item.icon}
              className='flex flex-auto cursor-pointer flex-col items-center justify-center px-[10px]'
            >
              <IconFont name={item.icon} size={18} />
              <div className='text-[14px] text-[#8b8e99]'>{item.label}</div>
            </div>
            // </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
