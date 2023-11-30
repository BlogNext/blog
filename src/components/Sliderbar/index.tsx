'use client';
import { useMemo, useState } from 'react';
import IconFont from '../IconFont';

const INFO_MENU = [
  {
    label: 'Posts Num',
    icon: 'icon-tongjifenxi',
    string: 'blog_total'
  },
  {
    label: 'Comments Num',
    icon: 'icon-shouye1',
    string: ''
  },
  {
    label: 'Operating Days',
    icon: 'icon-shijian',
    string: 'diff_time'
  },
  {
    label: 'Last activity',
    icon: 'icon-xiansuoguanli',
    string: 'last_create_at'
  }
];

const TOP_MENU = [
  {
    label: 'Popular artivles',
    sort_dimension: 'browse_total',
    string: 'browse_total',
    icon: 'icon-icon'
  },
  {
    label: 'Latest comments',
    sort_dimension: 'created_at',
    string: 'browse_total',
    icon: 'icon-shijian'
  },
  {
    label: 'Random articles',
    string: 'browse_total',
    sort_dimension: '',
    icon: 'icon-liwu'
  }
];

export default function Sliderbar() {
  const [tabIndex, setTabIndex] = useState(0);

  const onHandleTab = (index: number) => {
    if (index === tabIndex) return;
    setTabIndex(index);
  };

  const computeTransX = useMemo(() => tabIndex * 100 * 2 + 100 / 3 + 100 / 3 / 2, [tabIndex]);

  return (
    <div className='flex h-full w-[240px] flex-none flex-col justify-start overflow-hidden bg-[#1D1F20] pb-[25px]'>
      <div className='flex flex-col overflow-hidden'>
        <div className='relative flex h-[60px] w-full flex-none flex-row'>
          {TOP_MENU.map((item, index) => (
            <div
              onClick={() => onHandleTab(index)}
              key={item.icon}
              className='flex h-full flex-auto cursor-pointer items-center justify-center'
            >
              <IconFont name={item.icon} size={18} color='#fff' />
            </div>
          ))}
          <div
            style={{
              transform: `translateX(${computeTransX}%)`
            }}
            className='absolute bottom-0 h-[2px] w-1/6 bg-[#058cff] transition-transform'
          ></div>
        </div>
        <div className='flex flex-auto flex-col items-start justify-start overflow-auto px-[15px] py-[10px]'>
          <div className='text-[16px] text-[#aaa]'>{TOP_MENU[tabIndex].label}</div>
          <div className='flex flex-col items-start justify-start pt-[10px]'>
            <span>content</span>
            <span>content</span>
            <span>content</span>
          </div>
        </div>
      </div>
      <div className='mt-[20px] flex-none px-[15px]'>
        <div className='text-[16px] text-[#aaa]'>Blog Info</div>
        <div className='mt-[10px] flex flex-none flex-col bg-[#191919] px-[10px] shadow-[0_1px_3px_rgb(0_0_0_0.5)]'>
          {INFO_MENU.map((item) => (
            <div key={item.icon} className='flex flex-row items-center justify-between py-[15px]'>
              <div className='flex flex-none'>
                <IconFont name={item.icon} size={14} color='#fff' />
                <div className='pl-[5px] text-xs'>{item.label}</div>
              </div>
              <div className='flex flex-none justify-center rounded-[10px] bg-[#5dbde7] px-[7px] py-[3px] text-xs font-bold text-white'>
                11
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
