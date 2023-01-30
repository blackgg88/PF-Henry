import React from "react";
import useFiltersPanel from "./hook/useFiltersPanel";
import FilterByName from "./components/FilterByName/FilterByName";
import FilterByRating from "./components/FilterByRating/FilterByRating";
import FilterByCategory from "./components/FilterByCategory/FilterByCategory";
import FilterByPrice from "./components/FilterByPriceRange/FilterByPrice";
import { productFetch } from "../Redux/slice/product/ProductController";
import { resetFilters, getProduct } from "../Redux/slice/product/product.slice";
import { useAppDispatch } from "../Redux/hook";

import filterName from "../assets/images/icons/filter/filterName.png";
import filterRating from "../assets/images/icons/filter/filterRating.png";
import filterPrice from "../assets/images/icons/filter/filterPrice.png";
import filterCategory from "../assets/images/icons/filter/filterCategory.png";
import filterSpace from "../assets/images/icons/filter/filterSpace.png";
import Sorters from "./components/sorters/Sorters";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";

const FiltersPanel: React.FC<{}> = () => {
  const { handleFilter } = useFiltersPanel();
  const dispatch = useAppDispatch();
  const resetFiltersHandler = () => {
    dispatch(resetFilters());
    productFetch().then((res) => {
      dispatch(getProduct(res));
    });
  };

  return (
    <div className="new-contain-FilterPanel" id="idFilterPanel">
      <div className="sectrion-filter">
        <img className="img" src={filterSpace} alt="" />
        <div className="block-filter">
          <h1 className="title-filter"> filters Home:</h1>
          <div className="separator"></div>
        </div>
      </div>

      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img" src={filterName} alt="" />
        <div className="block-filter">
          <h2 className="title-filter"> filter by Name:</h2>
          <FilterByName />
        </div>
      </div>

      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img" src={filterRating} alt="" />
        <div className="block-filter">
          <h2 className="title-filter">filter by Rating</h2>
          <FilterByRating />
        </div>
      </div>

      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img" src={filterPrice} alt="" />
        <div className="block-filter">
          <h2 className="title-filter">filter by Price</h2>
          <FilterByPrice />
        </div>
      </div>

      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img" src={filterCategory} alt="" />
        <div className="block-filter">
          <h2 className="title-filter">filter by Category</h2>
          <FilterByCategory />
        </div>
      </div>
      <div className="sectrion-filter">
        <div className="hovr-selector"></div>
        <img className="img" src={filterCategory} alt="" />
        <div className="block-filter">
          <h2 className="title-filter">Sort by</h2>
          <Sorters />
        </div>
      </div>

      <div className="sectrion-filter">
        <img className="img" src={filterSpace} alt="" />
        <div className="block-filter">
          <button className="btn-selector-filter" onClick={handleFilter}>
            Filtrar
          </button>
          <button className="btn-selector-filter" onClick={resetFiltersHandler}>
            <SettingsBackupRestoreIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
