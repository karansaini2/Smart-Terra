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
        <div className="mx-5 my-16 text-center font-semibold">
  <h1 className="text-gray-800  text-5xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl">Welcome to Smart Terra</h1>
  <h2 className=" text-gray-300 text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl my-5">Revolutionizing Agriculture</h2>
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
