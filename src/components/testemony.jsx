import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const testimonials = [
  {
    text: "Positivus has transformed our social media strategy, and the results have been nothing short of amazing. Their innovative campaigns have increased our follower count and boosted engagement tenfold. Their team is knowledgeable, creative, and a joy to work with.",
    name: "Sophia Williams",
    position: "Social Media Manager at Creative Studio Co.",
  },
  {
    text: "Working with Positivus has been a game-changer for our startup. Their targeted strategies helped us reach our audience more effectively, and we saw a 50% increase in conversions within just three months. Their dedication and expertise are unparalleled.",
    name: "Liam Johnson",
    position: "CEO at TechSprout Inc.",
  },
  {
    text: "The Positivus team exceeded our expectations. Their ability to understand our brand and create a tailored digital strategy made all the difference. Thanks to their efforts, we now dominate search rankings for our key terms.",
    name: "Emily Brown",
    position: "E-commerce Manager at GreenLeaf Organics",
  },
  {
    text: "We were skeptical about outsourcing our marketing, but Positivus changed our minds. Their in-depth analytics and data-driven approach gave us insights we've never had before. It's been a pleasure working with such a professional team.",
    name: "David Carter",
    position: "Head of Operations at FinancePlus",
  },
  {
    text: "Our collaboration with Positivus resulted in an award-winning campaign that drove record-breaking sales during the holiday season. They are true experts in the field and consistently go above and beyond to deliver exceptional results.",
    name: "Olivia Martinez",
    position: "Brand Manager at Luxe Fashion Co.",
  },
  {
    text: "Positivus helped us rebrand and establish a strong online presence. Their creativity and strategic approach brought our vision to life, and we've seen tremendous growth in brand awareness since partnering with them.",
    name: "Michael Davis",
    position: "Founder at Davis Craft Brewing",
  },
];


const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-28   ">

<div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-10 text-lg mt-20 px-4">
  {/* Title */}
  <div className="text-3xl lg:text-4xl bg-lime-300 font-extrabold px-3 py-2 rounded-md text-center lg:text-left">
    Testimonials
  </div>

  {/* Description */}
  <div className="text-base md:text-lg lg:text-xl text-center lg:text-left">
    Hear from Our Satisfied Clients: Read Our Testimonials <br className="hidden lg:block" />
    to Learn More about Our Digital Marketing Services
  </div>
</div>


    <div className="relative  w-full p-6 mt-20 mx-auto bg-gray-800 rounded-3xl shadow-md text-center">
        <p className="text-md md:text-lg p-6 text-gray-200 rounded-3xl border-green-600 border italic mb-4">"{testimonials[currentIndex].text}"</p>
        <p className="text-lime-300 text-3xl font-semibold">{testimonials[currentIndex].name}</p>
        <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>

        <div className="flex justify-center items-center mt-4 space-x-2">
        <button onClick={handlePrevious} className="text-lime-300 mx-2 text-4xl"><IoArrowBackCircleOutline /></button>
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-lime-300' : 'bg-gray-500'}`}
            ></div>
          ))}
           <button onClick={handleNext} className="text-lime-300 mx-2 text-4xl"><IoArrowForwardCircleOutline /></button>
        </div>
      </div>
  </div>
  );
};

export default Testimonial;
