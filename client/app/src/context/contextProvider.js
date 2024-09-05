import React, { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [results, setResults] = useState(null); 
    
    return (
      <MyContext.Provider value={{ results, setResults }}>
        {children}
      </MyContext.Provider>
    )
  };