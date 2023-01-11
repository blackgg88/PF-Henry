import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { Category } from "../../data/models/Category";
const CategoryModel = getModelForClass(Category);

//find categories// devuelve lista de todos los categorias
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error getting all categories", error });
  }
};

//find by ID // devuelve la categoria buscado por ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    res.json(category);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error getting a category by ${req.params.id}`, error });
  }
};

//post category // crea una nueva categoria
export const postCategory = async (req: Request, res: Response) => {
  try {
    const category = new CategoryModel(req.body);
    await category.save();
    res.json(category);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error posting the Category ${req.body}`, error });
  }
};

//delete category // eliminamos una categoria existente
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);
    res.json({ message: "category deleted" });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error deleting the category ${req.params.id}`, error });
  }
};

///UPDATE category // updateamos una categoria

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(category);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error updating the category ${req.params.id}`, error });
  }
};
