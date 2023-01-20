import React from "react";
import { useState } from "react"; //DANY ESTAS?
//import "./FilterPanel.css";
import FilterBy from "./FilterBy/FilterBy";
// import FilterByName from "./FilterByName/FilterByName";
import FilterByPrice from "./FilterByPriceRange/FilterByPrice";
// import FilterByRating from "./FilterByRating/FilterByRating";
import ItemFilterList from "./ItemFilterList/ItemFilterList";

interface Filter {
  properties: string[];
  order: string[];
  select: string;
  categories: string[];
  filterList: string[];
  span: boolean;
}

const FiltersPanel: React.FC<{}> = () => {
  const [filter, setFilter] = useState<Filter>({
    properties: [
      "---",
      "Name",
      "Rating",
      "Price",
      "Category",
      "Order",
      "stars",
    ],
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
    span: false,
  });

  // const span = () => {
  //   const filterPanel = document.getElementById("idFilterPanel");
  //   const buttonSpan = document.getElementById("idButtonSpan");
  //   if (filter.span === true) {
  //     filterPanel.className += " animationSpan";
  //     buttonSpan.innerHTML = "D";
  //     setFilter({ ...filter, span: !filter.span });
  //   } else {
  //     filterPanel.className += " contain-FilterPanel";
  //     buttonSpan.innerHTML = "R";
  //   }
  //   //document.querySelector(".contain-FilterPanel").style.backgroundColor ="green";
  //   //filterPanel.classList.add("animationspan");
  // };

  //span();

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
      } else if (value.includes("⭐️")) {
        //Remove the old price filter
        filter.filterList.map((filt, index) => {
          if (filt.includes("⭐️")) {
            const oldPrice = filter.filterList[index];
            focus = focus.filter((item) => item !== oldPrice);
          }
        });
        setFilter((prevFilter) => ({
          ...prevFilter,
          filterList: focus,
        }));
      } else if (
        value === "A-Z" ||
        value === "Z-A" ||
        value === "Highest Price" ||
        value === "Lowest Price" ||
        value === "max rating" ||
        value === "min rating"
      ) {
        filter.order.map((ordr) => {
          if (value === ordr) {
            const focal = filter.order.filter(
              (excepcion) => excepcion !== value
            );
            focal.map((filterOrder) => {
              focus = focus.filter((filt) => filt !== filterOrder);
            });
            setFilter((prevFilter) => ({
              ...prevFilter,
              filterList: focus,
            }));
          }
        });
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
    <div className="contain-FilterPanel" id="idFilterPanel">
      <div className="filter-filt">
        <div className="content-btn-span">
          <button className="btn-span" id="idButtonSpan">
            {"<"}
          </button>
        </div>
        <h3 className="title">search:</h3>
        <FilterBy
          type={filter.properties[1]}
          switchSelect={switchSelect}
          filter={filter}
        />
        <h3 className="title-filter">filters: </h3>

        <div className="title">price: </div>
        <FilterBy
          type={filter.properties[3]}
          switchSelect={switchSelect}
          filter={filter}
        />
        <h3 className="title">category: </h3>
        <FilterBy
          type={filter.properties[4]}
          switchSelect={switchSelect}
          filter={filter}
        />
        <h3 className="title">rating: </h3>
        <FilterBy
          type={filter.properties[6]}
          switchSelect={switchSelect}
          filter={filter}
        />
        <h3 className="title">order by: </h3>
        <FilterBy
          type={filter.properties[5]}
          switchSelect={switchSelect}
          filter={filter}
        />

        {/* <FilterByPrice
          type={filter.properties[7]}
          switchSelect={switchSelect}
          filter={filter}
        /> */}
      </div>
      <div className="list-filter">
        <h3 className="title-filter">filters: </h3>
        <ItemFilterList
          filterList={filter.filterList}
          onCloseListHandler={onCloseListHandler}
        />
      </div>
    </div>
  );
};

export default FiltersPanel;
