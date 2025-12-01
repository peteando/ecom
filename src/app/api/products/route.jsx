// app/api/products/route.js
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

// Helper function for error responses
const handleError = (error) => {
  console.error(error);
  return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
    status: 500,
  });
};

// GET all products
export async function GET() {
  try {
    await dbConnect();

    const products = await Product.find({}).lean();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}

// POST a new product
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    // Basic validation
    if (!body.name || !body.price) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const product = new Product(body);
    await product.save();

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}
