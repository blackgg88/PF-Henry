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
  USD = 'USD',
}

interface Category {
  _id: number;
  name: string;
}

interface item {
  _id: string;
  categories: Category;
  name: string;
  quantity: number;
  price: number;
  images: string[];
}

export const postPreference = async (req: Request, res: Response) => {
  const { payer, products } = req.body;
  let preference = {
    items: products.map((item: item) => {
      return {
        id: item._id,
        category_id: item.categories._id,
        currency_id: currency.USD,
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        picture_url: item.images[0],
      };
    }),

    payer: {
      email: payer.email,
      name: payer.name,
      surname: payer.surname,
      identification: payer.identification,
      address: payer.address,
    },

    external_reference: payer.email,

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
