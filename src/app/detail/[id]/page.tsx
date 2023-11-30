export default function Detail({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>;
}
