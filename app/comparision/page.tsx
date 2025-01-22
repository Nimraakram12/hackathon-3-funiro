import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { IoIosArrowForward } from "react-icons/io";
import Quality from "@/app/components/quality";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Header />
      <div
        className="bg-[url('/images/bg-img.png')] bg-no-repeat 
    bg-cover h-[300px] w-full flex flex-col items-center justify-center"
      >
        <Image src={"/images/Logos-01.png"} alt="logo" width={80} height={50} />
        <h2 className="font-medium text-3xl md:text-5xl mt-[-20px]">
          Product Comparision
        </h2>
        <h5 className="flex">
          <span className="flex items-center font-medium">
            Home <IoIosArrowForward />
          </span>
          Comparision
        </h5>
      </div>

      <div
        className="w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center pt-0 p-0 md:p-16"
      >
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <h3 className="font-semibold leading-7 mt-[-150px] mb-10 text-2xl px-14">
            Go to Product page for more Products
          </h3>
          <Link href="shop" className="border-b-2 mx-14">
            View More
          </Link>
        </div>
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <Image
            src={"/images/product.png"}
            alt="product"
            width={120}
            height={80}
            className="w-[272px] h-60 m-auto"
          />

          <h3 className="font-semibold ml-6 leading-7 text-2xl">
            Asgaard Sofa
          </h3>
          <h3 className="font-semibold ml-6 leading-7 text-xl">
            Rs. 250,000.00
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#FAF3EA]">
            <Image
              src={"/images/sidecard1.png"}
              alt="sidecard1"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 text-2xl">Outdoor Sofa Set</h3>
          <h3 className="font-semibold leading-7 text-xl">Rs. 224,000.00 </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <h3 className="font-semibold leading-7 mt-[-150px] mb-10 text-2xl">
            Add a Product
          </h3>
          <button
            className="w-40 p-2 rounded-lg text-center border border-[#B88E2F] bg-white text-[#B88E2F] 
