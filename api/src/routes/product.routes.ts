import { Router } from "express";
import { getAllProduct } from "../controllers/product/getAllProduct";
import { getProductById } from "../controllers/product/getProductById";
import { postProduct } from "../controllers/product/postProduct";
import { deleteProduct } from "../controllers/product/deleteProduct";
import { putProduct } from "../controllers/product/putProduct";
//-----------
import { postRatings } from "../controllers/product/postProduct";

const products = Router();

// // PRODUCTS ROUTES!!

//find products// devuelve lista de todos los productos
products.get("/", getAllProduct);

//find by ID // devuelve el products buscado por ID
products.get("/:id", getProductById);

//post products // crea un nuevo usuario
products.post("/", postProduct);

//-----------
products.post("/:id/ratings", postRatings);

//delete products // eliminamos un products existente
products.delete("/:id", deleteProduct);

///UPDATE products // updateamos products
products.put("/:id", putProduct);

export default products;
