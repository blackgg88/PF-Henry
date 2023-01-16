import React from "react";
import { useState } from "react";
import "./FilterPanel.css";
import FilterBy from "./FilterBy/FilterBy";
// import FilterByName from "./FilterByName/FilterByName";
// import FilterByPrice from "./FilterByPriceRange/FilterByPrice";
// import FilterByRating from "./FilterByRating/FilterByRating";
import ItemFilterList from "./ItemFilterList/ItemFilterList";

interface Filter {
  properties: string[];
  order: string[];
  select: string;
  categories: string[];
  filterList: string[];
}

const FiltersPanel: React.FC<{}> = () => {
  const [filter, setFilter] = useState<Filter>({
    properties: ["---", "Name", "Rating", "Price", "Category", "Order"],
    order: [
      "---",
      "A-Z",
      "Z-A",
      "Highest Price",
      "Lowest Price",
      "max rating",
      "min rating",
    ],
    categories: [
      "---",
      "Connectivity & Control",
      "Home Entertainment",
      "Energy Management",
      "Safety & Security",
      "Comfort & Ease",
      "LifeStyle & Health",
    ],
    select: "---",
    filterList: [],
  });

  const switchSelect = (value: string) => {
    if (value !== "---") {
      console.log(filter.filterList);
      let focus = [value, ...filter.filterList];
      focus = [...new Set(focus)];
      //check if the selected filter is a price filter
      if (value.includes("💰(")) {
        //Remove the old price filter
        filter.filterList.map((filt, index) => {
          if (filt.includes("💰(")) {
            const oldPrice = filter.filterList[index];
            focus = focus.filter((item) => item !== oldPrice);
          }
        });
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else if (value.includes("⭐️(")) {
        //Remove the old price filter
        filter.filterList.map((filt, index) => {
          if (filt.includes("⭐️(")) {
            const oldPrice = filter.filterList[index];
            focus = focus.filter((item) => item !== oldPrice);
          }
        });
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else if (value === "A-Z") {
        focus = focus.filter((filt) => filt !== "Z-A");
        focus = focus.filter((filt) => filt !== "Highest Price");
        focus = focus.filter((filt) => filt !== "Lowest Price");
        focus = focus.filter((filt) => filt !== "max rating");
        focus = focus.filter((filt) => filt !== "min rating");
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else if (value === "Z-A") {
        focus = focus.filter((filt) => filt !== "A-Z");
        focus = focus.filter((filt) => filt !== "Highest Price");
        focus = focus.filter((filt) => filt !== "Lowest Price");
        focus = focus.filter((filt) => filt !== "max rating");
        focus = focus.filter((filt) => filt !== "min rating");
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else if (value === "Highest Price") {
        focus = focus.filter((filt) => filt !== "A-Z");
        focus = focus.filter((filt) => filt !== "Z-A");
        focus = focus.filter((filt) => filt !== "Lowest Price");
        focus = focus.filter((filt) => filt !== "max rating");
        focus = focus.filter((filt) => filt !== "min rating");
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else if (value === "Lowest Price") {
        focus = focus.filter((filt) => filt !== "A-Z");
        focus = focus.filter((filt) => filt !== "Z-A");
        focus = focus.filter((filt) => filt !== "Highest Price");
        focus = focus.filter((filt) => filt !== "max rating");
        focus = focus.filter((filt) => filt !== "min rating");
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else if (value === "max rating") {
        focus = focus.filter((filt) => filt !== "A-Z");
        focus = focus.filter((filt) => filt !== "Z-A");
        focus = focus.filter((filt) => filt !== "Highest Price");
        focus = focus.filter((filt) => filt !== "Lowest Price");
        focus = focus.filter((filt) => filt !== "min rating");
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else if (value === "min rating") {
        focus = focus.filter((filt) => filt !== "A-Z");
        focus = focus.filter((filt) => filt !== "Z-A");
        focus = focus.filter((filt) => filt !== "Highest Pice");
        focus = focus.filter((filt) => filt !== "Lowest Price");
        focus = focus.filter((filt) => filt !== "max rating");
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else {
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      }
    }
  };

  //closeHandler fot filterList
  const onCloseListHandler = (value: string) => {
    let newList = filter.filterList.filter((el) => el !== value);
    setFilter((prevFilter) => ({ ...prevFilter, filterList: newList }));
  };

  return (
    <div className="contain-FilterPanel">
      <div className="filter-filt">
        <FilterBy
          type={filter.properties[1]}
          switchSelect={switchSelect}
          filter={filter}
        />
        <FilterBy
          type={filter.properties[2]}
          switchSelect={switchSelect}
          filter={filter}
        />
        <FilterBy
          type={filter.properties[3]}
          switchSelect={switchSelect}
          filter={filter}
        />
        <FilterBy
          type={filter.properties[4]}
          switchSelect={switchSelect}
          filter={filter}
        />
        <FilterBy
          type={filter.properties[5]}
          switchSelect={switchSelect}
          filter={filter}
        />
      </div>
      <div className="list-filter">
        <ItemFilterList
          filterList={filter.filterList}
          onCloseListHandler={onCloseListHandler}
        />
      </div>
    </div>
  );
};

export default FiltersPanel;
