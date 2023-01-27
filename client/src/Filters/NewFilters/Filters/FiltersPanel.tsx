import React from "react";
// import { useState } from "react";
// import FilterBy from "./FilterBy/FilterBy";
// import ItemFilterList from "./ItemFilterList/ItemFilterList";
// import { FilterState } from "../../../Redux/slice/product/product.slice";
// import { useAppSelector } from "../../../Redux/hook";
// import { FilterNone } from "@mui/icons-material";
import { Button } from "@mui/material";
import { productsFilter } from "../../../Redux/slice/product/ProductController";
import { getProduct } from "../../../Redux/slice/product/product.slice";
import { FilterState } from "../../../Redux/slice/product/product.slice";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";

import FilterByName from "../Filters/FilterByName/FilterByName";

import FilterByRating from "../Filters/FilterByRating/FilterByRating";
import FilterByRange from "../Filters/FilterByPriceRange/FilterByPrice";
import FilterByCategory from "../Filters/FilterByCategory/FilterByCategory";
import FilterByPrice from "../Filters/FilterByPriceRange/FilterByPrice";

import filterName from "../../../assets/images/icons/filter/filterName.png";
import filterRating from "../../../assets/images/icons/filter/filterRating.png";
import filterPrice from "../../../assets/images/icons/filter/filterPrice.png";
import filterCategory from "../../../assets/images/icons/filter/filterCategory.png";
import filterSpace from "../../../assets/images/icons/filter/filterSpace.png";



interface Filter {
  properties: string[];
  order: string[];
  select: string;
  categories: string[];
  filterList: string[];
  span: boolean;
}

const FiltersPanel: React.FC<{}> = () => {

  const dispatch = useAppDispatch();

  const Filters: FilterState = useAppSelector(
    state => state.productReducer.Filters
  );

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    try {
      e.preventDefault();
      productsFilter(Filters)?.then(response => {
        dispatch(getProduct(response));
      });
    } catch (error) {
      console.error({ message: error });
    }
  };

  return (
    <div className='new-contain-FilterPanel' id='idFilterPanel'>

      <div className="sectrion-filter">
        <img className="img"src={filterSpace} alt="" />
        <div className="block-filter">
          <h1 className="title-filter"> filters Home:</h1>
          <div className="separator"></div>
        </div>
      </div>

      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img"src={filterName} alt="" />
        <div className="block-filter">
          <h2 className="title-filter"> filter by Name:</h2>
          <FilterByName />
        </div>
      </div>
      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img"src={filterRating} alt="" />
        <div className="block-filter">
          <h2 className="title-filter">filter by Rating</h2>
          <FilterByRating />
        </div>
      </div>
      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img"src={filterPrice} alt="" />
        <div className="block-filter">
          <h2 className="title-filter">filter by Price</h2>
          <FilterByPrice />
        </div>
      </div>
      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img"src={filterCategory} alt="" />
        <div className="block-filter">
          <h2 className="title-filter">filter by Categoru</h2>
          <FilterByCategory />
        </div>
      </div>

      <div className="sectrion-filter">
        
        <img className="img" src={filterSpace} alt="" />
        <div className="block-filter">
          <button className="btn-selector-filter" onClick={
            handleFilter
          }>Filtrar</button>
        </div>

      </div>



      {/* <div className='br'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div> */}

      {/* <div className='list-filter'>
        <h3 className='title-filter'>Filter Panel: </h3>
        <ItemFilterList
          filterList={Filters}
          onCloseListHandler={onCloseListHandler}
        />
      </div> */}

    </div>
  );
};

export default FiltersPanel;



// const Filters: FilterState = useAppSelector(
//   state => state.productReducer.Filters
// );

// const [filter, setFilter] = useState<Filter>({
//   properties: [
//     "---",
//     "Name",
//     "Rating",
//     "Price",
//     "Category",
//     "Order",
//     "stars",
//   ],
//   order: [
//     "---",
//     "A-Z",
//     "Z-A",
//     "Highest Price",
//     "Lowest Price",
//     "max rating",
//     "min rating",
//   ],
//   categories: [
//     "---",
//     "Connectivity & Control",
//     "Home Entertainment",
//     "Energy Management",
//     "Safety & Security",
//     "Comfort & Ease",
//     "LifeStyle & Health",
//   ],
//   select: "---",
//   filterList: [],
//   span: false,
// });

// const onCloseListHandler = (value: string) => {
//   let newList = Object.keys(Filters).filter(el => el !== value);
//   setFilter(prevFilter => ({ ...prevFilter, filterList: newList }));
// };