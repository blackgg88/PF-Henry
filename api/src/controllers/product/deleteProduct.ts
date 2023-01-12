import { Request, Response } from 'express'
import { getModelForClass } from '@typegoose/typegoose'
import { Product } from '../../models/Product'
const ProductModel = getModelForClass(Product)

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productDeleted = await ProductModel.findByIdAndDelete(req.params.id)
    res.json({ message: `product deleted: ${productDeleted?.name}` })
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error delete product :${req.params.id}`, error })
  }
}