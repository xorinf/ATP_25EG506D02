import exp from "express";
import { connect } from "mongoose";
import { userApp } from "./routes/UserApp.js";
import { productApp } from "./routes/ProductAPI.js";
import cookieParser from "cookie-parser";


const app = exp();
const port = 6767;
app.use(exp.json());
app.use(cookieParser())
app.use("/user-api", userApp);
app.use("/product-api", productApp);
async function start_con() {
  let db_address = "mongodb://127.0.0.1:27017/my_database";

  try {
    await connect(db_address);
    app.listen(port, () =>
      console.log(`server listning at port : ${port} ...`),
    );
    console.log(`The DataBase is connected url : || ${db_address} ||`);
  } catch (err) {
    console.log("con refused :", err);
  }
}

start_con();



app.use((err, request, response, next) => {
  console.log(err.name, err.message)
  if (err.name === 'ValidationError') {
    return response.status(400).json({ message: "An unexpected error Occured", err_info: [err.name, err.message] })
  }
  if (err.name === 'CastError') {
    return response.status(400).json({ message: "Error Occured!" })
  }
  if (err.name === 'MongooseError') {
    console.log(err)
    return response.status(500).json({ message: "An unexpected error Occured", err_info: [err.name, err.message] })
  }
});