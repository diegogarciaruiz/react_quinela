import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import { MyContextProvider } from "./context/contextProvider";

function App() {
  return (
    <MyContextProvider>
      <HomePage />
    </MyContextProvider>
  );
}

export default App;
