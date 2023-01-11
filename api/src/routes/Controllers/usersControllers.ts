import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { User } from "../../data/models/Users";
const UserModel = getModelForClass(User);

//find users// devuelve lista de todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: "Error getting users", error });
  }
};

//find by ID // devuelve el usuario buscado por ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error finding the user ${req.params.id}`, error });
  }
};

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

//delete user // eliminamos un usuario existente
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error deleting the user ${req.params.id}`, error });
  }
};

export const putUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error updating the user ${req.params.id}`, error });
  }
};
