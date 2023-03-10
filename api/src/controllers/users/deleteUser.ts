import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { User } from "../../models/Users";
const UserModel = getModelForClass(User);

//delete user // eliminamos un usuario existente
//soft Delete User
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    res.json({ message: "User deleted" });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error deleting the user ${req.params.id}`, error });
  }
};
