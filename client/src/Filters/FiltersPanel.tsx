import React from "react";
import useFiltersPanel from './hook/useFiltersPanel'
import FilterByName from "./components/FilterByName/FilterByName";
import FilterByRating from "./components/FilterByRating/FilterByRating";
import FilterByCategory from "./components/FilterByCategory/FilterByCategory";
import FilterByPrice from "./components/FilterByPriceRange/FilterByPrice";
import FilterOrder from "./components/FilterOrder/FilterOrder";

import filterName from "../assets/images/icons/filter/filterName.png";
import filterRating from "../assets/images/icons/filter/filterRating.png";
import filterPrice from "../assets/images/icons/filter/filterPrice.png";
import filterCategory from "../assets/images/icons/filter/filterCategory.png";
import filterOrder from "../assets/images/icons/filter/filterOrder.png";
import filterSpace from "../assets/images/icons/filter/filterSpace.png";

const FiltersPanel: React.FC<{}> = () => {

  const { handleFilter } = useFiltersPanel()

  return (
    <div className='new-contain-FilterPanel' id='idFilterPanel'>
      <div className='sectrion-filter'>
        <img className='img' src={filterSpace} alt='' />
        <div className='block-filter'>
          <h1 className='title-filter'>Filters Home:</h1>
          <div className='separator'></div>
        </div>
      </div>

      <div className='sectrion-filter'>
        <div className='hovr-selector'></div>
        <img className='img' src={filterName} alt='' />
        <div className='block-filter'>
          <h2 className='title-filter'>Filter by Name:</h2>
          <FilterByName />
        </div>
      </div>

      <div className='sectrion-filter'>
        <div className='hovr-selector'></div>
        <img className='img' src={filterRating} alt='' />
        <div className='block-filter'>
          <h2 className='title-filter'>Filter by Rating</h2>
          <FilterByRating />
        </div>
      </div>

      <div className='sectrion-filter'>
        <div className='hovr-selector'></div>
        <img className='img' src={filterPrice} alt='' />
        <div className='block-filter'>
          <h2 className='title-filter'>Filter by Price</h2>
          <FilterByPrice />
        </div>
      </div>

      <div className='sectrion-filter'>
        <div className='hovr-selector'></div>
        <img className='img' src={filterCategory} alt='' />
        <div className='block-filter'>
          <h2 className='title-filter'>Filter by Category</h2>
          <FilterByCategory />
        </div>
      </div>

      <div className='sectrion-filter'>
        <div className='hovr-selector'></div>
        <img className='img' src={filterOrder} alt='' />
        <div className='block-filter'>
          <h2 className='title-filter'>Order</h2>
          <FilterOrder />
        </div>
      </div>

      <div className='sectrion-filter'>
        <img className='img' src={filterSpace} alt='' />
        <div className='block-filter'>
          <button className='btn-selector-filter' onClick={handleFilter}>
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
