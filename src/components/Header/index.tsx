export default function Header() {
  return (
    <header className='w-full h-[50px] bg-[#1D1F20] shadow-[0_1px_1px_1px_rgba(0,0,0,0.25)] z-10 flex'>
      <div className='w-[220px] flex justify-center items-center text-sm font-bold'>{`LaughingZhu's Blog`}</div>
      <div className='flex-auto'>middle</div>
      <div className='w-[240px]'>more</div>
    </header>
  );
}
