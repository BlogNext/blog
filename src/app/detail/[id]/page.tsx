import { getDetail } from '@/server/api/query';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import Detail from '../detail';
export default async function DetailPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getDetail
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Detail />
    </HydrationBoundary>
  );
}
