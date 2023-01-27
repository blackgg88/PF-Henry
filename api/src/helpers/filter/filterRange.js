const filterRange = (products, query, name) =>
  products.filter(pr => pr[name] >= query);

const filterPrice = (products, min, max, name) => {
  console.log(min, max, name)

  return products.filter(pr => pr[name] >= min && pr[name] <= max)
}

module.exports = { filterRange, filterPrice };
