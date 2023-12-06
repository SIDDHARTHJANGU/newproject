import React from "react";

export const Preloader = () => {
  // const Preload = document.getElementById("preload");
  setTimeout(() => {
    document.body.classList.remove("overflow-hidden");
    document.getElementById("preload").classList.add("hidden");
    // Preload.classList.add("d-none");
  }, "5000");
  return (
    <div
      id="preload"
      className=" min-h-screen  w-full  flex  items-center  justify-center bg_gradient z-50 fixed  left-0  top-0 overflow-hidden"
    >
      <div className="wrapper">
        <svg className="load">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Royal Paint
          </text>
        </svg>
      </div>
    </div>
  );
};
