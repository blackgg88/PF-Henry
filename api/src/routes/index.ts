import { Router } from "express";
import { User } from "../data/models/Users";
import { Product } from "../data/models/Product";
import { Category } from "../data/models/Category";
import { getModelForClass } from "@typegoose/typegoose";

//necesario para poder usar metodos de busqueda como find
const UserModel = getModelForClass(User);
const ProductModel = getModelForClass(Product);
const CategoryModel = getModelForClass(Category);

const router = Router();

/////USER ROUTES!!!!!!!!!!!!

//find users// devuelve lista de todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

//find by ID // devuelve el usuario buscado por ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

//post user // crea un nuevo usuario
router.post("/users", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

//delete user // eliminamos un usuario existente
router.delete("/users/:id", async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

///UPDATE USER // updateamos usuarios
router.put("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////USER ROUTES!!!!!!!!!!!!

//find products// devuelve lista de todos los productos
router.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

//find by ID // devuelve el products buscado por ID
router.get("/products/:id", async (req, res) => {
  try {
    const products = await ProductModel.findById(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

//post products // crea un nuevo usuario
router.post("/products", async (req, res) => {
  try {
    const products = new ProductModel(req.body);
    await products.save();
    res.json(products);
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

//delete products // eliminamos un products existente
router.delete("/products/:id", async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.json({ message: "product deleted" });
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

///UPDATE products // updateamos products
router.put("/products/:id", async (req, res) => {
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
    res.status(400).json(console.log(error));
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////CATEGORY ROUTES!!!!!!!!!!!!

//find categories// devuelve lista de todos los categorias
router.get("/categories", async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

//find by ID // devuelve la categoria buscado por ID
router.get("/categories/:id", async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

//post category // crea una nueva categoria
router.post("/categories", async (req, res) => {
  try {
    const category = new CategoryModel(req.body);
    await category.save();
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

//delete category // eliminamos una categoria existente
router.delete("/categories/:id", async (req, res) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);
    res.json({ message: "category deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
});

///UPDATE category // updateamos una categoria
router.put("/categories/:id", async (req, res) => {
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
    res.status(400).json(error);
  }
});

export default router;
