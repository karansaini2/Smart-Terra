import React from "react";
import Card from "../Components/Card";

function Home() {
  return (
    <div>
      <div className=" my-5 ">
        <h1 className=" text-center font-serif text-2xl" >Crops Data</h1>
        <div className="flex flex-wrap justify-center">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default Home;
