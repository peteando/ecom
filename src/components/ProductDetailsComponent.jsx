"use client";
import { useState } from "react";

export default function ProductDetailsClient({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L", "XL"];

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-500">{product.brand}</p>
      <p className="text-2xl font-bold">${product.price}</p>

      {/* Sizes */}
      <div className="flex gap-2">
        {sizes.map(size => (
          <div
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer hover:bg-gray-200 ${
              selectedSize === size ? "bg-blue-600 text-white" : ""
            }`}
          >
            {size}
          </div>
        ))}
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded overflow-hidden">
          <button onClick={decrement} className="px-3 py-2 bg-gray-200 hover:bg-gray-300">-</button>
          <span className="px-4 py-2">{quantity}</span>
          <button onClick={increment} className="px-3 py-2 bg-gray-200 hover:bg-gray-300">+</button>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
