import React from "react";
import Slider from "react-slick";
import slideoneimg from "../assets/img/slideone.png";
import slidetwoimg from "../assets/img/imgtwo.png";
import slidethreeimg from "../assets/img/slidethree.png";
import intertop from "../assets/img/interiortop.png";
import interbotm from "../assets/img/exteriorbottom.png";

export const Interior = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" sec3_bg relative md:pt-48 pt-6 md:pb-48  pb-6">
      <div>
        <img
          className=" absolute lg:top-[-1%] top-0 left-0 w-[100%] "
          src={intertop}
          alt="img"
        />
        <img
          className=" absolute lg:bottom-[-1%] bottom-0 left-0 w-[100%] lg:h-[15%]   "
          src={interbotm}
          alt="img"
        />
      </div>
      <div className=" container mx-auto  ">
        <Slider {...settings} className=" flex items-center justify-center ">
          <div className="my_slider py-32">
            <div className=" card_one  my_trans">
              <div>
                <h2 className=" font-bold text-[28px] text-[#888888] font-[poppins] bcg_int my_text ml-4">
                  Exterior{" "}
                </h2>
                <img className="img_hgt mt-[19px]" src={slideoneimg} alt="" />
                <div className="my_bttn mt-[15px]">
                  <button className=" font-bold text-[16px] ff_poppins text-white btn_more">
                    MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my_slider  py-32">
            <div className=" card_one my_trans_1">
              <div>
                <h2 className=" font-bold text-[28px] text-[#888888] font-[poppins] bcg_int my_text ml-4">
                  Interior
                </h2>
                <img className="img_hgt mt-[19px]" src={slidetwoimg} alt="" />
                <div className=" my_bttn mt-[15px]">
                  <button className=" font-bold text-[16px] ff_poppins text-white btn_more">
                    MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my_slider  py-32">
            <div className=" card_one  my_trans_2">
              <div>
                <h2 className=" font-bold text-[28px] text-[#888888] font-[poppins] bcg_int my_text ml-4">
                  your color
                </h2>
                <img className="img_hgt mt-[19px]" src={slidethreeimg} alt="" />
                <div className=" my_bttn mt-[15px]">
                  <button className=" font-bold text-[16px] ff_poppins text-white btn_more">
                    MORE
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="my_slider  py-32">
            <div className=" card_one  my_trans_3">
              <div>
                <h2 className=" font-bold text-[28px] text-[#888888] font-[poppins] bcg_int my_text ml-4">
                  Exterior{" "}
                </h2>
                <img className="img_hgt mt-[19px]" src={slideoneimg} alt="" />
                <div className=" my_bttn mt-[15px]">
                  <button className=" font-bold text-[16px] ff_poppins text-white btn_more">
                    MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my_slider  py-32">
            <div className=" card_one my_trans">
              <div>
                <h2 className=" font-bold text-[28px] font-[poppins] text-[#888888] bcg_int my_text ml-4">
                  Interior
                </h2>
                <img className="img_hgt mt-[19px]" src={slidetwoimg} alt="" />
                <div className=" my_bttn mt-[15px]">
                  <button className=" font-bold text-[16px] ff_poppins text-white btn_more">
                    MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my_slider  py-32">
            <div className=" card_one my_trans_2">
              <div>
                <h2 className=" font-bold text-[28px] font-[poppins] text-[#888888] bcg_int  my_text ml-4">
                  your color
                </h2>
                <img className="img_hgt mt-[19px]" src={slidethreeimg} alt="" />
                <div className=" my_bttn mt-[15px]">
                  <button className=" font-bold text-[16px] ff_poppins text-white btn_more">
                    MORE
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
