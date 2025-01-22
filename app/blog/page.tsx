import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
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
    bg-auto h-[300px] w-full flex flex-col items-center justify-center"
      >
        <Image src={"/images/Logos-01.png"} alt="logo" width={80} height={50} />
        <h2 className="font-medium text-5xl mt-[-20px]">Blog</h2>
        <h5 className="flex">
          <span className="flex items-center font-medium">
            Home <IoIosArrowForward />
          </span>
          Blog
        </h5>
      </div>

<div className='w-full flex flex-col md:flex-row justify-around'>
      <div className='w-full md:w-3/5'>
      <div>
        <Image src={"/images/blog1.png"} alt='Blog' width={100} height={100} className='w-full px-20 pt-20'/>
        <h2 className='font-medium text-3xl px-20 pt-0'>Going all-in with millennial design</h2>
        <p className='font-medium text-[15px] text-[#9F9F9F] text-justify px-20 pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
      <button className='border-b-2 mx-20 pt-6 border-black'>
        <Link href="/">Read More</Link>
      </button>
      </div>

      <div>
        <Image src={"/images/blog2.png"} alt='Blog' width={100} height={100} className='w-full px-20 pt-20'/>
        <h2 className='font-medium text-3xl px-20 pt-0'>Exploring new ways of decorating</h2>
        <p className='font-medium text-[15px] text-[#9F9F9F] text-justify px-20 pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
      <button className='border-b-2 mx-20 pt-6 border-black'>
        <Link href="/">Read More</Link>
      </button>
      </div>

      <div>
        <Image src={"/images/blog3.png"} alt='Blog' width={100} height={100} className='w-full px-20 pt-20'/>
        <h2 className='font-medium text-3xl px-20 pt-0'>Handmade pieces that took time to make</h2>
        <p className='font-medium text-[15px] text-[#9F9F9F] text-justify px-20 pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
      <button className='border-b-2 mx-20 pt-6 border-black'>
        <Link href="/">Read More</Link>
      </button>
      </div>
      </div>

      <div className='w-full text-center md:text-left md:w-2/5 mt-20'>
      <input type="search" className='w-80 p-4 border border-black' placeholder='Search your Blog'/>

      <h2 className="text-2xl font-medium mt-6">Categories</h2>
          <h3 className="text-[#9F9F9F] mt-6">Sales Package</h3>
          <h3 className="text-[#9F9F9F] mt-6">Model Number</h3>
          <h3 className="text-[#9F9F9F] mt-6">Secondary Material</h3>
          <h3 className="text-[#9F9F9F] mt-6">Configuration</h3>
          <h3 className="text-[#9F9F9F] mt-6">Upholstery Material</h3>
          <h3 className="text-[#9F9F9F] mt-6">Upholstery Color</h3>


          <h2 className="text-2xl font-medium mt-6">Recent Posts</h2>

      </div>
      </div>


      <Quality />
      <Footer />
    </>
  )
}

export default page
