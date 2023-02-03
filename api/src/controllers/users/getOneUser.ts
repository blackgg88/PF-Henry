import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/Users';
const UserModel = getModelForClass(User);

//find by ID // devuelve el usuario buscado por ID
export const getOneUser = async (req: Request, res: Response) => {
  console.log(11)
  try {
    const user = await UserModel.findOne({ _id: req.params.id })
      .populate({ path: 'favorites', select: '-__v' })
      .select('-__v');

    return res.json(user);
  } catch (error) {
    return res.status(400).json({ message: `Error finding the user ${req.params.id}`, error });
  }
};
