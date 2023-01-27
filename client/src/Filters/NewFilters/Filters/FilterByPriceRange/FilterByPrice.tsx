import { Slider } from "@mui/material";
import { ChangeEvent } from "react";
import {
  updatePriceMinFilter,
  updatePriceMaxFilter,
} from "../../../../Redux/slice/product/product.slice";
// } from "../../Redux/slice/product.slice";
// import { FilterState } from "../../Redux/slice/product.slice";
import { FilterState } from "../../../../Redux/slice/product/product.slice";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hook";

const FilterByPrice: React.FC = () => {
  const dispatch = useAppDispatch();

  const Filters: FilterState = useAppSelector(
    state => state.productReducer.Filters
  );

  const handleChange = (event: any, newValue: number | number[]) => {
    const [pricemin, pricemax] = newValue as number[];
    dispatch(updatePriceMinFilter(pricemin));
    dispatch(updatePriceMaxFilter(pricemax));
  };

  const thumbValue = (value: number) => `$ ${value}`;

  return (
    <div className='container-inputFilterByPrice'>
      <Slider
        className="price"
        value={[Filters.pricemin, Filters.pricemax]}
        onChange={handleChange}
        valueLabelDisplay='on'
        aria-labelledby='range-slider'
        step={10}
        min={0}
        max={3000}
        getAriaValueText={thumbValue}
        sx={{
          width: 300,
          color: "gray-ligth",
        }}
      />
    </div>
  );
};

export default FilterByPrice;
