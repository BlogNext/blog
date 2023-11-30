import { TOP_MENUS } from '@/config';
import IconFont from '../IconFont';

export default function Header() {
  return (
    <header className='z-10 flex h-[50px] w-full flex-none bg-[#1D1F20] shadow-[0_-0px_1px_-px_rgba(0,0,0,0.25)]'>
      <div className='flex w-[220px] items-center justify-center text-sm font-bold'>{`LaughingZhu's Blog`}</div>
      <div className='flex-auto'></div>
      <div className='flex w-[240px] flex-row overflow-hidden'>
        {TOP_MENUS.map((item) => (
          <div
            key={item.icon}
            className='flex flex-auto cursor-pointer flex-col items-center justify-center px-[10px] hover:bg-[rgba(30,144,255,0.2)]'
          >
            <IconFont name={item.icon} color='white' size={20} />
            {/* <div className='text-[14px] text-[#8b8e99]'>{item.label}</div> */}
          </div>
        ))}
      </div>
    </header>
  );
}
