import React from "react";
import { useState } from "react";
import WeatherCard from "../Components/WeatherCard";
import search from "../Assets/Icons/search.svg";
import { useStateContext } from "../Components/WeatherContext";
import MiniWeather from "../Components/MiniWeather";
import Navbar from "../Components/Navbar"


function Weather() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };
  return (
    <>
    <Navbar/>
    <nav className="bg-blue-500 p-2 flex items-center justify-between ">
  <h1 className="text-white text-base font-bold ">Weather</h1>
  <div className="flex items-center">
    <img src={search} alt="search" className="w-5 h-5 mr-1" />
    <input
      className="bg-white rounded-md py-1 px-2 text-sm focus:outline-none"
      type="text"
      placeholder="Search city"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          // sumit the form
          submitCity();
        }
      }}
    />
  </div>
</nav>


<main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniWeather
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
          }
        </div>
      </main>

    </>
  );
}

export default Weather;
