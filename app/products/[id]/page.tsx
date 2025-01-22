"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext"; // Import useCart
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import Link from "next/link";

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
  tags: string[];
  image: string;
  quantity: number;
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1); // New state for quantity
  const { addToCart, removeFromCart, updateCart } = useCart(); // Access cart functions from context
  const { id } = useParams(); // Use useParams() for dynamic routing

  const fetchProduct = async () => {
    if (id) {
      const query = `*[_type == "product" && _id == $id]{
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query, { id });
      setProduct(data[0]);
    }
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      alert(`${quantity} ${product.title} added to cart!`);
    }
  };

  const handleUpdateCart = (action: "increase" | "decrease") => {
    if (product) {
      const newQuantity = action === "increase" ? quantity + 1 : quantity - 1;
      setQuantity(Math.max(1, newQuantity));
      updateCart(product._id, newQuantity);
    }
  };

  const handleRemoveFromCart = () => {
    if (product) {
      removeFromCart(product._id);
      alert(`${product.title} removed from cart!`);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center h-screen p-4 bg-[#f9f3e4]">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row max-w-4xl w-full">
        {/* Product Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">{product.title}</h2>
          <p className="text-lg font-bold text-gray-800">${product.price}</p>
          <p className="text-sm text-gray-600 mt-4">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center space-x-4">
            <button
              onClick={() => handleUpdateCart("decrease")}
              className="px-6 py-3 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 shadow-md"
            >
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              onClick={() => handleUpdateCart("increase")}
              className="px-6 py-3 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 shadow-md"
            >
              +
            </button>
          </div>

          {/* Add to Cart, Remove from Cart, and View Cart Buttons */}
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
            <button
              onClick={handleRemoveFromCart}
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
            >
              Remove from Cart
            </button>
            <Link href="/productcart">
              <button className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 transform hover:scale-105">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
