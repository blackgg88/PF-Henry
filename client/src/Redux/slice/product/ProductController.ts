export function productFetch() {
  const data = fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .then((res) => res);
  return data;
}

export function productIdFetch(id: string) {
  const data = fetch(`http://localhost:3001/products/${id}`).then((res) =>
    res.json()
  );
  return data;
}
