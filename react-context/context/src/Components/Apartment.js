import React, { useContext } from "react";
import { supermarketContext } from "../App";

function Apartment() {
  const food = useContext(supermarketContext);
  return (
    <div className="apartment">
      <h1>{food}</h1>
    </div>
  );
}

export default Apartment;
