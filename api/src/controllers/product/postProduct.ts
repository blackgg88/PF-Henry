import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { Product } from '../../models/Product'
const ProductModel = getModelForClass(Product)

export const postProduct = async (req: Request, res: Response) => {
  try {
    const products = new ProductModel(req.body)
    await products.save()
    res.json(products)
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error posting a product ${req.body.id}`, error })
  }
}