import React from "react";
// import "./ItemFilter.css";
// import { FilterState } from "../../Redux/slice/product.slice";
import { FilterState } from "../../../../Redux/slice/product/product.slice";


interface FilterByProps {
  closeItem: (e: string) => void;
  filter: string;
}

const ItemFilter: React.FC<FilterByProps> = ({ filter, closeItem }) => {
  return (
    <div className='container-itemFilter'>
      <div className='name-filter'>{filter}</div>
      <button className='close-item' onClick={() => closeItem(filter)}>
        x
      </button>
    </div>
  );
};

export default ItemFilter;
