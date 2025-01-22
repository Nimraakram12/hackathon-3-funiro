"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity = createClient({
  projectId: "pknoq409",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const SearchProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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
      setFilteredProducts(data); // Initialize filtered products
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
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
                  <p className="text-blue-950 mt-2 text-sm">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-orange-500">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;
