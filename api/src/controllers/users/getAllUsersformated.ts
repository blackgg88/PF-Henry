import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/Users';
const UserModel = getModelForClass(User);


export const getAllUsersformated = async (req: Request, res: Response) => {

  try {
    const users = await UserModel.find().select('-__v');

    const formatedUsers = users.map( e => ({
            username: e.username,
            picture: e.picture,
            _id: e._id,
            email: e.email
        })
    ).filter( e => {
        if (e.username && e.picture && e._id) {
            return e
        }
    })
    res.json(formatedUsers);
  } catch (error) {
    res.status(400).json({ message: 'Error getting users', error });
  }
};
