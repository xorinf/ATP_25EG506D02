import exp from "express";
import { userApp } from "./API/UserAPI.js";
import { productApp } from "./API/ProductAPI.js";

// use body parser middleware

const app = exp();
app.use(exp.json());
app.use('/user-api', userApp)
app.use('/product-api', productApp)

function mid1(request, response, next){
    console.log('mid 1 executed')
    next()
}
function mid2(request, response, next){
    console.log("mid 2 executed")
    next()
}

app.use(mid1)
app.use(mid2)

const port = 6767;
app.listen(port, () => console.log(`server listning at port : ${port} ...`));
