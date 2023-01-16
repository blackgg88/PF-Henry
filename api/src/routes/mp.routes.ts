import { Router } from 'express';

import { postPreference } from '../controllers/mercadopago/postPreference';
import { getPreferences } from '../controllers/mercadopago/getPreferences';

const mercadopago = Router();

mercadopago.post('/', postPreference);

mercadopago.get('/', getPreferences);

export default mercadopago;
