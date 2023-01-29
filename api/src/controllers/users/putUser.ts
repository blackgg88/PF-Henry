import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/Users';
const UserModel = getModelForClass(User);

export const putUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    if (req.body?.product) {
      const user = await UserModel.findOne({ _id: req.params.id });

      user!.favorites = [...user!.favorites, req.body.product];

      await UserModel.findByIdAndUpdate(req.params.id, user!, {
        new: true,
      });

      res.json(user);

      return;
    }

    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: `Error updating the user ${req.params.id}`, error });
  }
};
