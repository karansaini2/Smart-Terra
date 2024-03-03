import React from "react";
import Card from "../Components/Card";

function Home() {
  return (
    <div>
      <div className=" my-5 ">
        <h1 className=" text-center font-serif text-2xl" >Crops Data</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <Card />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
