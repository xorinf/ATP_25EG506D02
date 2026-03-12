import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        productId: {
            type: Number,
            required: [true, "Product ID is required!"],
            unique: true
        },
        productName: {
            type: String,
            required: [true, "Product Name is Required!"],
        },
        price: {
            type: Number,
            required: [true, "Price Required"],
            min: [10000, "Minimum price should be 10000"],
            max: [50000, "Maximum price should be 50000"],
        },
        brand: {
            type: String,
            required: [true, "Brand Name is Required!"]
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export const ProductModel = model("product", productSchema);