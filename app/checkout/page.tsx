import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import Header from "@/app/components/header";
import Quality from "@/app/components/quality"
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
        <h2 className="font-medium text-5xl mt-[-20px]">Checkout</h2>
        <h5 className="flex">
          <span className="flex items-center font-medium">
            Home <IoIosArrowForward />
          </span>
          Checkout
        </h5>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex p-20 flex-col justify-center items-center md:items-start mt-6 md:mt-0 gap-4">
        <h2 className='font-semibold text-[36px]'>Biling Details</h2>
          <div className='flex gap-4'>
            <div className='gap-4'>
            <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            placeholder="Abc"
            className="w-7/12 border p-4 rounded-lg"
          />
          </div>

          <div className='gap-4'>
          <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            placeholder="Abc"
            className="w-7/12 border p-4 rounded-lg"
          />
          </div>
          </div>

          <label htmlFor="Company Name (Optional)">Company Name (Optional)</label>
          <input
            type="text"
            className="w-9/12 border p-4 rounded-lg"
          />

          <label htmlFor="Country / Region">Country / Region</label>
          <input
            type="text"
            placeholder="Pakistan"
            className="w-9/12 border p-4 rounded-lg"
          />

<label htmlFor="Street address">Street address</label>
          <input
            type="text"
            className="w-9/12 border p-4 rounded-lg"
          />

<label htmlFor="Town / City">Town / City</label>
          <input
            type="text"
            className="w-9/12 border p-4 rounded-lg"
          />

<label htmlFor="Province">Province</label>
          <input
            type="text"
            className="w-9/12 border p-4 rounded-lg"
          />

<label htmlFor="ZIP code">ZIP code</label>
          <input
            type="text"
            className="w-9/12 border p-4 rounded-lg"
          />


<label htmlFor="Phone">Phone</label>
          <input
            type="text"
            className="w-9/12 border p-4 rounded-lg"
          />

<label htmlFor="Email address">Email address</label>
          <input
            type="email"
            className="w-9/12 border p-4 rounded-lg"
          />

<input
            type="email"
            placeholder='Additional Information'
            className="w-9/12 border p-4 rounded-lg"
          />
          <button className="w-[150px] mt-6  mb-10 md:w-[180px] rounded-lg h-14 text-white bg-[#B88E2F] border hover:border-[#B88E2F] hover:bg-transparent hover:text-[#B88E2F]">
            <Link href="/" className="font-medium text-base leading-6">
              Submit
            </Link>
          </button>
        </div>

        <div className="w-full md:w-1/2">
        <div className="w-full h-60 flex flex-col mt-28 px-2 md:px-10 border-b-2 rounded-lg md:justify-end">
        <div className="flex justify-between mt-4">
            <p className='font-medium text-2xl'>Product</p>
            <p className="mb-4 font-medium text-2xl">Subtotal</p>
          </div>

          <div className="flex justify-between mt-4">
            <p className='text-[#9F9F9F]'>Asgaard sofa   x 1</p>
            <p className="mb-4">Rs. 250,000.00</p>
          </div>

          <div className="flex justify-between mt-4">
            <p>Subtotal:</p>
            <p className="mb-4">Rs. 250,000.00</p>
          </div>

          <div className="flex justify-between mt-4">
            <p>Total:</p>
            <p className="mb-4 text-[#B88E2F] font-bold text-2xl">Rs. 250,000.00</p>
          </div>
        </div>

        <div className='w-full gap-4 flex items-center'>
        <FaCircle />
<h2>Direct Bank Transfer</h2>
        </div>
        <p className='text-[#9F9F9F] font-light text-base pr-20'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        
        <div className='w-full gap-4 my-4 flex items-center text-[#9F9F9F]'>
        <FaRegCircle  />
<h2>Direct Bank Transfer</h2>
        </div>
        
        <div className='w-full gap-4 my-4 flex items-center text-[#9F9F9F]'>
        <FaRegCircle  />
<h2>Cash On Delivery</h2>
        </div>
<p className=' font-light text-base pr-20'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
        

<div className="w-full flex justify-center">
            <button className="w-[150px] mt-6 md:w-[180px] rounded-lg h-14 text-black bg-transparent border border-black hover:border-0 hover:bg-[#B88E2F] hover:text-white">
              <Link href="" className="font-medium text-base leading-6">
                Place Order
              </Link>
            </button>
          </div>
        </div>
      </div>


      <Quality />
      <Footer />
    </>
  )
}

export default page
