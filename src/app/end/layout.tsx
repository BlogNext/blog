import Header from '@/components/Header';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='z-10 mt-[1px] flex w-full flex-auto flex-row overflow-hidden'>
        {/* <EndAside /> */}
        <div className='flex flex-auto flex-col bg-[#1D1F20] p-[20px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.25)]'>
          {children}
        </div>
      </div>
    </>
  );
}
