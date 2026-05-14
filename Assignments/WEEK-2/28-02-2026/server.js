import express from "express";

// use body parser middleware

const app = express();
app.use(express.json())
let users = []
const port = 6767;
app.listen(port, () => console.log(`server listening at port : ${port} ...`));

app.get("/users", (request, response) => {

    response.json({ message: "users", payload: users });
    

});
app.get("/users/:id", (request, response) => {
    let userId = Number(request.params.id)
    let index = 0
    if (userId) { index = users.findIndex((user) => { return user.id === userId})}
    if (index == -1){ return response.json({ message: "user not found!"});}
    return response.json({ message: "User sent!", payload: users[index] });
    

});

app.post("/users", (request, response) => {
    const newUser = request.body
    users.push(newUser)
    response.json({message : "User Created"})
});

app.put("/users", (request, response) => {

    let modifiedUser = request.body;
    let index = users.findIndex((user) => {
        return user.id == modifiedUser.id;
    })
    if (index === -1){
        return response.json({message : "User not found"}
        )
    }
    users.splice(index, 1, modifiedUser)
    response.json({ message: "The users are modified!" });

});

app.delete("/users/:id", (request, response) => {

    let userId = Number(request.params.id)
    let index = users.findIndex((user) => {
        return user.id === userId
    })
    if (index === -1){ return response.json({message : "user Not Found"})}
    users.splice(index, 1)
    response.json({message : "user deleted"})

});

/*
create product api with below operations
[x] create new products ({productID, name, brand, price})
[x] read all products
- read all products by brand
[x] update a product
- delete product by id
*/

let products = []
// read all products
app.get("/product", (request, response) => {
    response.json({ message: "Fetched all Products", payload: products });
});
// read all products by brand
app.get("/product/:brand", (request, response) => {
    let brand = request.params.brand;
    let index = 0
    if (brand) { index = products.findIndex((product) => { return product.brand == brand})}
    if (index == -1){ return response.json({ message: "Product not found!"});}
    return response.json({ message: "Product Fetched by Brand", payload: products[index] });
});
// create new products
app.post("/product", (request, response) => {

    const newProduct = request.body
    products.push(newProduct)
    response.json({message : "Product Added!"})
});
// update the product
app.put("/product", (request, response) => {

    let modifiedProduct = request.body;
    let index = products.findIndex((product) => {
        return product.product_id == modifiedProduct.product_id;
    })
    if (index === -1){
        return response.json({message : "Product not found"}
        )
    }
    products.splice(index, 1, modifiedProduct)
    response.json({ message: "The Product is modified!" });

});
// delete product by id
app.delete("/product/:id", (request, response) => {

    let id = Number(request.params.id)
    let index = products.findIndex((obj) => {
        return obj.product_id === id
    })
    if (index === -1){ return response.json({message : "Product dosent Exist!"})}
    products.splice(index, 1)
    response.json({message : "Product deleted"})

});