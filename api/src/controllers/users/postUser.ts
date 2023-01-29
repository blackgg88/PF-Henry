import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../models/Users';
const UserModel = getModelForClass(User);

export const postUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const user = await UserModel.findOne({ email: body.email });
    if (!user) {
      const newUser = {
        email: body.email,
        name: body.name,
        email_verified: body.email_verified,
        picture: body.picture,
        username: body.nickname,
        firstName: body.given_name,
        lastName: body.family_name,
        isActive: true,
      };

      const createdUser = new UserModel(newUser);
      await createdUser.save();

      res.status(201).json(newUser);
    } else if (user.isActive === false) {
      await UserModel.findByIdAndUpdate(user._id, { isActive: true }, { new: true });
      res.status(200).json({ message: 'User updated', data: user });
    } else {
      res.status(200).json({ message: 'User already exists' });
    }
  } catch (error) {
    res.status(400).json({ message: `Error creating a user ${req.body.firstName}`, error });
  }
};

//  --------------------- OLD ONE -> LA VIEJA :)

// post user // crea un nuevo usuario
// export const postUser = async (req: Request, res: Response) => {
//   try {
//     const user = new UserModel(req.body);
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ message: `Error creating a user ${req.body.firstName}`, error });
//   }
// };
