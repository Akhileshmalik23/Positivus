import React from "react";
import first from "../data/first_processed.jpg";
import second from "../data/second_processed.jpg";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import amazo from "../data/amazon_processed.jpg";
import dribbl from '../data/dril_processed.jpg';
import hubspo from '../data/hubspo_processed.jpg';
import netflx from '../data/netflix_processed.jpg';
import zoo from '../data/zoom_processed.jpg'

const Services = () => {
  const logos = [{
    name:'amazon',
    url:amazo
  },
  {
    name:'amazon',
    url:dribbl
  },
  {
    name:'dribbble',
    url:hubspo
  },
  {
    name:'neflix',
    url:netflx
  },
  {
    name:'zoom',
    url:zoo
  },
];

  return (
    <div className="bg-white ">
      {/* Logo Section */}
      <div className="flex flex-wrap justify-between items-center py-8">
  {logos.map((logo, index) => (
    <img
      key={index}
      src={logo.url}
      alt={logo.name}
      className="h-8 sm:h-10 md:h-12 lg:h-14 mx-2 mb-4"
    />
  ))}
</div>


      {/* Services Section */}
      <section className="px-8 py-12 text-center lg:text-left">
  <div className="mt-20 px-4">
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-10 text-lg">
      <div className="text-2xl lg:text-4xl bg-lime-300 font-extrabold px-3 py-2 rounded-md text-center lg:text-left">
        Services
      </div>
      <div className="text-base md:text-lg lg:text-xl text-center lg:text-left">
        At our digital marketing agency, we offer a range of services to <br className="hidden lg:block" />
        help businesses grow and succeed online. These services include:
      </div>
    </div>
  </div>

  {/* Service Cards */}
  <div className="flex flex-col lg:flex-row gap-8 mt-20">
    {/* First Service Card */}
    <div className="rounded-[45px] border-2 border-black mx-auto shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] p-12 bg-gray-100 flex flex-col lg:flex-row gap-6 lg:gap-x-12 items-center">
      <div className="flex flex-col justify-between text-center lg:text-left">
        <h3 className="text-xl font-bold mb-4">
          <span className="bg-lime-300 px-2 py-1 rounded text-3xl">
            Search engine
            <br />
            optimization
          </span>
        </h3>
        <div className="flex items-center mt-4 text-black justify-center lg:justify-start">
          <span className="text-3xl">
            <BsFillArrowUpRightCircleFill />{" "}
          </span>
          <span className="ml-4 text-xl">Learn more</span>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <img
          src={first} // Replace with actual path
          alt="Search engine optimization"
          className="w-52 h-44"
        />
      </div>
    </div>

    {/* Second Service Card */}
    <div className="rounded-[45px] border-2 border-black mx-auto shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] p-12 bg-lime-300 flex flex-col lg:flex-row gap-6 lg:gap-x-12 items-center">
      <div className="flex flex-col justify-between text-center lg:text-left">
        <h3 className="text-xl font-bold mb-4">
          <span className="bg-gray-100 px-2 py-1 text-3xl rounded">
            Pay-per-click <br /> advertising
          </span>
        </h3>
        <div className="flex items-center mt-4 text-black justify-center lg:justify-start">
          <span className="text-3xl">
            <BsFillArrowUpRightCircleFill />{" "}
          </span>
          <span className="ml-4 text-xl">Learn more</span>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <img
          src={second} // Replace with actual path
          alt="Pay-per-click advertising"
          className="w-52 h-44"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Services;
