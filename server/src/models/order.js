import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    orderItems: [
      {
        type: Schema.Types.ObjectId,
        ref: "OrderItem",
        required: [true, "Order items are required"],
      },
    ],
    shippingAddress1: {
      type: String,
      required: [true, "Shipping address is required"],
    },

    city: {
      type: String,
      required: [true, "City is required"],
    },
    postal: {
      type: String,
      required: [true, "Zip code is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    status: {
      type: String,
      default: "Pending",
    },
    totalPrice: {
      type: Number,
    },
    dateOrdered: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
