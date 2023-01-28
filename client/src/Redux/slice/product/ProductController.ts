import { API_URL } from '../../../../config';

// export function productFetch() {
//   const data = fetch(`${API_URL}/products`)
//     .then((res) => res.json())
//     .then((res) => res);
//   return data;
// }

// export function productIdFetch(id: string) {
//   const data = fetch(`${API_URL}/products/${id}`).then((res) => res.json());
//   return data;
// }

import { FilterState } from './product.slice';

export function productFetch() {
  return fetch(`${API_URL}/products`).then((res) => res.json());
}

export function productIdFetch(id: string) {
  return fetch(`${API_URL}/products/${id}`).then((res) => res.json());
}

export function productName(name: string) {
  return fetch(`${API_URL}/products?name=${name}`).then((res) => res.json());
}

export function productsFilter(filters: FilterState) {
  const { categories, pricemin, pricemax, rating, order } = filters;
  try {
    return fetch(
      `${API_URL}/products/?filter[categories]=${categories}&filter[pricemin]=${pricemin}&filter[pricemax]=${pricemax}&filter[rating]=${rating}&order${order}`,
    ).then((res) => {
      if (!res.ok) {
        // Aqui deberemos renderizar algo al momento de no encuentre respuestas!!! a los filtrados
        console.log({ error: res.statusText, message: 'Los prod....' });
        alert('No capo, fiuuuuuuuuuuummmba');
      }
      return res.json();
    });
  } catch (error) {
    console.error({ message: error });
  }
}
