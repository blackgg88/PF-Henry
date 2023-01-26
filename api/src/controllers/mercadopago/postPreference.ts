import { Request, Response } from 'express';
import mercadopago from 'mercadopago';
import { CLIENT_URL, ACCESS_TOKEN } from '../../../config';
import { getModelForClass } from '@typegoose/typegoose';
import { Product } from '../../models/Product';
const ProductModel = getModelForClass(Product);

mercadopago.configure({ access_token: ACCESS_TOKEN! });

enum State {
  SUCCESS = 'approved',
  all = 'all',
}

enum Currency {
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
  _id: string;
  name: string;
}

interface Item {
  _id: string;
  categories: Category;
  name: string;
  stock: number;
  quantity: number;
  price: number;
  images: string[];
  brand: string;
}

interface ItemMP {
  id: string;
  category_id: string;
  currency_id: Currency;
  title: string;
  unit_price: number;
  picture_url: string;
}

interface Payer {
  address: { street_name: string; street_number: number; zip_code: string };
  email: string;
  identification: { number: string; type: string };
  name: string;
  surname: string;
}

export const postPreference = async (req: Request, res: Response) => {
  const payer: Payer = req.body.payer;
  const products: Item[] = req.body.products;

  // try {
  //   products.map(async (item) => {
  //     const newStock = item.stock - item.quantity;

  //     const productUpdated = await ProductModel.findByIdAndUpdate(
  //       item._id,
  //       { stock: newStock },
  //       { new: true },
  //     );
  //   });
  // } catch (error) {
  //   res.status(500).json('Error stock UwU');
  // }

  let preference = {
    items: products.map((item) => {
      return {
        id: item._id,
        category_id: item.categories._id,
        currency_id: Currency.USD,
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        picture_url: item.images[0],
      } as ItemMP;
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
      success: CLIENT_URL,
      failure: CLIENT_URL,
      pending: CLIENT_URL,
    },

    payment_methods: {
      excluded_payment_types: [
        {
          id: 'ticket',
        },
      ],
    },

    binary_mode: true,
    auto_return: State.SUCCESS,
    notification_url: 'https://pf-henry-production-5b31.up.railway.app/checkout/feedback',
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      res.status(201).json(response.body);
    })
    .catch(function (error) {
      res.status(500).json(error);
      console.log(error);
    });
};
