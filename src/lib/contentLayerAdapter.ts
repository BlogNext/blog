import { allDocs } from '.contentlayer/generated';
import { compareDesc } from 'date-fns/esm';

// 时间倒序
export const allDocsNewToOld =
  allDocs?.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  }) || [];
