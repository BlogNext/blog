import { MEUN_TYPE } from '@/type';
import { Docs, allDocs } from '@contentlayer';
import { compareDesc } from 'date-fns/esm';
import { useMemo } from 'react';

export const useGetDocs = () => {
  const docMap = new Map<string, Docs[]>();
  const docs = useMemo(() => {
    return (
      allDocs?.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
      }) || []
    );
  }, []);

  const category: MEUN_TYPE[] = [];

  docs.forEach((item) => {
    docMap.set(item.category, [...(docMap.get(item.category) || []), item]);

    if (!category.find((ca) => ca.label === item.category)) {
      category.push({
        label: item.category,
        icon: item.icon
      });
    }
  });

  return {
    docs,
    category,
    docMap
  };
};
