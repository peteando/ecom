// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function ProductClient({ product }) {
//   const sizes = ["XS", "S", "M", "L", "XL"];
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => setQuantity(prev => prev + 1);
//   const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

//   return (
//     <div className="container mx-auto px-3 py-10">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//         {/* LEFT COLUMN — IMAGES */}
//         <div className="flex justify-end">
//           <div className="w-1/2">
//             {product.image?.length ? (
//               product.image.map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt={product.name}
//                   width={400}
//                   height={400}
//                   className="rounded-lg object-cover w-full"
//                 />
//               ))
//             ) : (
//               <Image
//                 src="/images/placeholder.png"
//                 alt="Placeholder"
//                 width={400}
//                 height={400}
//                 className="rounded-lg w-full"
//               />
//             )}
//           </div>
//         </div>

//         {/* RIGHT COLUMN — DETAILS */}
//         <div>
//           <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
//           <p className="text-lg text-gray-500 mb-8">{product.brand}</p>

//           {/* Sizes */}
//           <div className="flex gap-2 mb-4">
//             {sizes.map(size => (
//               <button
//                 key={size}
//                 className="w-10 h-10 flex items-center justify-center border cursor-pointer hover:bg-gray-200"
//               >
//                 {size}
//               </button>
//             ))}
//           </div>

//           <p className="text-2xl font-bold mt-3 mb-4">${product.price}</p>

//           <p className="mb-6">{product.description}</p>

//           {/* Quantity + Add to Cart */}
//           <div className="flex items-center gap-4">
//             {/* Quantity selector */}
//             <div className="flex items-center border rounded overflow-hidden">
//               <button
//                 onClick={decrement}
//                 className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
//               >
//                 -
//               </button>

//               <span className="px-4 py-2">{quantity}</span>

//               <button
//                 onClick={increment}
//                 className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
//               >
//                 +
//               </button>
//             </div>

//             {/* Add to Cart */}
//             <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
//               Add to Cart
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function ProductClient({ product }) {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useCartStore((state) => state.openCart);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image?.[0] || "/images/placeholder.png",
    });

    openCart(); // open cart drawer after adding
  };

  return (
    <div className="container mx-auto px-3 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN — IMAGES */}
        <div className="flex justify-end">
          <div className="w-1/2">
            {product.image?.length ? (
              product.image.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              ))
            ) : (
              <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
            )}
          </div>
        </div>

        {/* RIGHT COLUMN — DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-500 mb-8">{product.brand}</p>

          {/* Sizes */}
          <div className="flex gap-2 mb-4">
            {sizes.map((size) => (
              <button
                key={size}
                className="w-10 h-10 flex items-center justify-center border cursor-pointer hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>

          <p className="text-2xl font-bold mt-3 mb-4">
            ${product.price}
          </p>

          <p className="mb-6">{product.description}</p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            {/* Quantity selector */}
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={decrement}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>

              <span className="px-4 py-2">{quantity}</span>

              <button
                onClick={increment}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
