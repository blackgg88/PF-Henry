const nameProduct = (products, name) => {
  console.log(5);
  return products.filter(produc => produc.name.toLowerCase().includes(name.toLowerCase()));
};

module.exports = { nameProduct };