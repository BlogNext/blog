async function _initDetail(id: string) {
  'use server';
  const res = await fetch('https://sudoku.lyyyw.cn/api/v1/my/about');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Detail({ params }: { params: { id: string } }) {
  const data = await _initDetail(params.id);
  console.log(data);
  return <div className='flex flex-auto flex-col'>My Post: {data.data.title}</div>;
}
