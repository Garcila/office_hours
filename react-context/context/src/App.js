import React, { useState, createContext } from "react";
import City from "./Components/City";
import "./App.css";

export const supermarketContext = createContext();

function App() {
  const [food, setFood] = useState("🍪");

  function handleClick() {
    food === "🍪" ? setFood("🍉") : setFood("🍪");
  }

  return (
    <div className="App">
      <supermarketContext.Provider value={food}>
        <div className="city">
          <City />
        </div>
      </supermarketContext.Provider>
      <h1 className="cookie" onClick={handleClick}>
        {food}
      </h1>
    </div>
  );
}

export default App;
