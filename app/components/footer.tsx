import React from "react";
import Link from "next/link";
function footer() {
  return (
    <>
      <div className="w-full  md:h-[400px]">
        <div
          className="flex flex-col border-b-2
        md:flex-row flex-wrap"
        >
          <div
            className="w-full md:w-2/6
          flex flex-col md:text-left text-center h-80  p-6"
          >
            <h2
              className="font-bold leading-6 
            text-2xl mt-8 mb-14"
            >
              Funiro
            </h2>
            <p className="text-[#9F9F9F] text-base">
              400 University Drive Suite 200 Coral
              <br /> Gables, <br />
              FL 33134 USA
            </p>
          </div>

          <div
            className="w-full md:w-1/5 mt-[-70px] md:mt-0
           flex flex-col md:text-left text-center h-80  p-10"
          >
            <h3
              className="font-medium leading-7
            text-[#9F9F9F] text-base  md:mt-4 mb-8"
            >
              Links
            </h3>
            <Link href="/" className="mt-6">
              Home
            </Link>
            <Link href="shop" className="mt-6">
              Shop
            </Link>
            <Link href="comparision" className="mt-6">
              About
            </Link>
            <Link href="contact" className="mt-6">
              Contact
            </Link>
          </div>

          <div
            className="w-full md:w-1/5
           flex flex-col md:text-left text-center h-80  p-10"
          >
            <h3
              className="font-medium leading-7
            text-[#9F9F9F] text-base mt-4 mb-8"
            >
              Help
            </h3>
            <Link href="/" className="mt-6">
              Payment Options
            </Link>
            <Link href="shop" className="mt-6">
              Returns
            </Link>
            <Link href="contact" className="mt-6">
              Privacy Policy
            </Link>
            <Link href="contact" className="mt-12"></Link>
          </div>
          <div
            className="w-full md:w-1/5	
          flex flex-col md:text-left text-center h-80  p-10"
          >
            <h3
              className="font-medium leading-7
            text-[#9F9F9F] text-xl mt-2 mb-16"
            >
              Newsletter
            </h3>
            <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-2">
              <input
                type="email"
                name=""
                id=""
                className="border-b-2 border-b-black"
                placeholder="Enter Your Email"
              />
              <button className="border-b-2 border-b-black">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </>
  );
}

export default footer;
