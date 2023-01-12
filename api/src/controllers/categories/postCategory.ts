import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { Category } from '../../models/Category'

const CategoryModel = getModelForClass(Category)

//post category // crea una nueva categoria
export const postCategory = async (req: Request, res: Response) => {
  try {
    const category = new CategoryModel(req.body)
    await category.save()
    res.json(category)
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error posting the Category ${req.body}`, error })
  }
}
