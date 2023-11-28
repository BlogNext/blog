import Avatar from '@public/images/avatar.jpg';
import Image from 'next/image';
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
      <div className='menu flex-auto'>menu</div>
      <div className='flex-none'>1222</div>
    </div>
  );
}
