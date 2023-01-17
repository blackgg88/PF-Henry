import React from "react";
// import {Slider} from @materialui
import "./FilterBy.css";

interface FilterByProps {
  switchSelect: (e: string) => void;
  type: string;
  filter: {
    properties: string[];
    order: string[];
    categories: string[];
    filterList: string[];
  };
}

const FilterBy: React.FC<FilterByProps> = ({ switchSelect, filter, type }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current);
    if (inputRef.current) {
      console.log(inputRef.current.value);
      switchSelect(inputRef.current.value);
    }
  };

  return (
    <div className="container-FilterBy">
      <h3 className="Title">Filter By: {type}</h3>
      {type === "Name" && (
        <form action="" onSubmit={onSubmitHandler}>
          <input
            className="input-filterBy"
            type="text"
            id="inputName"
            ref={inputRef}
          />
          <button type="submit"> search </button>
        </form>
      )}

      {type === "Rating" && (
        <input
          min={1}
          max={5}
          defaultValue={1}
          type="number"
          onChange={(e) => {
            const rating = `⭐️(${e.target.value})`;
            switchSelect(rating);
          }}
        />
      )}

      {type === "Price" && (
        // <Slider/>
        <input
          className="input-filterBy"
          type="range"
          onChange={(e) => {
            const price = `💰(0 - ${e.target.value})`;
            switchSelect(price);
          }}
        />
      )}

      {
        //Category
        type === "Category" && (
          <select
            className="select-FilterBy"
            onChange={(e) => {
              switchSelect(e.target.value);
            }}
          >
            {filter.categories?.map((property, index) => {
              return (
                <option
                  className="option"
                  key={property + index}
                  value={property}
                >
                  {property}
                </option>
              );
            })}
          </select>
        )
      }

      {
        //Category
        type === "Order" && (
          <select
            className="select-FilterBy"
            onChange={(e) => {
              switchSelect(e.target.value);
            }}
          >
            {filter.order?.map((property, index) => {
              return (
                <option
                  className="option"
                  key={property + index}
                  value={property}
                >
                  {property}
                </option>
              );
            })}
          </select>
        )
      }
    </div>
  );
};

export default FilterBy;
