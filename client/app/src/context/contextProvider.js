import React, { createContext } from "react";
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const myData = 'Hello from Context!';
    
    return (
      <MyContext.Provider value={myData}>
        {children}
      </MyContext.Provider>
    );
  };