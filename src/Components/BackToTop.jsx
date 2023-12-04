import React, { useState, useEffect } from "react";
import FiArrowUp from "../assets/img/backto_top.svg";
import "../App.css";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div className="back_to_top ">
          <img
            className=" fixed animate-pulse w-[50px] h-[50px] bottom-[30px] right-[30px] items-center justify-center z-40 cursor-pointer bg-[#cc33d9] hover:bg-black rounded-[50%] decoration-purple-600"
            onClick={scrollTop}
            style={{ height: 50, display: showScroll ? "flex" : "none" }}
            src={FiArrowUp}
            alt="img"
          />
        </div>
      </section>
    </>
  );
};
export default BackToTop;
