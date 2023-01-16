import { Router } from 'express';
import mercadopago from 'mercadopago';

import { ACCESS_TOKEN } from '../../config';

const test = Router();

mercadopago.configure({ access_token: ACCESS_TOKEN! });

enum state {
  SUCCESS = 'approved',
  all = 'all',
}

export default test.post('/', async (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.name,
        unit_price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
      },
    ],

    payer: { email: 'newuser12354@gmail.com' },

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
      res.json(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
