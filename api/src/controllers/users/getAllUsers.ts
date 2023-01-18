import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/Users';
const UserModel = getModelForClass(User);

//find users// devuelve lista de todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find().select('-__v');
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: 'Error getting users', error });
  }
};
