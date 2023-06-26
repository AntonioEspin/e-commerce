/**
 * 
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total price
 */

export const totalProduct = (products) => {
  const totalSum = products.reduce((acum,total) => {
    return acum + total.price
  }, 0)
  return totalSum
}