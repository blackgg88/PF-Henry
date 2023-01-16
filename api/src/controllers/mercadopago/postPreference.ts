import { Request, Response } from 'express';
import mercadopago from 'mercadopago';

import { ACCESS_TOKEN } from '../../../config';

mercadopago.configure({ access_token: ACCESS_TOKEN! });

enum state {
  SUCCESS = 'approved',
  all = 'all',
}

enum currency {
  ARS = 'ARS',
  BRL = 'BRL',
  CLP = 'CLP',
  MXN = 'MXN',
  COP = 'COP',
  PEN = 'PEN',
  UYU = 'UYU',
}

interface item {
  id: string;
  category_id: string;
  currency_id: string;
  description: string;
  name: string;
  quantity: number;
  price: number;
}

export const postPreference = async (req: Request, res: Response) => {
  const { id, category_id, name, price, quantity, description }: item = req.body;
  let preference = {
    binary_mode: true,

    items: [
      {
        id: id,
        category_id: category_id,
        title: name,
        unit_price: price,
        quantity: quantity,
        description: description,
        currency_id: currency.ARS,
      },
    ],

    payer: { email: 'newuser12354@gmail.com' },

    external_reference: 'newuser12354@gmail.com',

    back_urls: {
      success: 'http://localhost:5173',
      failure: 'http://localhost:5173',
      pending: 'http://localhost:5173',
    },

    auto_return: state.SUCCESS,
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      res.status(201).json(response.body);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};
