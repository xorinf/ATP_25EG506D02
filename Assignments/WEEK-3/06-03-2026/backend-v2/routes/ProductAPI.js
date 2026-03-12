import exp from 'express';
import { ProductModel } from '../models/ProductModel.js';
import { verifyToken } from '../middleware/verifyToken.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
const { sign } = jwt
export const productApp = exp.Router();

// a. Create product
productApp.post("/product", async (request, response) => {
    try {
        const newProduct = request.body;
        const newProductDocument = new ProductModel(newProduct);
        await newProductDocument.save();
        response.status(201).json({ message: "Product created!", payload: newProductDocument });
    } catch (error) {
        response.status(400).json({ message: "Error creating product", error: error.message });
    }
});

// b. Read all products
productApp.get("/product", async (request, response) => {
    try {
        const products = await ProductModel.find();
        response.status(200).json({ message: "Products found", payload: products });
    } catch (error) {
        response.status(500).json({ message: "Error reading products", error: error.message });
    }
});

// c. Read a product by productId
productApp.get("/product/:productId", async (request, response) => {
    try {
        const pId = request.params.productId;
        const product = await ProductModel.findOne({ productId: pId });

        if (product == null) {
            return response.status(404).json({ message: "Product not found!" });
        }

        response.status(200).json({ message: "Product found!", payload: product });
    } catch (error) {
        response.status(500).json({ message: "Error reading product", error: error.message });
    }
});

// d. Update a product by productId
productApp.put("/product/:productId", async (request, response) => {
    try {
        const modifiedProduct = request.body;
        const pId = request.params.productId;

        const updatedProduct = await ProductModel.findOneAndUpdate(
            { productId: pId },
            { $set: modifiedProduct },
            { returnDocument: 'after', runValidators: true }
        );

        if (updatedProduct == null) {
            return response.status(404).json({ message: "Product not found!" });
        }

        response.status(200).json({ message: "Product modified!", payload: updatedProduct });
    } catch (error) {
        response.status(400).json({ message: "Error updating product", error: error.message });
    }
});

// e. Delete a product by productId
productApp.delete("/product/:productId", async (request, response) => {
    try {
        const pId = request.params.productId;
        const deletedProduct = await ProductModel.findOneAndDelete({ productId: pId });

        if (deletedProduct == null) {
            return response.status(404).json({ message: "Product not found!" });
        }

        response.status(200).json({ message: "Product deleted!", payload: deletedProduct });
    } catch (error) {
        response.status(500).json({ message: "Error deleting product", error: error.message });
    }
});

productApp.post("/auth", async (request, response) => {
    const { productId, productName } = request.body
    const foundProduct = await UserModel.find({ productId : productId })
    if (!foundProduct) {
        return response.status(404).json({ message: "Invalid Product or ID" })
    }
    const isValidPass = await compare(password, foundMail.password)
    if (!isValidPass) {
        return response.status(400).json({ message: "Invalid Password" })
    }

    const signedToken = sign({ email: foundMail.email }, 'charlie kirk', { expiresIn: 60 })

    // return response.status(200).json({message : "authenticated!", Token : signedToken})
    response.cookie("token", signedToken, { httpOnly: true, sameSite: "lax", secure: false })
    response.status(200).json({ message: "login success!", payload: foundMail })
})