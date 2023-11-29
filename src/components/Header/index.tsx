import { TOP_MENUS } from '@/config';
import IconFont from '../IconFont';

export default function Header() {
  return (
    <header className='w-full h-[50px] flex-none bg-[#1D1F20] shadow-[0_1px_1px_1px_rgba(0,0,0,0.25)] z-10 flex'>
      <div className='w-[220px] flex justify-center items-center text-sm font-bold'>{`LaughingZhu's Blog`}</div>
      <div className='flex-auto'>middle</div>
      <div className='w-[240px] flex flex-row overflow-hidden'>
        {TOP_MENUS.map((item) => (
          <div
            key={item.icon}
            className='flex px-[10px] flex-auto flex-col justify-center items-center cursor-pointer hover:bg-[rgba(30,144,255,0.2)]'
          >
            <IconFont name={item.icon} color='white' size={20} />
            {/* <div className='text-[14px] text-[#8b8e99]'>{item.label}</div> */}
          </div>
        ))}
      </div>
    </header>
  );
}
