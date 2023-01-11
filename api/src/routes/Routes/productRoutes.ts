import { Router } from "express";
import {
  postProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
  putProduct,
} from "../Controllers/productControllers";

const products = Router();

//find products// devuelve lista de todos los productos
products.get("/", getAllProduct);

//find by ID // devuelve el products buscado por ID
products.get("/:id", getProductById);

//post products // crea un nuevo usuario
products.post("/", postProduct);

//delete products // eliminamos un products existente
products.delete("/:id", deleteProduct);

///UPDATE products // updateamos products
products.put("/:id", putProduct);

export default products;
