import React from "react";
import Button from "./Button";
import main from "../../Assets/main.png";

function Hero() {
  return (
    <main>
      <section
        id="about"
        aria-label="About Section"
        className="w-1280 h-100 flex  justify-between items-start flex-shrink-0 bg-[#495e57]"
      >
     <div className=" flex flex-row   md:max-w-7xl mx-auto  justify-between relative items-center ">
        <div className="flex flex-col mb-10 py-10  justify-center items-start space-y-6 w-1/2">
          <h2
            className="text-5xl font-semibold mb-2 ml-20"
            style={{
              color: "#F4CE14",
              fontFamily: "Markazi Text",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
             
            }}
          >
            Little Lemon
          </h2>
          <h4
            className="mb-2 ml-20"
            style={{
              color: "#FFF",
              fontFamily: "Markazi Text",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            Chicago
          </h4>
          <p
            className="text-white ml-20 font-medium"
            style={{
              color: "#FFF",
              fontFamily: "Markazi Text",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
          </p>
          <Button  title ="Reserve a table"/>
        </div>
        <div className="  p-4  mt-20">
          <img
            src={main}
            style={{
              width: "400px",
              height: "400px",
              flexShrink: 0,
              borderRadius: "20px",
              background: `url(${main}) lightgray 50% / cover no-repeat`,
            }}
            className=""
            alt="make"
          />
        </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
