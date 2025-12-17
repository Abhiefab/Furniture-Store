import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        priceINR: { type: Number, required: true },
        quantity: { type: Number, required: true },
        img: { type: String, required: true },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    // ✅ REQUIRED FOR OPTION B (REAL ECOMMERCE)
    address: {
      type: Object,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "PLACED",
        "PROCESSING",
        "SHIPPED",
        "DELIVERED",
        "CANCELLED",
      ],
      default: "PLACED",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
