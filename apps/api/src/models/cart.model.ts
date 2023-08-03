import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
    items: [cartItemSchema],
    totalPrice: { type: Number, required: true },
}, { timestamps: true });

const Cart = mongoose.model('cart', cartSchema);

export default Cart;
