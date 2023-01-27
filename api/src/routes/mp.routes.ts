import { Router } from 'express';

import { postPreference } from '../controllers/mercadopago/postPreference';
import { getPreferences } from '../controllers/mercadopago/getPreferences';
import { getPreference } from '../controllers/mercadopago/getPreference';

const mercadopago = Router();

mercadopago.get('/', getPreferences);

mercadopago.get('/:email', getPreference);

mercadopago.post('/', postPreference);

export default mercadopago;
