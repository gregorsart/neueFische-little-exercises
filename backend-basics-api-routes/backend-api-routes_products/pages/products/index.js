import useSWR from "swr";

export default function ProductsPage() {
  const { data, isLoading, error } = useSWR("/api/products");

  if (isLoading) return <div>Is Loading</div>;

  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      <ul>
        {data.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}
