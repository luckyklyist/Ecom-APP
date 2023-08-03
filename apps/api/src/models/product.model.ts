import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    price: {
        type: Number,
        required: true
    },
    productDescription: {
        type: Number,
        required: true
    },
    imageUrl: { type: String, required: true },
}, { timestamps: true })

const Product = mongoose.model("product", productSchema);

export default productSchema;