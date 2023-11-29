import { ASIDE_MENUS, BOTTOM_MENUS } from '@/config';
import Avatar from '@public/images/avatar.jpg';
import Image from 'next/image';
import IconFont from '../IconFont';

export default function Aside() {
  return (
    <div className='w-[220px] bg-[#1D1F20] h-full flex-none flex flex-col'>
      <div className='flex-none w-full flex justify-center items-center flex-col h-[219px] hover:bg-[url("@public/images/snow.gif")] hover:bg-contain'>
        <Image
          src={Avatar}
          alt='LaughingZhu'
          className='rounded-full w-[96px] h-[107px] shadow-[2px_2px_3px_transparent] hover:rotate-[360deg] hover:scale-[1.2] cursor-pointer transition-all hover:animate-toBottom'
        />
        <div className='mt-[10px] text-sm font-bold text-[#eaebed]'>LaughingZhu</div>
        <div className='px-[10px] mt-[5px] text-[#8b8e99] text-xs text-center'>
          Make or miss win or lose I put my name on it
        </div>
      </div>
      <div className='flex flex-auto flex-col w-full items-center justify-start overflow-auto'>
        {ASIDE_MENUS.map((item) => (
          <div
            key={item.icon}
            className='w-full flex flex-none flex-row justify-start items-center px-[25px] py-[12px] cursor-pointer hover:bg-[rgba(30,144,255,0.2)]'
          >
            <IconFont name={item.icon} />
            <div className='pl-[10px] text-[14px] text-[#8b8e99]'>{item.label}</div>
          </div>
        ))}
      </div>
      <div className='flex-none flex flex-row justify-between w-full overflow-hidden'>
        {BOTTOM_MENUS.map((item) => {
          return (
            // <Tooltip placement='top' title={item.desc} key={`aside_tools_item-${index}`}>
            <div
              key={item.icon}
              className='flex px-[10px] flex-auto flex-col justify-center items-center cursor-pointer'
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
