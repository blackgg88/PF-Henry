import axios from 'axios';
import { Request, Response } from 'express';

import mercadopago from 'mercadopago';
import { ACCESS_TOKEN } from '../../../config';

mercadopago.configure({ access_token: ACCESS_TOKEN! });

export const feedback = async (req: Request, res: Response) => {
  console.log('funciona uwu');
  console.log(req.query);
  console.log(req.body);

  res.status(200).json({ message: 'hola' });
};
