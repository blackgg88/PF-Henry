import { Router } from 'express';

import { postPreference } from '../controllers/mercadopago/postPreference';
import { getPayment } from '../controllers/mercadopago/getPayment';
import { feedback } from '../controllers/mercadopago/feedback';
import { getForDate } from '../controllers/mercadopago/getForDate';

const mercadopago = Router();

mercadopago.get('/', getPayment);

mercadopago.get('/date', getForDate);

mercadopago.get('/:email', getPayment);

mercadopago.post('/', postPreference);

mercadopago.post('/feedback', feedback);


export default mercadopago;
