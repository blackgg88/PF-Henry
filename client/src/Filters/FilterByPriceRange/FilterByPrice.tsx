import React from "react";
import { Slider } from "@mui/material";
import Typography from "@mui/material";
import "./FilterByPrice.css";

interface FilterByProps {
  switchSelect: (e: string) => void;
  type: string;
  filter: {
    properties: string[];
    order: string[];
    categories: string[];
    filterList: string[];
  };
}

const FilterByRange: React.FC<FilterByProps> = ({ switchSelect, filter }) => {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const thumbValue = (value: number) => `$ ${value}`;

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="container-inputFilterByPrice">
      {/* <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography> */}
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={thumbValue}
      />
    </div>
  );
};

export default FilterByRange;
