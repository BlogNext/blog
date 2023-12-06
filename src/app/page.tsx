import Aside from '@/components/Aside';
import Header from '@/components/Header';
import Sliderbar from '@/components/Sliderbar';
import { Analytics } from '@vercel/analytics/react';
import FrontPage from './front/page';
const Index = () => {
  return (
    <>
      <Header />
      <div className='z-10 mt-[1px] flex w-full flex-auto flex-row overflow-hidden'>
        <Aside />
        <FrontPage />
        <Sliderbar />
        <Analytics />
      </div>
    </>
  );
};

export default Index;
