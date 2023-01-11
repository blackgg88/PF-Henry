import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { Category } from '../../models/Category'

const CategoryModel = getModelForClass(Category)

//delete category // eliminamos una categoria existente
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id)
    res.json({ message: 'category deleted' })
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error deleting the category ${req.params.id}`, error })
  }
}
