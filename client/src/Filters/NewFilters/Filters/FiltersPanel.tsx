import React from "react";
import { productsFilter } from "../../../Redux/slice/product/ProductController";
import { getProduct, FilterState } from "../../../Redux/slice/product/product.slice";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import FilterByName from "../Filters/FilterByName/FilterByName";
import FilterByRating from "../Filters/FilterByRating/FilterByRating";
import FilterByCategory from "../Filters/FilterByCategory/FilterByCategory";
import FilterByPrice from "../Filters/FilterByPriceRange/FilterByPrice";

import filterName from "../../../assets/images/icons/filter/filterName.png";
import filterRating from "../../../assets/images/icons/filter/filterRating.png";
import filterPrice from "../../../assets/images/icons/filter/filterPrice.png";
import filterCategory from "../../../assets/images/icons/filter/filterCategory.png";
import filterSpace from "../../../assets/images/icons/filter/filterSpace.png";

const FiltersPanel: React.FC<{}> = () => {

  const dispatch = useAppDispatch();

  const Filters: FilterState = useAppSelector(
    state => state.productReducer.Filters
  );

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    try {
      e.preventDefault();
      productsFilter(Filters)
        ?.then(response => {
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

    </div>
  );
};

export default FiltersPanel;
