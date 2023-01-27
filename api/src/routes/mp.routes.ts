import { Router } from 'express';

import { postPreference } from '../controllers/mercadopago/postPreference';
import { getPayment } from '../controllers/mercadopago/getPayment';
import { feedback } from '../controllers/mercadopago/feedback';

const mercadopago = Router();

mercadopago.get('/', getPreferences);

mercadopago.get('/:email', getPreference);

mercadopago.post('/', postPreference);

mercadopago.post('/feedback', feedback);

export default mercadopago;
