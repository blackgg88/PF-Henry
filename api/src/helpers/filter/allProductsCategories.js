const { getModelForClass } = require("@typegoose/typegoose") 
const { Product } = require("../../models/Product")
const ProductModel = getModelForClass(Product);

const allProductsCategories = async () => {
  return await ProductModel.find({}).populate({
    path: "categories",
    select: "-__v",
  });
};

module.exports = { allProductsCategories };
