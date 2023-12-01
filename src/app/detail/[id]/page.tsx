'use server';

import { useGetDetail } from '@/server/api/query';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export default async function Detail({ params }: { params: { id: string } }) {
  const { data: detail, isPending, error } = useGetDetail(params.id);
  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return <div className='flex flex-auto flex-col'>My Post:</div>;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts', 10],
    queryFn: () => {}
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
