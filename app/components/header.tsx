"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Furniro"
              width={120}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-blue-600 transition focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-[#B88E2F] transition">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-[#B88E2F] transition">
            Shop
          </Link>
          <Link href="/comparision" className="text-gray-700 hover:text-[#B88E2F] transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#B88E2F] transition">
            Contact
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="text-gray-600 hover:text-[#B88E2F] transition">
            <VscAccount className="w-6 h-6" />
          </Link>
          <Link href="/searchProducts" className="text-gray-600 hover:text-[#B88E2F] transition">
            <IoMdSearch className="w-6 h-6" />
          </Link>
          <Link href="/wishlist" className="text-gray-600 hover:text-[#B88E2F] transition">
            <FaRegHeart className="w-6 h-6" />
          </Link>
          <Link href="/productcart" className="text-gray-600 hover:text-[#B88E2F] transition">
            <FiShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 bg-gray-100">
            <Link href="/" className="text-gray-700 hover:text-[#B88E2F] transition">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-[#B88E2F] transition">
              Shop
            </Link>
            <Link href="/comparision" className="text-gray-700 hover:text-[#B88E2F] transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#B88E2F] transition">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
