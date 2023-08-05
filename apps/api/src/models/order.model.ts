import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    productsCart: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "cart",
        required: true
    },
    paymentStatus: { type: Boolean },
    orderStatus: { type: Boolean },
}, { timestamps: true })

const Order = mongoose.model("order", orderSchema);
export default Order;