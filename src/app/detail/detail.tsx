'use client';
import { getDetail } from '@/server/api/query';
import { useQuery } from '@tanstack/react-query';

export default function Detail() {
  const { data, isFetching, isError } = useQuery({ queryKey: ['posts'], queryFn: getDetail });
  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix.
  // const { data: commentsData } = useQuery({
  //   queryKey: ['posts-comments'],
  //   queryFn: getComments,
  // })
  if (isFetching) return <div className='flex-auto'>loading...</div>;
  if (isError) return <div className='flex-auto'>error...</div>;
  return <div className='flex-auto'>这是服务端渲染吗{data?.data}</div>;
}
