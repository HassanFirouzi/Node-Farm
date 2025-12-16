
const createCard = (html, product) => {

  let output = html.replace(/{%PRODUCTNAME%}/g, product.productName)

    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%ID%}/g, product.id)



  return output
}

module.exports = createCard
