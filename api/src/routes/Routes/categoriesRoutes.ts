import { Router } from "express";

import {
  getAllCategories,
  getCategoryById,
  postCategory,
  deleteCategory,
  updateCategory,
} from "../Controllers/categoriesControllers";

const category = Router();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////CATEGORY ROUTES!!!!!!!!!!!!

//find categories// devuelve lista de todos los categorias
category.get("/", getAllCategories);

//find by ID // devuelve la categoria buscado por ID
category.get("/:id", getCategoryById);

//post category // crea una nueva categoria
category.post("/", postCategory);

//delete category // eliminamos una categoria existente
category.delete("/:id", deleteCategory);

///UPDATE category // updateamos una categoria
category.put("/:id", updateCategory);

export default category;
