const { getModelForClass } = require("@typegoose/typegoose");
const { Product } = require("../../models/Product");
const ProductModel = getModelForClass(Product);

const array = [
  "63bebb1fe29c7344a53f6c29",
  "63bebc3e001d5278f72b9266",
  "63bebc4e001d5278f72b9268",
  "63bebc5f001d5278f72b926a",
  "63bebc6c001d5278f72b926c",
  "63c6d27b2fbbfb7b7911edf2",
];

const name = [
  "Connectify and Control",
  "Home Entertainment",
  "Energy Management",
  "Safety and Security",
  "Confort and Ease",
  "Lifestyle and Health"
];


const obj = [
  { "Connectify and Control": "63bebb1fe29c7344a53f6c29" },
  { "Home Entertainment": "63bebc3e001d5278f72b9266" },
  { "Energy Management": "63bebc4e001d5278f72b9268" },
  { "Safety and Security": "63bebc5f001d5278f72b926a" },
  { "Confort and Ease": "63bebc6c001d5278f72b926c" },
  { "Lifestyle and Health": "63c6d27b2fbbfb7b7911edf2" },
];

const allProductsQuantity = async () => {
  // const promisesObj = array.map(id =>
  //   ProductModel.find({
  //     categories: id,
  //   }).populate({
  //     path: "categories",
  //     select: "-__v",
  //   })
  // );


  const promisesObj = array.map(id =>
    ProductModel.find({
      categories: id,
    }).populate({
      path: "categories",
      select: "-__v",
    })
  );

  

  return await Promise.all(promisesObj).then(resp =>
    resp.map((res, index) => ({
      name: array[index],
      quantity: res.length,
    }))
  );
};

module.exports = { allProductsQuantity };
