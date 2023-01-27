import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Category } from '../../models/Category';

const CategoryModel = getModelForClass(Category);

//find by ID // devuelve la categoria buscado por ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findById(req.params.id).select('-__v');
    res.json(category);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error getting a category by ${req.params.id}`, error });
  }
};
