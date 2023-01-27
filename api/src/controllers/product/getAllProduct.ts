import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { Product } from "../../models/Product";
import { allFilters } from "../../helpers/filter/allFilters";
import { allProductsCategories } from "../../helpers/filter/allProductsCategories.js";
import { nameProduct } from "../../helpers/filter/nameProduct.js";

const ProductModel = getModelForClass(Product);

export const getAllProduct = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    if (name && name !== "") {
      let product = await ProductModel.find({}).populate({
        path: "categories",
        select: "-__v",
      });
      product = nameProduct(product, name);

      if (!product.length) return res.status(404).json({ error: "product not found" });
      return res.status(200).json(product);
    }

    if (req.query) {
      const products = await allFilters(req.query);
      return products?.length
        ? res.json(products)
        : res.status(404).json({ error: "product not found" });
    }
    
    let products = await allProductsCategories();
    return res.status(200).json(products);

  } catch (error) {
    return res.status(400).json({ message: "Error getting product", error });
  }
};
