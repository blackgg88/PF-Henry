import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/Users';
const UserModel = getModelForClass(User);

//find by ID // devuelve el usuario buscado por ID
export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ email: req.params.email })
      .populate({ path: 'favorites', select: '-__v' })
      .select('-__v');

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: `Error finding the user ${req.params.email}`, error });
  }
};
