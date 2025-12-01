// models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
    },
    brand: {
      type: String,
      required: [true, "Product brand is required"],
      trim: true,
    },
    image: {
      type: [String], // store the Cloudinary URL
      required: false,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Check if model already exists (to prevent recompilation in dev)
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
