import React, { useState, useEffect, createContext } from "react";
import { cropData } from "../data";
export const CropContext = createContext();

const CropContextProvider = ({ children }) => {
  const [cropList, setCropList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCropData = async () => {
      try {
        setLoading(true);
        const data = await new Promise((resolve) =>
          setTimeout(() => resolve(cropData), 1000)
        );
        setCropList(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchCropData();
  }, []);
  return (
    <CropContext.Provider
      value={{
        cropList,
        loading,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};

export default CropContextProvider;
