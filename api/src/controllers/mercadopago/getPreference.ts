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
}

export const getPreference = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;

    const response = await axios.get(
      `https://api.mercadopago.com/checkout/preferences/search?external_reference=${email}`,
      {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      },
    );

    const urls = response.data.elements.map(
      (purchase: { id: string }) =>
        `https://api.mercadopago.com/checkout/preferences/${purchase.id}`,
    );

    const purchases = await Promise.all(
      urls.map((purchase: string) =>
        axios.get(purchase, {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }),
      ),
    );

    const data = purchases.map((purchaseCurrent) => {
      const item = purchaseCurrent.data;

      const purchase: purchase = {
        id: item.id,
        client_id: item.client_id,
        items: item.items,
        date_created: item.date_created,
      };

      return purchase;
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
