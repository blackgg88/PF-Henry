import axios from 'axios';
import { Request, Response } from 'express';
import { sendMailPayment } from '../../config/mailer';

import mercadopago from 'mercadopago';
import { ACCESS_TOKEN } from '../../../config';

mercadopago.configure({ access_token: ACCESS_TOKEN! });

export interface Payment {
  id: string;
  name: string;
  email: string;
  products: Products[];
  address: Address;
  total_amount: number;
  date: string;
  status: string;
}

export interface Address {
  street_name: string;
  street_number: string;
  zip_code: string;
}

export interface Products {
  category_id: string;
  description: string;
  id: string;
  picture_url: string;
  quantity: string;
  title: string;
  unit_price: string;
}

export const feedback = async (req: Request, res: Response) => {
  console.log(req.query); // data.id type

  console.log(req.body); //id, client_id

  res.status(200).json();

  const response = await axios.get(
    `https://api.mercadopago.com/v1/payments/${req.query.data_id}`,
    {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    },
  );
  const data = response.data;

  const payment = {
    id: data.id,
    name: data.additional_info.payer.first_name + data.additional_info.payer.last_name,
    email: data.external_reference,
    products: data.additional_info.items,
    address: data.additional_info.payer.address,
    total_amount: data.transaction_details.total_paid_amount,
    date: data.date_approved,
    status: data.status,
  };

  sendMailPayment(payment);
};
