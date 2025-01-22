import React from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import ProductAction from "@/app/components/productaction";
import Link from "next/link";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
const page = () => {
  return (
    <>
      <Header />

      <div className="w-full flex bg-[#F9F1E7]  items-center justify-between p-4 md:p-16">
        <h2 className="flex items-center justify-between text-slate-300 tracking-wide">
          
          Home <IoIosArrowForward />
          Shop <IoIosArrowForward />
          <RxDividerVertical className="text-black text-2xl" />
          <span className=" text-black">Asgaard Sofa</span>
        </h2>
      </div>
      <div className="w-full p-4 md:p-10 flex flex-col md:flex-row  border-b-2">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
          <div
            className="w-full p-0 md:w-1/2 flex flex-wrap md:flex-nowrap flex-row md:flex-col 
            justify-cener items-center gap-2 md:gap-8	"
          >
            <Image
              src={"/images/sidecard1.png"}
              alt="Product"
              width={100}
              height={100}
              className="w-[120px] h-[140px] bg-[#F9F1E7] md:h-20"
            />

            <Image
              src={"/images/sidecard2.png"}
              alt="Product"
              width={100}
              height={100}
              className="w-[120px] h-[100px] md:h-20 "
            />

            <Image
              src={"/images/sidecard3.png"}
              alt="Product"
              width={100}
              height={100}
              className="w-[120px] h-[100px] md:h-20 "
            />

            <Image
              src={"/images/sidecard4.png"}
              alt="Product"
              width={100}
              height={100}
              className="w-[120px] h-[100px] md:h-20 "
            />
          </div>

          <div className="w-full md:w-2/4 mt-4 md:mt-0">
            <Image
              src={"/images/product.png"}
              alt="Product"
              width={600}
              height={500}
              className="md:w-[750px] h-[400px]  ml-0 md:ml-[-80px]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="">
            <h3 className="font-semibold leading-6 text-4xl md:text-[42px]">
              Asgaard sofa
            </h3>
            <p className="text-[#9F9F9F] font-medium text-2xl mt-4">
              Rs. 250,000.00
            </p>
            <div className="flex justify-around items-center w-full md:w-1/2">
              <MdOutlineStarPurple500 className="fill-amber-400" />
              <MdOutlineStarPurple500 className="fill-amber-400" />
              <MdOutlineStarPurple500 className="fill-amber-400" />
              <MdOutlineStarPurple500 className="fill-amber-400" />
              <MdOutlineStarBorderPurple500 />|{" "}
              <p className="text-[#9F9F9F]">5 Customer Review</p>
            </div>
            <p className="w-full md:w-3/4 text-justify mt-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>

          <div>
            <div className="w-full md:w-1/2 mt-4 mb-10">
              <h2 className="text-[#9F9F9F]">Size </h2>
              <div className="flex w-full md:w-1/2 gap-2">
                <p className="w-7 h-7 rounded-md text-center bg-[#B88E2F] text-white">
                  L
                </p>
                <p className="w-7 h-7 rounded-md text-center bg-[#F9F1E7]">
                  XL
                </p>
                <p className="w-7 h-7 rounded-md text-center bg-[#F9F1E7]">
                  XS
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-4">
              <h2 className="text-[#9F9F9F]">Colors </h2>
              <div className="w-full md:w-1/2 flex">
                <p className="w-7 h-7 rounded-full border-2 bg-[#816DFA]"></p>
                <p className="w-7 h-7 rounded-full border-2 bg-[#000000]"></p>
                <p className="w-7 h-7 rounded-full border-2 bg-[#B88E2F]"></p>
              </div>
            </div>
          </div>
          <ProductAction />

          <div>
            <p className="text-[#9F9F9F] mt-4">SKU : SS001</p>
            <p className="text-[#9F9F9F] mt-4">Category : Sofas</p>
            <p className="text-[#9F9F9F] mt-4">
              Tags : Sofa, Chair, Home, Shop
            </p>
            <p className="flex w-1/2 gap-4 mt-4">
              <span className="text-[#9F9F9F]">Share : </span>
              <Link href="">
                <FaFacebookF />
              </Link>
              <Link href="">
                <LuLinkedin />
              </Link>
              <Link href="">
                <LuTwitter />
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-4 md:gap-10 p-3 md:p-6">
        <h2 className="text-black text-lg md:text-2xl font-medium">
          Description
        </h2>
        <h2 className="text-[#9F9F9F] text-lg md:text-2xl font-medium">
          Addional Information
        </h2>
        <h2 className="text-[#9F9F9F] text-lg md:text-2xl font-medium">
          Reviews [5]
        </h2>
      </div>

      <div className="w-full px-2 md:p-0 md:px-60">
        <p className="text-[#9F9F9F] text-justify text-base">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <br />{" "}
        <p className="text-[#9F9F9F] text-justify text-base">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="flex flex-col md:flex-row p-4 items-center justify-around mt-4 gap-8 w-full">
        <Image
          src={"/images/desimg.png"}
          alt="Sofa Set 1"
          width={100}
          height={100}
          className="w-96"
        />

        <Image
          src={"/images/desimg2.png"}
          alt="Sofa Set 2"
          width={100}
          height={100}
          className="w-96"
        />
      </div>
      <h2 className="text-center font-medium text-4xl w-full pt-10">
        Related Products
      </h2>

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
      <div className="w-full flex justify-center items-center">
        <button
          className="w-40 p-2 rounded-lg text-center border border-[#B88E2F] bg-white text-[#B88E2F] 
hover:border-0 hover:bg-[#B88E2F] hover:text-white"
        >
          <Link href="shop">Shop More</Link>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default page;
