import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { Category } from '../../models/Category'

const CategoryModel = getModelForClass(Category)

//find categories// devuelve lista de todos los categorias
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ message: 'Error getting all categories', error })
  }
}
