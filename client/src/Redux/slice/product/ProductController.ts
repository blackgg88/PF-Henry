import { API_URL } from '../../../../config';

import { FilterState } from './product.slice';

export function productFetch() {
  return fetch(`${API_URL}/products`).then((res) => res.json());
}

export function productIdFetch(id: string) {
  return fetch(`${API_URL}/products/${id}`).then((res) => res.json());
}

export function productsFilter(filters: FilterState) {
  const { name, categories, pricemin, pricemax, rating, order } = filters;
  try {
    return fetch(`${API_URL}/products/?filter[name]=${name}&filter[categories]=${categories}&filter[pricemin]=${pricemin}&filter[pricemax]=${pricemax}&filter[rating]=${rating}&order${order}`)
      .then(res => {
        if (!res.ok) {
          // Aqui deberemos renderizar algo al momento de no encuentre respuestas!!! a los filtrados
          console.log({ error: res.statusText, message: "Los prod...." });
          alert("Product not found");
        }
        return res.json();
      });
  } catch (error) {
    return console.error({ message: error });
  }
}
