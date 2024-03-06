import React from "react";
import CropList from "../Components/CropList";
import Navbar from "../Components/Navbar";
import backgroundImage from "../Images/1.jpg";

function Home() {
  return (
<>

 <div
        className="h-[480px] bg-cover bg-center inset-0  font-serif "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />

        <div className="mx-5 my-12  text-center font-semibold">
          <h1 className="text-5xl ">Welcome to Smart Terra </h1>
          <h2 className="text-3xl my-5">Revolutioning Agriculture</h2>
        </div>
      </div>
    <div>
      <div className=" my-5 ">
        <h1 className=" text-center font-serif text-2xl" >Required Conditions</h1>
        <div className="flex flex-wrap justify-center">
          <CropList/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