hover:border-0 hover:bg-[#B88E2F] hover:text-white"
          >
            <Link href="/" className="flex justify-around items-center">
              Choose a Product{" "}
              <MdOutlineKeyboardArrowDown className="text-xl" />
            </Link>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 text-center p-4 md:p-14 border-r-2">
          <h2 className="text-[28px] font-medium mt-6">General</h2>
          <h3 className="text-xl mt-6">Sales Package</h3>
          <h3 className="text-xl mt-6">Model Number</h3>
          <h3 className="text-xl mt-6">Secondary Material</h3>
          <h3 className="text-xl mt-6">Configuration</h3>
          <h3 className="text-xl mt-6">Upholstery Material</h3>
          <h3 className="text-xl mt-6">Upholstery Color</h3>

          <h2 className="text-[28px] font-medium mt-6">Product</h2>
          <h3 className="text-xl mt-6">Filling Material</h3>
          <h3 className="text-xl mt-6">Finish Type</h3>
          <h3 className="text-xl mt-6">Adjustable Headrest</h3>
          <h3 className="text-xl mt-6">Maximum Load Capacity</h3>
          <h3 className="text-xl mt-6">Origin of Manufacture</h3>

          <h2 className="text-[28px] font-medium mt-6">Dimensions</h2>
          <h3 className="text-xl mt-6">Width</h3>
          <h3 className="text-xl mt-6">Height</h3>
          <h3 className="text-xl mt-6">Depth</h3>
          <h3 className="text-xl mt-6">Weight</h3>
          <h3 className="text-xl mt-6">Seat Height</h3>
          <h3 className="text-xl mt-6">Leg Height</h3>

          <h2 className="text-[28px] font-medium mt-6">Warranty</h2>
          <h3 className="text-xl mt-6">Warranty Summary</h3>
          <h3 className="text-xl mt-14">Warranty Service Type</h3>
          <h3 className="text-xl mt-28">Covered in Warranty</h3>
          <h3 className="text-xl mt-28">Not Covered in Warranty</h3>
          <h3 className="text-xl mt-36">Domestic Warranty</h3>
        </div>

        <div className="w-full md:w-1/4 text-center p-4 md:p-14 border-r-2">
          <h2 className="text-[28px] font-medium mt-6"></h2>
          <h3 className="text-xl mt-24">1 sectional sofa</h3>
          <h3 className="text-xl mt-6">TFCBLIGRBL6SRHS</h3>
          <h3 className="text-xl mt-6">Solid Wood</h3>
          <h3 className="text-xl mt-6">L-shaped</h3>
          <h3 className="text-xl mt-6">Fabric + Cotton</h3>
          <h3 className="text-xl mt-6">Bright Grey & Lion</h3>

          <h2 className="text-[28px] font-medium mt-6"></h2>
          <h3 className="text-xl mt-20">Foam</h3>
          <h3 className="text-xl mt-6">Bright Grey & Lion</h3>
          <h3 className="text-xl mt-6">No</h3>
          <h3 className="text-xl mt-6">280 KG</h3>
          <h3 className="text-xl mt-14">India</h3>

          <h2 className="text-[28px] font-medium mt-6"></h2>
          <h3 className="text-xl mt-20">265.32 cm</h3>
          <h3 className="text-xl mt-6">76 cm</h3>
          <h3 className="text-xl mt-6">167.76 cm</h3>
          <h3 className="text-xl mt-6">45 KG</h3>
          <h3 className="text-xl mt-6">41.52 cm</h3>
          <h3 className="text-xl mt-6">5.46 cm</h3>

          <h2 className="text-[28px] font-medium mt-6"></h2>
          <h3 className="text-xl mt-24">1 Year Manufacturing Warranty</h3>
          <h3 className="text-xl mt-6">
            For Warranty Claims or Any Product Related Issues Please Email at
            operations@trevifurniture.com
          </h3>
          <h3 className="text-xl mt-6">
            Warranty Against Manufacturing Defect
          </h3>
          <h3 className="text-xl mt-20">
            The Warranty Does Not Cover Damages Due To Usage Of The Product
            Beyond Its Intended Use And Wear & Tear In The Natural Course Of
            Product Usage.
          </h3>
          <h3 className="text-xl mt-6">1 Year</h3>
          <button
            className="w-40 p-2 mt-10 rounded-lg text-center border-0 bg-[#B88E2F] text-white 
hover:border-[#B88E2F] hover:bg-white hover:text-[#B88E2F]"
          >
            <Link href="/">Add To Cart</Link>
          </button>
        </div>
        <div className="w-full md:w-1/4 text-center p-4 md:p-14 border-r-2">
          <h2 className="text-[28px] font-medium mt-6"></h2>
          <h3 className="text-xl mt-24">1 Three Seater, 2 Single Seater</h3>
          <h3 className="text-xl mt-6">DTUBLIGRBL568</h3>
          <h3 className="text-xl mt-6">Solid Wood</h3>
          <h3 className="text-xl mt-6">L-shaped</h3>
          <h3 className="text-xl mt-6">Fabric + Cotton</h3>
          <h3 className="text-xl mt-6">Bright Grey & Lion</h3>

          <h2 className="text-[28px] font-medium mt-6"></h2>
          <h3 className="text-xl mt-20">Matle</h3>
          <h3 className="text-xl mt-6">Bright Grey & Lion</h3>
          <h3 className="text-xl mt-6">Yes</h3>
          <h3 className="text-xl mt-6">300 KG</h3>
          <h3 className="text-xl mt-14">India</h3>

          <h2 className="text-[28px] font-medium mt-6"></h2>
          <h3 className="text-xl mt-20">265.32 cm</h3>
          <h3 className="text-xl mt-6">76 cm</h3>
          <h3 className="text-xl mt-6">167.76 cm</h3>
          <h3 className="text-xl mt-6">65 KG</h3>
          <h3 className="text-xl mt-6">41.52 cm</h3>
          <h3 className="text-xl mt-6">5.46 cm</h3>

          <h2 className="text-[28px] font-medium mt-6"></h2>
          <h3 className="text-xl mt-16">1.2 Year Manufacturing Warranty</h3>
          <h3 className="text-xl mt-6">
            For Warranty Claims or Any Product Related Issues Please Email at
            support@xyz.com
          </h3>
          <h3 className="text-xl mt-6">
            Warranty of the product is limited to manufacturing defects only.
          </h3>
          <h3 className="text-xl mt-6">
            The Warranty Does Not Cover Damages Due To Usage Of The Product
            Beyond Its Intended Use And Wear & Tear In The Natural Course Of
            Product Usage.
          </h3>
          <h3 className="text-xl mt-6">3 Months</h3>
          <button
            className="w-40 p-2 mt-10 rounded-lg text-center border-0 bg-[#B88E2F] text-white 
hover:border-[#B88E2F] hover:bg-white hover:text-[#B88E2F]"
          >
            <Link href="/">Add To Cart</Link>
          </button>
        </div>
      </div>

      <Quality />
      <Footer />
    </>
  );
};

export default page;
