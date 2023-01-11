import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { User } from '../../models/Users'
const UserModel = getModelForClass(User)

//post user // crea un nuevo usuario
export const postUser = async (req: Request, res: Response) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error creating a user ${req.body.firstName}`, error });
  }
};