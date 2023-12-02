import { useQuery } from '@tanstack/react-query';
import request from '../request';

export const useGetDetail = (id: string) => {
  return useQuery({
    queryKey: ['repoData'],
    queryFn: getDetail
  });
};

export const getDetail = (): Promise<any> => {
  return request('/cloud/cloud-predict', 'GET');
};
