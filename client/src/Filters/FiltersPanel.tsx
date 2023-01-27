import React from "react";
import { useState } from "react"; //DANY ESTAS?
//import "./FilterPanel.css";
import FilterBy from "./FilterBy/FilterBy";
// import FilterByName from "./FilterByName/FilterByName";
import FilterByPrice from "./FilterByPriceRange/FilterByPrice";
// import FilterByRating from "./FilterByRating/FilterByRating";
import ItemFilterList from "./ItemFilterList/ItemFilterList";
import logoforFilter from "../assets/images/logos/logoforFilter.png"
import iconFilter from "../assets/images/icons/iconFilter.png"
import desplegarFiltro from "../assets/images/buttons/desplegarFiltro.png"
import replegarFiltro from "../assets/images/buttons/replegarFiltro.png"


import filterName from "../assets/images/icons/filter/filterName.png"

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



  //span();

  const switchSelect = (value: string) => {
    if (value !== "---") {
      //onsole.log(filter.filterList);
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
      }

      else if (
        value === "Connectivity & Control" ||
        value === "Home Entertainment" ||
        value === "Energy Management" ||
        value === "Safety & Security" ||
        value === "Comfort & Ease" ||
        value === "LifeStyle & Health"
      ) {
        filter.categories.map((ordr) => {
          if (value === ordr) {
            const focal = filter.categories.filter(
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
      }

      else {
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
    <div className="new-contain-FilterPanel" id="idFilterPanel">
      <div className="filter-section">
        <img src={filterName} alt="" />
        <div className="block-filter">
          <h3 className="tile-filet"> title filter</h3>
        </div>
      </div>
      
    </div>
    
  ) 
};

      export default FiltersPanel;


  //     <div className="filter-filt">
  //       <h3 className="title">search:</h3>
  //       <FilterBy
  //         type={filter.properties[1]}
  //         switchSelect={switchSelect}
  //         filter={filter}
  //       />
  //       <h3 className="title-filter">filters: </h3>

  //       <div className="title">price: </div>
  //       <FilterBy
  //         type={filter.properties[3]}
  //         switchSelect={switchSelect}
  //         filter={filter}
  //       />
  //       <h3 className="title">category: </h3>
  //       <FilterBy
  //         type={filter.properties[4]}
  //         switchSelect={switchSelect}
  //         filter={filter}
  //       />
  //       <h3 className="title">rating: </h3>
  //       <FilterBy
  //         type={filter.properties[6]}
  //         switchSelect={switchSelect}
  //         filter={filter}
  //       />
  //       <h3 className="title">order by: </h3>
  //       <FilterBy
  //         type={filter.properties[5]}
  //         switchSelect={switchSelect}
  //         filter={filter}
  //       />

  //       {/* <FilterByPrice
  //         type={filter.properties[7]}
  //         switchSelect={switchSelect}
  //         filter={filter}
  //       /> */}
  //     </div>
  //     <div className="list-filter" id="list-filter">
  //       <h3 className="title-filter">filter list: </h3>
  //       <ItemFilterList
  //         filterList={filter.filterList}
  //         onCloseListHandler={onCloseListHandler}
  //       />
  //     </div>
  //   </div>
  // );