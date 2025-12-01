"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BestSellers2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (!products.length) return <p>No products found</p>;

  return (
    <div className="container mx-auto px-3">
      <h2 className="text-4xl lg:text-5xl font-bold mt-20 mb-10">Best Sellers</h2>
      <div className="grid grid-cols-6 gap-5">
        {products.slice(0, 12).map((product) => (
          <div key={product._id} className="">
            <Link href={`/product/${product._id}`}>
              <img
                src={product.image[0] || "/images/placeholder.png"} // fallback if no image
                alt={product.name}
                className="w-full object-cover"
              />
            </Link>
            <p className="font-bold mt-5">{product.name}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <p>AUD ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
