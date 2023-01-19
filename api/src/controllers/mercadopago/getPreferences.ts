import axios from 'axios';
import { Request, Response } from 'express';
import mercadopago from 'mercadopago';

import { ACCESS_TOKEN } from '../../../config';

mercadopago.configure({ access_token: ACCESS_TOKEN! });
interface item {
  id: string;
  category_id: string;
  currency_id: string;
  description: string;
  title: string;
  quantity: number;
  unit_price: number;
}

interface purchase {
  id: string;
  client_id: string;
  items: item[];
  date_created: string;
  external_reference: string;
}

export const getPreferences = async (req: Request, res: Response) => {
  const response = await axios.get(`https://api.mercadopago.com/checkout/preferences/`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });

  const preferences = response.data.elements.map((preference: purchase) => {
    return {
      id: preference.id,
      client_id: preference.client_id,
      items: preference.items,
      date_created: preference.date_created,
      external_reference: preference.external_reference,
    };
  });

  res.json(preferences);
};
