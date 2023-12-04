import React, { useState, useEffect } from "react";
import logo from "../assets/img/Royal_Paints.png";
import herooneimg from "../assets/img/heroimg1.png";
import herotwoimg from "../assets/img/heroimg2.png";
import herobotm from "../assets/img/hero_botm.png";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Myheader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <div className=" hero_bg  lg:min-h-screen min-h-[90vh]  flex flex-col ">
      <nav>
        <div className=" container mx-auto">
          <div className=" flex justify-between items-center py-6 px-3 ">
            <div>
              <img className=" w-[50%] cursor-pointer" src={logo} alt="img" />
            </div>
            <ul
              className={`${
                show ? "end-0" : "right-[-100%]"
              }  flex gap-12 flex-col z-[4] min-h-screen fixed lg:min-h-fit lg:static w-full lg:w-auto items-center justify-center
              top-0 bg-[#b430c6] lg:bg-[unset] lg:flex-row right-0 ps-0 duration-[350ms] transition-all ease-linear`}
            >
              <li>
                <a
                  href="#Home"
                  onClick={Movement}
                  className=" font-bold text-[21px] font-[Poppins] text-white relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-5px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  {" "}
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#About "
                  onClick={Movement}
                  className=" font-bold text-[21px] font-[Poppins] text-white relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-5px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  {" "}
                  About Us
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#Gallery"
                  onClick={Movement}
                  className=" font-bold text-[21px] font-[Poppins] text-white relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-5px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  {" "}
                  Gallery
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#Contact"
                  onClick={Movement}
                  className=" font-bold text-[21px] font-[Poppins] text-white relative after:absolute after:bg-[#cc33d9] after:w-0 after:h-[3px] after:bottom-[-5px] after:right-[50%] hover:after:right-[30%] after:rounded-full  after:duration-300 inline hover:after:w-[50%]"
                >
                  {" "}
                  Contact Us
                </a>
              </li>
            </ul>
            <div
              className=" position-relative  z-30 lg:hidden "
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? <img src={close} alt="#" /> : <img src={menu} alt="#" />}
            </div>
          </div>
        </div>
      </nav>
      <div id="Home" className=" flex-grow flex relative">
        <div className=" container mx-auto  flex items-center flex-col lg:mt-40 mt-8  ">
          <div
            className=" text-center lg:text-start px-3 lg:px-0"
            data-aos="fade-down"
          >
            <h1 className=" font-semibold md:text-[48px] text-[30px] text-white font-[poppins] lg:leading-[64px] ">
              We Make Your Home{" "}
              <span className=" md:block"> More Beautiful</span>
            </h1>
            <p className=" font-normal text-[17px] md:text-[21px] text-white font-[poppins] mt-4  leading-10 ">
              From choosing the right paint to getting{" "}
              <span className=" md:block">
                {" "}
                an expert touch - leave it on us.
              </span>
            </p>
          </div>
        </div>
        <div>
          <img
            className=" absolute bottom-[16%] md:w-[24%] w-[35%]  left-0 "
            data-aos="fade-right"
            src={herooneimg}
            alt="img"
          />
        </div>
        <div>
          <img
            className=" absolute bottom-[8%] md:w-[28%] w-[40%] right-0 "
            data-aos="fade-left"
            src={herotwoimg}
            alt="img"
          />
        </div>
        <img
          className=" absolute left-0 lg:bottom-[-2%] bottom-0 w-[100%]"
          src={herobotm}
          alt=""
        />
      </div>
    </div>
  );
};

export default Myheader;
