import { useQuery } from '@tanstack/react-query';

export const useGetDetail = (id: string) => {
  return useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      new Promise((resolve) => {
        resolve({ data: [1, 2, 3] });
      })
  });
};
