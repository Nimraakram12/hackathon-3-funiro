import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import Image from "next/image";
import Quality from "@/app/components/quality";
const page = () => {
  return (
    <>
      <Header />
      <div className="w-full flex items-center justify-between p-4 md:p-16">
        <h2 className="flex items-center justify-between text-slate-300 tracking-wide">
          Home / <span className=" text-black"> Cart</span>
        </h2>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-around p-0 md:p-16">
        <div className="w-full md:w-4/6">
          <div className="w-full p-4 flex flex-wrap md:flex-nowrap justify-around items-center bg-[#F9F1E7]">
            <h2 className="font-medium text-lg">Product</h2>
            <h2 className="font-medium text-lg">Price</h2>
            <h2 className="font-medium text-lg">Quantity</h2>
            <h2 className="font-medium text-lg">Subtotal</h2>
          </div>

          <div className="w-full flex justify-around items-center mt-4">
            <h2 className="font-medium text-lg flex flex-col md:flex-row items-center">
              <Image
                src={"/images/product.png"}
                alt="product"
                width={60}
                height={40}
                className="w-10 md:w-20"
              />
              <span className="text-[#9F9F9F]">Asgaard sofa</span>
            </h2>
            <h2 className="font-medium text-sm md:text-lg text-[#9F9F9F]">
              Rs. 250,000.00
            </h2>
            <h2 className="font-medium text-lg">
              <input
                type="number"
                name=""
                value="1"
                id=""
                className="border-2 border-black w-10 md:w-14"
              />
            </h2>
            <h2 className="font-medium text-sm md:text-lg">Rs. 250,000.00</h2>
          </div>
        </div>

        <div className="w-full md:w-[25%] h-60 border flex flex-col mt-0 md:mt-[-40px] p-2 md:p-0  bg-[#F9F1E7] rounded-lg md:justify-end">
          <h2 className="font-semibold text-[32px] text-center leading-7">
            Card Total
          </h2>
          <div className="flex justify-between mt-4">
            <p className="ml-4">Subtotal:</p>
            <p className="mb-4 mr-4">Rs. 250,000.00</p>
          </div>

          <div className="flex justify-between mt-4">
            <p className="ml-4">Total:</p>
            <p className="mb-4 mr-4">Rs. 250,000.00</p>
          </div>

          <div className="w-full flex justify-center">
            <button className="w-[150px] mt-6 md:w-[180px] rounded-lg h-14 text-black bg-transparent border border-black hover:border-0 hover:bg-[#B88E2F] hover:text-white">
              <Link href="checkout" className="font-medium text-base leading-6">
                Check Out
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Quality />
      <Footer />
    </>
  );
};

export default page;
