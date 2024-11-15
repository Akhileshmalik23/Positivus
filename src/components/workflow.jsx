import React from "react";
import { SlPlus } from "react-icons/sl";
import { CiCircleMinus } from "react-icons/ci";
export default function Workflow() {
  return (
    <>
     <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-10 text-lg mt-20 px-4">
  {/* Title */}
  <div className="text-3xl lg:text-4xl bg-lime-300 font-extrabold px-3 py-2 rounded-md text-center lg:text-left">
    Our Working Process
  </div>

  {/* Description */}
  <div className="text-base md:text-lg lg:text-xl text-center lg:text-left">
    Step-by-step Guide to Achieving <br className="hidden lg:block" />
    Your Business Goals
  </div>
</div>


      <div className="bg-lime-300  px-2 py-1 mt-20  border-2 rounded-[45px] border-black mx-auto shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]  ">
        <div className="w-11/12 m-auto mt-6 h-[1px] bg-black"></div>
        <div className="w-11/12 m-auto mt-5 ">
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
        </div>

        <div className="rounded-3xl   mt-5">
        <div className="flex w-11/12 justify-between items-center  m-auto py-4">
          <div className="flex text-2xl items-center">
            <div className="text-5xl font-extrabold mr-5">01</div>
            <div>Consultation</div>
          </div>
          <div className="text-4xl"><CiCircleMinus /></div>
        </div>
      </div>
      </div>

      <div className=" border-2 rounded-[35px] border-black mx-auto shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]   mt-6">
        <div className="flex w-11/12 justify-between align-middle m-auto py-8 ">
          <div className="flex text-2xl items-center">
            <div className="text-5xl font-extrabold mr-5">02</div>
            <div>Research and Strategy Develpment</div>
          </div>
          <div className="text-4xl"><SlPlus /></div>
        </div>
      </div>
    </>
  );
}
