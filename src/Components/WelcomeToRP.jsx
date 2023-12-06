import React from "react";
import sectwoimg from "../assets/img/swec2img.png";

const WelcomeToRP = () => {
  return (
    <div className=" mt-12 pb-12 px-3 lg:px-0">
      <div className=" container max-w-[1180px] mx-auto ">
        <div className=" flex flex-wrap lg:justify-between  items-center">
          <div
            className=" lg:w-[40%] w-[100%] flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <img
              className=" xl:w-[100%] w-[100%] md:w-[70%]"
              src={sectwoimg}
              alt="img"
            />
          </div>
          <div
            className=" lg:w-[55%] w-[100%] mt-12 lg:mt-0 "
            data-aos="fade-left"
          >
            <h2 className=" font-bold text-[32px] font-[poppins] text_grident  ">
              Welcome to RP
            </h2>
            <p className=" font-normal text-[16px] font-[poppins] text-black leading-10 mt-7">
              A family-run business, with our own factory nestled in India, we
              are producing a{" "}
              <span className=" xl:block">
                complete range of traditional and modern paints. We formulate
                high
              </span>
              <span className=" xl:block">
                performance paint, blended with the best ingredients. Our
                company includes
              </span>
              <span className=" xl:block">
                {" "}
                interior and exterior paints, oil-based paints, floor paints and
                a special range of
              </span>
              <span className=" xl:block"> antimicrobial paints.</span>
              <span className=" xl:block">
                With a color palette you can easily mix the colors together to
                expand the range.{" "}
              </span>
              <span className=" xl:block">
                The numbers of creating different textures, finishes and shades
                are unlimited.{" "}
              </span>
            </p>
            <button className=" MORE_btn text-white font-bold text-[16px] font-[poppins] mt-7 ">
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToRP;
