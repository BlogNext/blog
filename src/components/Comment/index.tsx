'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

import { giscusConfigs } from '@/config/giscusConfig';

const Comment = () => {
  const { theme } = useTheme();

  return (
    <div id='comment' className='w-full'>
      <Giscus
        repo={giscusConfigs.repo}
        repoId={giscusConfigs.repoId}
        category={giscusConfigs.category}
        categoryId={giscusConfigs.categoryId}
        mapping='pathname'
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='top'
        theme={'transparent_dark'}
        loading='lazy'
      />
    </div>
  );
};

export default Comment;
