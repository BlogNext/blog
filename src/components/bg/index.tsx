'use client';

import Script from 'next/script';

export default function Bg() {
  return (
    <div className='bg w-screen h-screen absolute'>
      <canvas id='cache-canvas' className='nodes-canvas cache-canvas' />
      <canvas id='main-canvas' className='nodes-canvas main-canvas' />

      <Script src='../../bg_canvas.js' />
    </div>
  );
}
