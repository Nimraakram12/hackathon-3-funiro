"use client";
import Link from "next/link";
// src/components/ProductActions.tsx
import React, { useState } from "react";

const ProductActions: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1); // Prevent going below 1
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 border-b-2">
      {/* Counter */}
      <div className="flex items-center border border-gray-300 rounded-md">
        <button
          onClick={handleDecrement}
          className="w-10 h-10 text-gray-600 font-bold flex justify-center items-center hover:bg-gray-100 transition"
        >
          -
        </button>
        <span className="w-10 h-10 flex justify-center items-center text-gray-700 font-semibold">
          {count}
        </span>
        <button
          onClick={handleIncrement}
          className="w-10 h-10 text-black
          font-bold flex justify-center items-center hover:bg-gray-100 transition"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        className="bg-transparent border border-black hover:border-0 
      hover:text-white hover:bg-[#B88E2F] w-40 px-6 py-2 rounded-lg"
      >
        <Link href="productcart" className="text-base font-bold">
          Add To Cart
        </Link>
      </button>
      {/* Compare Button */}
      <button
        className="bg-transparent border border-black hover:border-0 
      hover:text-white hover:bg-[#B88E2F] w-40 px-6 py-2 rounded-lg"
      >
        <Link href="comparision" className="text-base font-bold">
          + Compare
        </Link>
      </button>
    </div>
  );
};

export default ProductActions;
