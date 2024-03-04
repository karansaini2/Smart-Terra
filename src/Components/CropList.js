import React, { useContext } from "react";
import { CropContext } from "./CropContext";
import { ImSpinner2 } from "react-icons/im";
import CropCard from "./Crop";

function CropList() {
  const { cropList, loading } = useContext(CropContext);
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }
  return (
    <section className="mb-20">
        <div className="container mx-auto">
            <div className="grid  gap-x-4 md:grid-cols-2 lg:grid-cols-3">
               {cropList.map((crop,index)=>{
                return (
                 <CropCard key={index} crop={crop}/>
                )
               })} 
            </div>
        </div>
    </section>
  );
}

export default CropList;
