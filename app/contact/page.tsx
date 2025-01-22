import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { MdPhone } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
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
        <h2 className="font-medium text-5xl mt-[-20px]">Contact</h2>
        <h5 className="flex">
          {" "}
          <span className="flex items-center font-medium">
            Home <IoIosArrowForward />{" "}
          </span>{" "}
          Contact
        </h5>
      </div>

      <div className="w-full flex justify-center items-center flex-col p-2 md:p-20">
        <h2 className="text-justify text-4xl font-semibold">
          Get In Touch With Us
        </h2>
        <p className="text-center px-2 md:p-0 md:px-[275px] text-base">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center">
            <h2 className="flex font-medium text-2xl md:gap-4">
              <ImLocation />
              <span>Address</span>
            </h2>
            <p className="w-56 md:w-80 px-0 md:px-16 ml-0 md:ml-24">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>

          <div className="flex mt-10 flex-col justify-center items-center">
            <h2 className="flex font-medium text-2xl gap-4">
              <MdPhone />
              <span>Phone</span>
            </h2>
            <p className=" ml-0 md:ml-24">Mobile: +(84) 546-6789</p>
            <p className=" ml-0 md:ml-24">Hotline: +(84) 456-6789</p>
          </div>

          <div className="flex mt-10 flex-col justify-center items-center">
            <h2 className="flex font-medium text-2xl gap-4 ml-8 md:ml-16">
              <BsFillClockFill />
              <span>Working Hours</span>
            </h2>
            <p className="w-56 md:w-80 px-0 md:px-16 ml-0 md:ml-24">
              Monday-Friday: 9:00 - 22:00
            </p>
            <p className="w-56 md:w-80 px-0 md:px-16 ml-0 md:ml-24">
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mt-6 md:mt-0 gap-4">
          <label htmlFor="Your Name">Your Name</label>
          <input
            type="text"
            placeholder="Abc"
            className="w-9/12 border p-4 rounded-lg"
          />

          <label htmlFor="Email address">Email address</label>
          <input
            type="text"
            placeholder="Abc@gmail.com"
            className="w-9/12 border p-4 rounded-lg"
          />

          <label htmlFor="Subject">Subject</label>
          <input
            type="text"
            placeholder="This is an optional"
            className="w-9/12 border p-4 rounded-lg"
          />

          <label htmlFor="Message">Message</label>
          <textarea
            name=""
            cols={3}
            rows={5}
            id=""
            placeholder="Hi! i’d like to ask about"
            className="w-9/12 border p-4 rounded-lg"
          ></textarea>
          <button className="w-[150px] mt-6  mr-4 mb-10 md:w-[180px] rounded-lg h-14 text-white bg-[#B88E2F] border hover:border-[#B88E2F] hover:bg-transparent hover:text-[#B88E2F]">
            <Link href="/" className="font-medium justify-center text-base leading-6">
              Submit
            </Link>
          </button>
        </div>
      </div>

      <Quality />

      <Footer />
    </>
  );
};

export default page;
