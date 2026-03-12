import exp from "express";

// use body parser middleware

const app = exp();
app.use(exp.json())
let users = []
const port = 6767;
app.listen(port, () => console.log(`server listning at port : ${port} ...`));

app.get("/users", (request, response) => {

    response.json({ message: "users", payload: users });
    

});
app.get("/users/:id", (request, response) => {
    let idofURL = Number(request.params.id)
    let index = 0
    if (idofURL) { index = users.findIndex((obj) => { return obj.id === idofURL})}
    if (index == -1){ return response.json({ message: "user not found!"});}
    return response.json({ message: "The sent!", payload: users[index] });
    

});

app.post("/users", (request, response) => {

    
    

    const new_vae = request.body
    users.push(new_vae)
    response.json({message : "User Created"})
});

app.put("/users", (request, response) => {

    let modifieduser = request.body;
    let index = users.findIndex((userObj) => {
        return userObj.id == modifieduser.id;
    })
    if (index === -1){
        return response.json({message : "User not found"}
        )
    }
    users.splice(index, 1, modifieduser)
    response.json({ message: "The users are modidied!" });

});

app.delete("/users/:id", (request, response) => {

    let idofURL = Number(request.params.id)
    let index = users.findIndex((obj) => {
        return obj.id === idofURL
    })
    if (index === -1){ return response.json({message : "user Not Found"})}
    users.splice(idofURL, 1)
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
    // console.log(brand)
    let index = 0
    if (brand) { index = products.findIndex((obj) => { return obj.brand == brand})}
    if (index == -1){ return response.json({ message: "Product not found!"});}
    return response.json({ message: "Product Fetched by Brand", payload: products[index] });
});
// create new products
app.post("/product", (request, response) => {

    const new_product = request.body
    products.push(new_product)
    response.json({message : "Product Added!"})
});
// update the product
app.put("/product", (request, response) => {

    let modifiedPrd = request.body;
    let index = products.findIndex((userObj) => {
        return userObj.product_id == modifiedPrd.product_id;
    })
    if (index === -1){
        return response.json({message : "Product not found"}
        )
    }
    users.splice(index, 1, modifiedPrd)
    response.json({ message: "The Product is modidied!" });

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