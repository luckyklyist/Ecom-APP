import mongoose from "mongoose";

//Todo types of the Order models

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productsCart: {
      type: Array,
      required: true,
    },
    paymentStatus: { type: Boolean },
    orderStatus: { type: Boolean },
    totalCost: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);
export default Order;
