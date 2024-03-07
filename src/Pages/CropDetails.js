import React from "react";
import { cropData } from "../data";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function CropDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const crop = cropData.find((crop) => {
    return crop.id === parseInt(id);
  });

  return (
    <section className="flex flex-col justify-center items-center h-[120vh] font-serif bg-gray-100">
      <div className="max-w-4xl w-full px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{crop.name}</h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Insights
          </h2>
          <p className="text-lg text-gray-700">{crop.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-md shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Temperature Required</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-md p-6 flex flex-col items-center justify-center shadow-lg">
                <div className="text-3xl font-bold">
                  {crop.temperature.max}°C
                </div>
                <div className="text-sm">Maximum</div>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-md p-6 flex flex-col items-center justify-center shadow-lg">
                <div className="text-3xl font-bold">
                  {crop.temperature.min}°C
                </div>
                <div className="text-sm">Minimum</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Moisture Levels</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-md p-6 flex flex-col items-center justify-center shadow-lg">
                <div className="text-3xl font-bold">{crop.moisture.max}%</div>
                <div className="text-sm">Maximum</div>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-md p-6 flex flex-col items-center justify-center shadow-lg">
                <div className="text-3xl font-bold">{crop.moisture.min}%</div>
                <div className="text-sm">Minimum</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-8 border border-green-400 rounded-md overflow-hidden bg-green-50">
          <h3 className="bg-green-400 text-lg font-semibold py-2 px-4">
            Nutrients
          </h3>
          <div className="grid grid-cols-3 gap-0 p-2">
            <div className="bg-green-100 border-r border-b border-green-400 px-4 py-2 flex flex-col items-center">
              <span className="font-semibold text-gray-800 mb-1">Nutrient</span>
              <span className="text-green-600 text-sm">Nitrogen</span>
              <span className="text-green-600 text-sm">Phosphorus</span>
              <span className="text-green-600 text-sm">Potassium</span>
            </div>
            <div className="bg-green-100 border-r border-b border-green-400 px-4 py-2 flex flex-col items-center">
              <span className="font-semibold text-gray-800 mb-1">
                PPM Value
              </span>
              <span className="text-green-600 text-sm">
                {crop.nitrogen_value_ppm}
              </span>
              <span className="text-green-600 text-sm">
                {crop.phosphorus_value_ppm}
              </span>
              <span className="text-green-600 text-sm">
                {crop.potassium_value_ppm}
              </span>
            </div>
            <div className="bg-green-100 border-b border-green-400 px-4 py-2 flex flex-col items-center">
              <span className="font-semibold text-gray-800 mb-1">Level</span>
              <span className="text-green-600 text-sm">
                {crop.nutrients.nitrogen}
              </span>
              <span className="text-green-600 text-sm">
                {crop.nutrients.phosphorus}
              </span>
              <span className="text-green-600 text-sm">
                {crop.nutrients.potassium}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CropDetails;
