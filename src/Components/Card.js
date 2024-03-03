import React from "react";
import cardImage from "../Images/3.jpg";
function Card() {
  return (
    <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden">
        <img
          className="w-full h-60 object-cover object-center "
          src={cardImage}
          alt="Card"
        />
        <div className="">
          <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-600">Subheading</h3>
            <span className=" text-lg  text-gray-900 font-bold ">123</span>
            <span className="mx-3 text-lg text-gray-900 font-bold">
              123
            </span>{" "}
          </div>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Card;
