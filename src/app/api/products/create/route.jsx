import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

// Configure Cloudinary once
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();

    console.log("Form data received:", {
      name: formData.get("name"),
      category: formData.get("category"),
      price: formData.get("price"),
      brand: formData.get("brand"),
      images: formData.getAll("images")
    });

    const name = formData.get("name");
    
    const category = formData.get("category");
    const price = formData.get("price");
    const brand = formData.get("brand");
    

    const files = formData.getAll("images");

    if (!files || files.length === 0) {
      return NextResponse.json({ success: false, message: "No files uploaded" }, { status: 400 });
    }

    // Upload all images to Cloudinary
    const result = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { resource_type: "auto", folder: "products" }, // optional folder
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          stream.end(buffer);
        });
      })
    );

    const imageUrls = result.map((r) => r.secure_url);

    // Save product in MongoDB
    await dbConnect();
    const newProduct = await Product.create({
      name,
      category,
      price: Number(price),
      brand,
      image: imageUrls,
      date: Date.now(),
    });

    return NextResponse.json(
      { success: true, message: "Upload successful", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
