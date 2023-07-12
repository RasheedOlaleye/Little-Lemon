import React from "react";

function Details(props) {
  const { image, name, price, description, label, tags } = props;

  return (
    <div class="max-w-sm  rounded overflow-hidden shadow-lg px-4 py-4 ">
      <div className="image">
        <img src={image} alt={name} className="w-full h-auto rounded-md" />
      </div>
      <div class="px-6 py-4">
        <div className=" font-bold text-xl header flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">{name}</h2>
          <span className="text-gray-700 text-base">{price}</span>
        </div>
        <p className="text-gray-700">{description}</p>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center mt-2">
          <span className="text-blue-500">{label}</span>
          <i className={`icon-class`} />
        </div>


      </div>
      <div className="tags">
        {tags && tags.length > 0 ? (
          tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))
        ) : (
          <span className="tag">No tags available</span>
        )}
      </div>
    </div>
  );
}

export default Details;
