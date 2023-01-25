import { Router } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Role } from '../models/Role';

import category from './categories.routes';
import products from './product.routes';
import user from './user.routes';
import post from './foro/post.routes';

import mercadopago from './mp.routes';

const RoleModel = getModelForClass(Role);
const router = Router();

router.use('/products', products);
router.use('/users', user);
router.use('/categories', category);
router.use('/checkout', mercadopago);
router.use('/post', post);

////////////////////////////////////////////////////////////////////////////
router.get('/roles', async (req, res) => {
  try {
    const roles = await RoleModel.find();
    res.json(roles);
  } catch (error) {
    res.json(error);
  }
});

router.post('/roles', async (req, res) => {
  try {
    const role = new RoleModel(req.body);
    await role.save();
    res.json(role);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
