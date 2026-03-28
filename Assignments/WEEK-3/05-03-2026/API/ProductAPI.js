import exp from 'express'

export const productApp = exp.Router();


/*
create product api with below operations
[x] create new products ({productID, name, brand, price})
[x] read all products
- read all products by brand
[x] update a product
- delete product by id
*/

let products = [];
// read all products
productApp.get("/product", (request, response) => {
  response.json({ message: "Fetched all Products", payload: products });
});


// read all products by brand
productApp.get("/product/:brand", (request, response) => {
  let brand = request.params.brand;
  // console.log(brand)
  let index = 0;
  if (brand) {
    index = products.findIndex((obj) => {
      return obj.brand == brand;
    });
  }
  if (index == -1) {
    return response.json({ message: "Product not found!" });
  }
  return response.json({
    message: "Product Fetched by Brand",
    payload: products[index],
  });
});


// create new products
productApp.post("/product", (request, response) => {
  const new_product = request.body;
  products.push(new_product);
  response.json({ message: "Product Added!" });
});

// update the product
productApp.put("/product", (request, response) => {
  let modifiedPrd = request.body;
  let index = products.findIndex((userObj) => {
    return userObj.product_id == modifiedPrd.product_id;
  });
  if (index === -1) {
    return response.json({ message: "Product not found" });
  }
  users.splice(index, 1, modifiedPrd);
  response.json({ message: "The Product is modidied!" });
});

// delete product by id
productApp.delete("/product/:id", (request, response) => {
  let id = Number(request.params.id);
  let index = products.findIndex((obj) => {
    return obj.product_id === id;
  });
  if (index === -1) {
    return response.json({ message: "Product dosent Exist!" });
  }
  products.splice(index, 1);
  response.json({ message: "Product deleted" });
});
