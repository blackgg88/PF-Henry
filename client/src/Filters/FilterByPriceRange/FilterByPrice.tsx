import React from "react";
import "./FilterByPrice.css";

const FilterByRange: React.FC<{}> = () => {
  return (
    <div className="container-inputFilterByPrice">
      {" "}
      <input
        // defaultValue={[min, max]}
        type="range"
        min={10}
        max={100}
        // value={value}
      />
      <span>Price</span>
    </div>
  );
};

export default FilterByRange;
