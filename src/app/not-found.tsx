'use client';

import { useRouter } from 'next/navigation';
const NotFound = () => {
  const route = useRouter();
  return (
    <div className='w-full flex-auto p-[10px]'>
      <div className='flex h-full flex-col items-center justify-center overflow-auto rounded-[6px] bg-[rgba(33,33,33,0.8)] p-[20px]'>
        <div className='flex flex-col items-center'>
          <div className='py-[5px]'>I hate programming</div>
          <div className='py-[5px]'>I hate programming</div>
          <div className='py-[5px]'>I hate programming</div>
          <div className='py-[10px]'>It works!</div>
          <div className='py-[5px]'>I love programming</div>
        </div>

        <div className='pt-[10px] text-lg'>Page Not Found</div>

        <button onClick={() => route.push('/')} className='home-btn mt-[60px]'>
          <span>Bark To Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
