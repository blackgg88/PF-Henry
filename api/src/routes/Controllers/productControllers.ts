import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { Product } from "../../data/models/Product";
const ProductModel = getModelForClass(Product);

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: "Error getting product", error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.findById(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: `Error getting by a product by id: ${req.params.id}`,
      error,
    });
  }
};

export const postProduct = async (req: Request, res: Response) => {
  try {
    const products = new ProductModel(req.body);
    await products.save();
    res.json(products);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error posting a product ${req.body.id}`, error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productDeleted = await ProductModel.findByIdAndDelete(req.params.id);
    res.json({ message: `product deleted: ${productDeleted?.name}` });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error delete product :${req.params.id}`, error });
  }
};

export const putProduct = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: `Error updating the product: ${req.params.id}`,
      error,
    });
  }
};
