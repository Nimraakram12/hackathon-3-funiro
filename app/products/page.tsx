"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const sanity = createClient({
  projectId: "pknoq409",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

interface Product {
  _id: string;
  id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  image: string;
  quantity: number;
  tags: string[]; // tags should be an array of strings
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); // Access the addToCart function from context

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }`;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to truncate description
  const truncateDescription = (description: string) => {
    const maxLength = 100; // Set the max length for the description
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "..."; // Truncate and add ellipsis
    }
    return description;
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-[#B88E2F] text-[32px] font-bold mt-4 mb-4">Products From API&apos;s Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Link href={`/products/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                {/* Truncate description */}
                <p className="text-blue-950 mt-2 text-sm">
                  {truncateDescription(product.description)}
                </p>
                <div className="flex justify-between items-center mt-4 ">
                  <div>
                    <p className="text-indigo-500 font-bold">${product.price}</p>
                    {product.discountPercentage > 0 && (
                      <p className="text-sm text-orange-500">{product.discountPercentage}% OFF</p>
                    )}
                  </div>
                </div>

                {/* Render Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="mt-2">
                    <h3 className="text-sm font-semibold">Tags:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#B88E2F] text-white px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link href={`/products/${product._id}`}>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full hover:border-[#B88E2F] hover:bg-white border-[#B88E2F] bg-[#B88E2F] hover:text-[#B88E2F] text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
