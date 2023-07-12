import React from "react";
import Rating from "./Rating";


function TestimonialCard(props) {
  const { name, role, image, content } = props;

  return (
 
    <div className=" md:max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
      <Rating />
    
      <div className="flex flex-row items-center justify-between mr-9  px-4 py-16 sm:px-6 sm:py-24 lg:px-8 mb-4">
        <img src={image} alt={name} className="w-50 h-10 rounded-full mr-3" />
        <div className=" space-x-3">
          <h4 className="text-lg font-bold ">{name}</h4>
          <p className="text-gray-600 italic">{role}</p>
        </div>
      </div>
      <p className="text-gray-800">{content}</p>
      <div className="">
     
      </div>
    </div>
   
  );
}

export default TestimonialCard;
