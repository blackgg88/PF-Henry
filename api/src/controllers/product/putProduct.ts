import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { Product } from '../../models/Product'
const ProductModel = getModelForClass(Product)

export const putProduct = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    res.json(products)
  } catch (error) {
    res.status(400).json({
      message: `Error updating the product: ${req.params.id}`,
      error,
    })
  }
}