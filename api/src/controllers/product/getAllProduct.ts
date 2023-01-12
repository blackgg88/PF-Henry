import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { Product } from '../../models/Product'
const ProductModel = getModelForClass(Product)

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find()
    res.json(products)
  } catch (error) {
    res.status(400).json({ message: 'Error getting product', error })
  }
}
