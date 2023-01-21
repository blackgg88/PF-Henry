import { API_URL } from '../../../../config';

export function productFetch() {
  const data = fetch(`${API_URL}/products`)
    .then((res) => res.json())
    .then((res) => res);
  return data;
}

export function productIdFetch(id: string) {
  const data = fetch(`${API_URL}/products/${id}`).then((res) => res.json());
  return data;
}
