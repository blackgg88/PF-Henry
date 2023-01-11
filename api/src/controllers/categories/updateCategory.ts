import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { Category } from '../../models/Category'

const CategoryModel = getModelForClass(Category)

///UPDATE category // updateamos una categoria
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(category);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error updating the category ${req.params.id}`, error });
  }
};