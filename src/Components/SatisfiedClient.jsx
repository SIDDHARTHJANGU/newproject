import React from "react";
import { Star } from "./Mysvg";
import whitetop from "../assets/img/satis-top.png";
import whitebottm from "../assets/img/satis-bottom.png";
import play from "../assets/img/playone.svg";
import playtwo from "../assets/img/playtwo.svg";

const SatisfiedClient = () => {
  return (
    <div className=" sec5_bg lg:pt-56 pt-16 md:pb-48 pb-20 relative px-4 lg:px-0 ">
      <div>
        <img
          className=" absolute lg:top-[-1%] top-0 left-0 w-[100%] "
          src={whitetop}
          alt="img"
        />
        <img
          className=" absolute bottom-[-1%] left-0 w-[100%] lg:h-[18%]   "
          src={whitebottm}
          alt="img"
        />
      </div>
      <div className=" container mx-auto pt-10 pb-12  ">
        <div className=" text-center pt-12" data-aos="fade-down">
          <h2 className=" font-bold text-[28px] md:text-[32px] font-[poppins]  text-white ">
            10,000 Satisfied clients{" "}
            <span className=" md:block"> around the world</span>
          </h2>
          <p className=" font-normal text-[14px]  md:text-[16px] font-[poppins] text-white leading-10 mt-12">
            Yeah! we’re proud with numbers. We’ve helped thousands of clients
            <span className=" md:block">
              all around the world with our bespoke service. Hover ontop of them
            </span>
            pic to view their testimonials.
          </p>
        </div>
        <div className=" flex flex-wrap lg:justify-between justify-center pt-5 px-2 lg:px-0">
          <div
            className=" max-w-[410px] h-[117px] w-full rounded-2xl bg-[#e1c0e8] py-5 px-5 relative "
            data-aos="flip-up"
          >
            <div>
              <img
                className=" absolute top-[35%] right-[-6%]"
                src={play}
                alt="img"
              />
            </div>
            <p className=" font-normal text-[16px] font-[poppins] text-[#333333]">
              Neya from Goa
            </p>
            <Star />
            <p className=" font-bold text-[14px] font-[poppins] text-[#333333]">
              Best service
            </p>
            <p className=" font-normal text-[14px] font-[poppins] text-[#333333]">
              {" "}
              Good material, Thank you.
            </p>
          </div>
          <div
            className="max-w-[410px]  w-full rounded-2xl bg-[#e1c0e8] py-5 px-5  mt-12 relative "
            data-aos="flip-up"
          >
            <div>
              <img
                className=" absolute top-[35%] left-[-6%]"
                src={playtwo}
                alt=""
              />
            </div>
            <p className=" font-normal text-[16px] font-[poppins] text-[#333333]">
              Ankit from MP
            </p>
            <Star />
            <p className=" font-bold text-[14px] font-[poppins] text-[#333333]">
              Wonderful service
            </p>
            <p className=" font-normal text-[14px] font-[poppins] text-[#333333]">
              {" "}
              Good deal wonderful service thank you.
            </p>
          </div>
        </div>
        <div className=" lg:mt-11 xl:ml-[18%] flex justify-center lg:justify-start">
          <div
            className="max-w-[410px] h-[117px] w-full rounded-2xl bg-[#e1c0e8] py-5 px-5 mt-12 lg:mt-0 relative"
            data-aos="flip-up"
          >
            <div>
              <img
                className=" absolute top-[35%] right-[-6%]"
                src={play}
                alt=""
              />
            </div>
            <p className=" font-normal text-[16px] font-[poppins] text-[#333333]">
              Pooja from UP
            </p>
            <Star />
            <p className=" font-bold text-[14px] font-[poppins] text-[#333333]">
              Best service
            </p>
            <p className=" font-normal text-[14px] font-[poppins] text-[#333333]">
              {" "}
              Good material, Thank you.
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap lg:justify-between justify-center">
          <div
            className="max-w-[410px] w-full rounded-2xl bg-[#e1c0e8] py-5 px-5 lg:mt-14 mt-12 relative"
            data-aos="flip-up"
          >
            <div>
              <img
                className=" absolute top-[35%] right-[-6%]"
                src={play}
                alt=""
              />
            </div>
            <p className=" font-normal text-[16px] font-[poppins] text-[#333333]">
              klyan from Gujarat
            </p>
            <Star />
            <p className=" font-bold text-[14px] font-[poppins] text-[#333333]">
              Best service
            </p>
            <p className=" font-normal text-[14px] font-[poppins] text-[#333333]">
              {" "}
              Good material, Thank you.
            </p>
          </div>
          <div
            className="max-w-[410px] h-[117px] w-full rounded-2xl bg-[#e1c0e8] py-5 px-5 mt-12 lg:mt-0 lg:mr-[10%] relative"
            data-aos="flip-up"
          >
            <div>
              <img
                className=" absolute top-[35%] left-[-6%]"
                src={playtwo}
                alt=""
              />
            </div>
            <p className=" font-normal text-[16px] font-[poppins] text-[#333333]">
              Sushant from Mumbai
            </p>
            <Star />
            <p className=" font-bold text-[14px] font-[poppins] text-[#333333]">
              Wonderful service
            </p>
            <p className=" font-normal text-[14px] font-[poppins] text-[#333333]">
              {" "}
              Good deal wonderful service thank you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClient;
