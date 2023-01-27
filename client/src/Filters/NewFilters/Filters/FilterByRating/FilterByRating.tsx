import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hook";
import {Rating} from  "@mui/material"
// import { updateRatingFilter } from "../../Redux/slice/product.slice";
import { updateRatingFilter } from "../../../../Redux/slice/product/product.slice";
//import "./FilterByRating.css";
// import { FilterState } from "../../Redux/slice/product.slice";
import { FilterState } from "../../../../Redux/slice/product/product.slice";
import star from "../../../../assets/images/icons/star.png" 
const FilterByRating: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const Filters: FilterState = useAppSelector(
    state => state.productReducer.Filters
  );

  const handlerChange = (event: any) => {
    dispatch(updateRatingFilter(event.target.value));
  };

  return (
    <div className='container'>
   <Rating 
   
   size='medium' className="component-rating" name="half-rating" defaultValue={Filters.rating} precision={0.5} onClick={handlerChange}/>

      {/* <TextField
        label='rating'
        type='number'
        value={Filters.rating}
        onChange={handlerChange}
      /> */}
    </div>
  );
};

export default FilterByRating;
