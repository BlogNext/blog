'use client';
import Aside from '@/components/Aside';
import Header from '@/components/Header';
import Sliderbar from '@/components/Sliderbar';
import { Analytics } from '@vercel/analytics/react';

export default function FrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='z-10 mt-[1px] flex w-full flex-auto flex-row overflow-hidden'>
        <Aside />
        {children}
        <Sliderbar />
        <Analytics />
      </div>
    </>
  );
}
