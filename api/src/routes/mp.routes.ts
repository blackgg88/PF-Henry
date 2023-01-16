import { Router } from 'express';
import axios from 'axios';
import mercadopago from 'mercadopago';

import { ACCESS_TOKEN } from '../../config';

const test = Router();

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

interface items {
  id: string;
  category_id: string;
  title: string;
  unit_price: number;
  quantity: number;
  description: string;
  currency_id: string;
}

test.post('/', async (req, res) => {
  let preference = {
    binary_mode: true,

    items: [
      {
        id: req.body.id,
        category_id: req.body.category_id,
        title: req.body.name,
        unit_price: req.body.price as number,
        quantity: req.body.quantity as number,
        description: req.body.description,
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
      res.json(response.body);
    })
    .catch(function (error) {
      console.log(error);
    });
});

test.get('/', async (req, res) => {
  const { email } = req.query;

  const response = await axios.get(
    `https://api.mercadopago.com/checkout/preferences/search?external_reference=${email}`,
    {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    },
  );

  const purchasesPromises = response.data.elements.map((purchase: { id: string }) =>
    axios(`https://api.mercadopago.com/checkout/preferences/${purchase.id}`, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    }),
  );

  //Promise all

  res.json('');
});

export default test;
