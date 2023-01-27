import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Product } from '../../models/Product';
const ProductModel = getModelForClass(Product);

export const getProductById = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.findById(req.params.id).select('-__v');
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: `Error getting by a product by id: ${req.params.id}`,
      error,
    });
  }
};
