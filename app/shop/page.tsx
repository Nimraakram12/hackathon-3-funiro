import React from "react";
import Quality from "@/app/components/quality";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { BiGridSmall } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";

const page = () => {
  return (
    <>
      <Header />

      <div
        className="bg-[url('/images/bg-img.png')] bg-no-repeat 
    bg-cover h-[300px] w-full flex flex-col items-center justify-center"
      >
        <Image src={"/images/Logos-01.png"} alt="logo" width={80} height={50} />
        <h2 className="font-medium text-5xl mt-[-20px]">Shop</h2>
        <h5 className="flex">
          <span className="flex items-center font-medium">
            Home <IoIosArrowForward />
          </span>
          Shop
        </h5>
      </div>

      <div className="w-full h-auto md:h-20 bg-[#F9F1E7] hidden md:flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center h-20 justify-center gap-10 border w-full md:w-1/2">
          <Image
            src={"/images/filter.png"}
            alt="Images"
            width={80}
            height={80}
            className="w-7 h-6"
          />
          <h3 className="text-xl">Filter</h3>
          <BiGridSmall className="w-7 h-6" />
          <BsViewList className="w-7 h-6" />
          <RxDividerVertical className="w-7 h-6" />

          <h3>Showing 1-16 of 32 results</h3>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-end items-center gap-4">
          <h3>Show</h3>
          <p className="w-10 bg-white h-10 border-2 flex items-center justify-center">
            16
          </p>
          <h3>Sort By </h3>
          <p className="w-28 bg-white h-10 border-2 flex items-center justify-center">
            Default
          </p>
        </div>
      </div>
      {/* Shop Cards */}

      <div
        className="w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center pt-0 p-0 md:p-16"
      >
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images.png"}
              alt="Images"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 text-2xl bg-[#F4F5F7]">
            Syltherine
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (1).png"}
              alt="Images (1)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Leviosa
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (2).png"}
              alt="Images (2)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Lolito
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Luxury big sofa
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 7.000.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/image 4.png"}
              alt="image 4"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Respira
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Outdoor bar table and stool
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 500.000
          </h3>
        </div>
      </div>

      <div
        className="w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center pt-0 p-0 md:p-16"
      >
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images.png"}
              alt="Images"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 text-2xl bg-[#F4F5F7]">
            Syltherine
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (1).png"}
              alt="Images (1)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Leviosa
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (2).png"}
              alt="Images (2)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Lolito
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Luxury big sofa
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 7.000.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/image 4.png"}
              alt="image 4"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Respira
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Outdoor bar table and stool
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 500.000
          </h3>
        </div>
      </div>

      <div
        className="w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center pt-0 p-0 md:p-16"
      >
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images.png"}
              alt="Images"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 text-2xl bg-[#F4F5F7]">
            Syltherine
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (1).png"}
              alt="Images (1)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Leviosa
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (2).png"}
              alt="Images (2)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Lolito
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Luxury big sofa
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 7.000.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/image 4.png"}
              alt="image 4"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Respira
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Outdoor bar table and stool
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 500.000
          </h3>
        </div>
      </div>

      <div
        className="w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center pt-0 p-0 md:p-16"
      >
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images.png"}
              alt="Images"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 text-2xl bg-[#F4F5F7]">
            Syltherine
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (1).png"}
              alt="Images (1)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Leviosa
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (2).png"}
              alt="Images (2)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Lolito
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Luxury big sofa
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 7.000.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/image 4.png"}
              alt="image 4"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Respira
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Outdoor bar table and stool
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 500.000
          </h3>
        </div>
      </div>

      <div
        className="w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center pt-0 p-0 md:p-16"
      >
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images.png"}
              alt="Images"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 text-2xl bg-[#F4F5F7]">
            Syltherine
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (1).png"}
              alt="Images (1)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Leviosa
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Stylish cafe chair
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 2.500.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/Images (2).png"}
              alt="Images (2)"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Lolito
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Luxury big sofa
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 7.000.000
          </h3>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <Image
              src={"/images/image 4.png"}
              alt="image 4"
              width={120}
              height={80}
              className="w-[272px] h-60 m-auto"
            />
          </div>

          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-2xl">
            Respira
          </h3>
          <p className="text-[#898989] text-base bg-[#F4F5F7]">
            Outdoor bar table and stool
          </p>
          <h3 className="font-semibold leading-7 bg-[#F4F5F7] text-xl">
            Rp 500.000
          </h3>
        </div>
      </div>
      

      <Quality />
      <Footer />
    </>
  );
};

export default page;
