import React, { createContext, useEffect, useState } from "react";
import { schemesData } from "../data";

export const SchemeContext = createContext();

const SchemesContextProvider = ({ children }) => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemes = async () => {
        try {
            setLoading(true);
            const data = await new Promise((resolve) =>
              setTimeout(() => resolve(schemesData), 1000)
            );
            setSchemes(data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
          }
    };
    fetchSchemes();
  }, []);

  return (
    <SchemeContext.Provider
      value={{
        schemes,
        loading,
      }}
    >
      {children}
    </SchemeContext.Provider>
  );
};
export default SchemesContextProvider;
