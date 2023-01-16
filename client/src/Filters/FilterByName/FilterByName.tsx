import React from "react";
import "./FilterByName.css";

const FilterByName: React.FC<{}> = () => {
  return (
    <div className="container-inputFilterByName">
      <input type="text" placeholder="🔎 Search..."></input>
      <button type="submit">Search</button>
    </div>
  );
};

export default FilterByName;
