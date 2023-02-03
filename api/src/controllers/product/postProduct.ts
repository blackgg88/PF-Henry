import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { Product } from "../../models/Product";
const ProductModel = getModelForClass(Product);

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

//-----------------------------------

export const postRatings = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) return res.status(404).send({ message: "Product not found" });

    product.ratings.push(req.body.rating);
    const averageRating = (ratings: number[]) => {
      if (!ratings || !ratings.length) return 0;
      return ratings.reduce((a, b) => a + b, 0) / ratings.length;
    };
    product.rating = averageRating(product.ratings);
    product.rating.toFixed(2);
    await product.save();
    res.send({ message: "Rating submitted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error submitting rating" });
  }
};
