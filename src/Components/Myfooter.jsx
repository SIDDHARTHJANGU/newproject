import React from "react";
import { Facebook, Google, Instagram, Twtter } from "./Mysvg";

const Myfooter = () => {
  return (
    <div id="About" className=" footer_bg pt-24 pb-24 px-3 lg:px-0">
      <div className=" container mx-auto">
        <div className=" flex flex-wrap  items-center ">
          <div className=" md:w-[40%] w-full">
            <h2 className=" font-bold text-[16px] text-white font-[poppins]">
              RP
            </h2>
            <p className=" font-normal text-[14px] font-[poppins] text-white mt-2">
              Painting with RP means never painting your house{" "}
              <span className=" lg:block">
                {" "}
                again! Our special paint coating comes with a 20
              </span>{" "}
              years warranty.
            </p>
            <div className=" flex gap-5 mt-5">
              <a href="https://www.google.com/">
                {" "}
                <Google />
              </a>
              <a href="https://www.facebook.com/">
                {" "}
                <Facebook />
              </a>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                {" "}
                <Twtter />
              </a>
              <a href="https://www.instagram.com/?hl=en">
                {" "}
                <Instagram />
              </a>
            </div>
          </div>
          <div className=" md:w-[20%] w-full mt-8 md:mt-0">
            <ul>
              <li className=" font-normal text-[18px] font-[poppins] text-white">
                Links
              </li>
              <li className=" mt-6">
                <a
                  href="Home"
                  className=" font-normal text-[12px] font-[poppins] text-[#cacaca]  relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%] "
                >
                  Home
                </a>
              </li>
              <li className=" mt-2">
                <a
                  href="About"
                  className=" font-normal text-[12px] font-[poppins] text-[#cacaca]  relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  {" "}
                  About Us{" "}
                </a>
              </li>
              <li className=" mt-2">
                <a
                  href="Gallery"
                  className=" font-normal text-[12px] font-[poppins] text-[#cacaca]  relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  Gallery{" "}
                </a>
              </li>
              <li className=" mt-2">
                <a
                  href="Contact"
                  className=" font-normal text-[12px] font-[poppins] text-[#cacaca]  relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className=" md:w-[20%] w-full mt-8 md:mt-0">
            <ul>
              <li className=" font-normal text-[18px] font-[poppins] text-white">
                Contact Us{" "}
              </li>
              <li className=" mt-6">
                <a
                  href="home"
                  className=" font-normal text-[12px] font-[poppins] text-[#cacaca]  relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  +91 1234567890{" "}
                </a>
              </li>
              <li className=" mt-2">
                <a
                  href="XYZ"
                  className=" font-normal text-[12px] font-[poppins] text-[#cacaca]  relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  XYZ@gmail.com
                </a>
              </li>
              <li className=" mt-2">
                <a
                  href="Address"
                  className=" font-normal text-[12px] font-[poppins] text-[#cacaca]  relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-3px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  {" "}
                  Address{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myfooter;
