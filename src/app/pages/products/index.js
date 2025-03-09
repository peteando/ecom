// pages/products.js
import { supabase } from "../lib/supabaseClient";

// Fetch products from Supabase on the server-side
export async function getServerSideProps() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error);
    return {
      props: { products: [] }, // Return an empty array in case of error
    };
  }

  return {
    props: {
      products: data || [], // Pass the fetched products as a prop
    },
  };
}

// The Products component
const Products = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold text-lg">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
