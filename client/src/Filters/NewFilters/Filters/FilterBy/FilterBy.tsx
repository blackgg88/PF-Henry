import FilterByRating from "../FilterByRating/FilterByRating";
import FilterByRange from "../FilterByPriceRange/FilterByPrice";
import FilterByName from "../FilterByName/FilterByName";
import FilterByCategory from "../FilterByCategory/FilterByCategory";
import { Button } from "@mui/material";
// import { productsFilter } from "../../Redux/slice/ProductController";
import { productsFilter } from "../../../../Redux/slice/product/ProductController";
// import { getProduct } from "../../Redux/slice/product.slice";
import { getProduct } from "../../../../Redux/slice/product/product.slice";
// import { FilterState } from "../../Redux/slice/product.slice";
import { FilterState } from "../../../../Redux/slice/product/product.slice";
// import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hook";

const FilterBy: React.FC = () => {
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
    <div className='new-container-FilterBy'>

      {/* <div className="section-filter">
        <h3 className='title-filter'>Name:</h3>
        <FilterByName />
      </div>
      <div className="section-filter">
        <h3 className='title-filter'>Rating:</h3>
        <FilterByRating />
      </div>
      <div className="section-filter">
        <h3 className='title-filter'>RangePrice:</h3>
        <FilterByRange />
      </div>
      <div className="section-filter">
        <h3 className='title-filter'>RangePrice:</h3>
        <FilterByCategory />
      </div>
      {/* <div className='🔵'></div> */}

      {/* <Button onClick={
        handleFilter
      }>Filtrar</Button> */}
    </div>
  );
};

export default FilterBy;
