import React from "react";
// import Card from "../Components/Card";
import CropList from "../Components/CropList";

function Home() {
  return (
    <div>
      <div className=" my-5 ">
        <h1 className=" text-center font-serif text-2xl" >Required Conditions</h1>
        <div className="flex flex-wrap justify-center">
          <CropList/>
        </div>
      </div>
    </div>
  );
}

export default Home;
