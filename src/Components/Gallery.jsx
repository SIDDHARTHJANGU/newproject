import React from "react";
import office from "../assets/img/office.png";
import living from "../assets/img/living.png";
import bath from "../assets/img/bath.png";
import kitchen from "../assets/img/kitchen.png";
import bedroom from "../assets/img/bedroom.png";

const Gallery = () => {
  return (
    <div id="Gallery" className=" pb-6 pt-3 px-3 lg:px-0">
      <div className=" container mx-auto">
        <div data-aos="fade-down">
          <h2 className=" text-[32px] font-bold font-[poppins] text-black text-center gallery_grident">
            Gallery
          </h2>
        </div>
        <div className=" flex flex-wrap items-center justify-center lg:gap-32 gap-12 lg:pt-20 pt-10">
          <div>
            <div data-aos="fade-down-right">
              <img
                className=" w-[100%] cursor-pointer "
                data-aos="fade-down-right "
                src={living}
                alt="img"
              />
              <p className=" text-[28px] font-medium font-[poppins] office mt-2">
                Living Room
              </p>
            </div>
            <div className=" lg:mt-28 mt-12" data-aos="fade-down-right">
              <img
                className=" w-[100%] cursor-pointer"
                data-aos="fade-down-left"
                src={kitchen}
                alt="img"
              />
              <p className=" text-[28px] font-medium font-[poppins] office mt-2">
                Kitchen
              </p>
            </div>
          </div>
          <div>
            <div data-aos="fade-down-left">
              <img
                className=" w-[100%] cursor-pointer"
                src={office}
                alt="img"
              />
              <p className=" text-[28px] font-medium office font-[poppins] mt-2 ">
                Office
              </p>
            </div>
            <div className=" lg:mt-28 mt-12" data-aos="fade-down-left">
              <img className=" w-[100%] cursor-pointer" src={bath} alt="img" />
              <p className=" text-[28px] font-medium  font-[poppins] office mt-2">
                Bath
              </p>
            </div>
            <div className=" lg:mt-28 mt-12" data-aos="fade-down-left">
              <img
                className=" w-[100%] cursor-pointer"
                src={bedroom}
                alt="img"
              />
              <p className=" text-[28px] font-medium office font-[poppins] mt-2">
                Bed Room
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
