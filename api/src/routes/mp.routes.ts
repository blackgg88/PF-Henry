import { Router } from 'express';

import { postPreference } from '../controllers/mercadopago/postPreference';
import { getPayment } from '../controllers/mercadopago/getPayment';

const mercadopago = Router();

mercadopago.get('/', getPayment);

mercadopago.get('/:email', getPayment);

mercadopago.post('/', postPreference);

export default mercadopago;
