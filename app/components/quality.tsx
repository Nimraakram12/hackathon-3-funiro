import React from 'react'
import Image from "next/image";
const quality = () => {
  return (
    <>
      <div className="w-full mt-10 md:mt-0 text-center p-2 md:p-0 flex flex-col md:flex-row justify-between  bg-[#FAF3EA]">
        <div className="w-full md:w-1/4 h-[132px] flex items-center">
          <Image
            src={"/images/trophy.png"}
            alt="trophy"
            width={60}
            height={60}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[25px] font-semibold">
            High Quality
            </h5>
            <p className="text-[20px] font-medium leading-[27px]">crafted from top materials</p>
          </div>
        </div>

        <div className="w-full md:w-1/4 h-[132px] flex items-center">
          <Image
            src={"/images/check.png"}
            alt="check"
            width={60}
            height={60}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[25px] font-semibold leading-[30px]">
            Warranty Protection
            </h5>
            <p className="text-[20px] font-medium leading-[27px]">Over 2 years</p>
          </div>
        </div>

        <div className="w-full md:w-1/4 h-[132px] flex items-center">
          <Image
            src={"/images/shipping.png"}
            alt="shipping"
            width={60}
            height={60}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[25px] font-semibold leading-[30px]">
            Free Shipping
            </h5>
            <p className="text-[20px] font-medium leading-[27px]">Order over 150 $</p>
          </div>
        </div>

        <div className="w-full md:w-1/4 h-[132px] flex items-center">
          <Image
            src={"/images/customer-support.png"}
            alt="customer-support"
            width={60}
            height={60}
            className="p-2"
          />
          <div className="flex items-center justify-center w-3/4 flex-col">
            <h5 className="text-[25px] font-semibold leading-[30px]">
            24 / 7 Support
            </h5>
            <p className="text-[20px] font-medium leading-[27px]">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default quality
