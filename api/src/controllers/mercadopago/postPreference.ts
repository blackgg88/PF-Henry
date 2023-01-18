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
  description: string;
  name: string;
  quantity: number;
  price: number;
}

export const postPreference = async (req: Request, res: Response) => {
  const itemsBody: item[] = req.body;
console.log(itemsBody)
  let preference = {
    items: itemsBody.map((item) => {
      return {
        id: item.id,
        category_id: item.category_id,
        currency_id: currency.ARS,
        description: item.description,
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
      };
    }),

    payer: { email: 'arrascaetaefdev@gmail.com' },
    // payer: { email: 'newuser12354@gmail.com' },

    external_reference: 'arrascaetaefdev@gmail.com',
    // external_reference: 'newuser12354@gmail.com',

    back_urls: {
      success: 'http://localhost:5173',
      failure: 'http://localhost:5173',
      pending: 'http://localhost:5173',
    },

    payment_methods: {
      excluded_payment_types: [
        {
          id: 'ticket',
        },
      ],
    },

    binary_mode: true,
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
