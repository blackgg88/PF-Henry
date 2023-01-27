const { orderOptions } = require('./orderOptions')

const orderProducts = (products, types) => {

  let [type, order] = Object.entries(types)[0];

  return (orderOptions[order.toLowerCase()] || orderOptions.default) (products,type.toLowerCase());
}

module.exports = { orderProducts }