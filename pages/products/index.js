import useSWR from "swr";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products/");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {product.name} {product.description} {product.price}
          {product.currency} {product.category}
        </li>
      ))}
    </ul>
  );
}
