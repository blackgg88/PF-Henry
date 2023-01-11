import { Router } from "express";

import category from "../routes/Routes/categoriesRoutes";
import products from "../routes/Routes/productRoutes";
import user from "../routes/Routes/userRoutes";

const router = Router();

router.use("/products", products);
router.use("/users", user);
router.use("/categories", category);

export default router;
