import { API_URL } from '../config';
import { ProductCart } from '../src/Redux/slice/shoppingCart/shoppingCart.slice';

export interface Values {
  email: '';
  name: '';
  surname: '';
  date_created: '';
  street_name: '';
  street_number: '';
  zip_code: '';
  DNI: '';
}
export interface Payer {
  address: { street_name: string; street_number: number; zip_code: string };
  email: string;
  identification: { number: string; type: string };
  name: string;
  surname: string;
}

export interface Preference {
  payer: Payer;
  products: ProductCart[];
}

export const fetchMP = async (preference: Preference) => {
  const response = await fetch(`${API_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preference),
  });

  const data = await response.json();

  return data;
};
