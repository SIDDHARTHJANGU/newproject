import React from "react";

const Newsletter = () => {
  return (
    <div className=" lg:pt-48 pt-16  lg:pb-20 pb-10 px-3 lg:px-0">
      <div className=" container mx-auto">
        <div className=" text-center " data-aos="fade-down">
          <h2 className=" font-bold text-[28px] font-[poppins] office">
            Subscribe our newsletter
          </h2>
          <p className=" text-[16px] font-normal font-[poppins] text-black leading-10 mt-9">
            Subscribe to our newsletter for daily/weekly{" "}
            <span className=" block">update of our products and services.</span>
          </p>
        </div>
        <div className=" flex  justify-center mt-9 " data-aos="fade-up">
          <div class="mt-6 flex flex-wrap w-[530px] gap-x-4 justify-center lg:justify-start items-center">
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="min-w-0 flex-auto myemail bg-white/5 px-3.5 py-4 outline-none text-black sm:text-sm sm:leading-6"
              placeholder="Email"
            />
            <div className="">
              <button
                type="submit"
                class="flex-none  text-sm font-semibold text-white shadow-sm bttn_subs mt-5 sm:mt-0"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
