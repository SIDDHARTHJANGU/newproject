import React from "react";
import secsevncard from "../assets/img/graybedrom.png";
import yello from "../assets/img/charming-yellow.png";
import creat_botm from "../assets/img/creat-bottom.png";
import mask from "../assets/img/Mask.png";

const Creating = () => {
  return (
    <div className="creating lg:pt-52  pt-32 pb-14 relative px-3 lg:px-0">
      <div>
        <img
          className=" absolute  hidden md:block bottom-[2%] right-[2%]"
          src={mask}
          alt="img"
        />
        <img
          className=" absolute lg:top-[-1%] top-0 left-0 w-[100%]"
          src={creat_botm}
          alt="img"
        />
      </div>
      <div className=" container mx-auto">
        <div className=" flex flex-wrap justify-between  items-center">
          <div
            className=" w-full lg:w-[32%]  flex justify-center xl:justify-start"
            data-aos="fade-down-right"
          >
            <img
              className=" w-[100%] md:w-[70%] xl:w-[100%]"
              src={secsevncard}
              alt="img"
            />
          </div>
          <div className=" lg:w-[35%] w-full " data-aos="fade-down">
            <div className=" text-start flex justify-center xl:justify-start">
              <p className=" font-bold lg:text-[42px] text-[37px] font-[poppins] text-white leading-10 mt-9 lg:mt-0">
                Creating a Warm,
              </p>
            </div>
            <div className=" text-end flex justify-center xl:justify-end">
              <p className=" font-bold lg:text-[42px] text-[37px] font-[poppins] text-white ">
                Welcoming Home
              </p>
            </div>
          </div>
          <div
            className=" w-full lg:w-[32%] flex justify-center xl:justify-start"
            data-aos="fade-down-left"
          >
            <img
              className=" xl:translate-y-[-25%] mt-9 lg:mt-0  w-[100%] md:w-[70%] xl:w-[100%]"
              src={yello}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creating;
