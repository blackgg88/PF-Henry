import React from "react";
// import "./ItemFilterList.css";
import ItemFilter from "../ItemFilter/ItemFilter";
// import { FilterState } from "../../Redux/slice/product.slice";
import { FilterState } from "../../../../Redux/slice/product/product.slice";

interface FilterByProps {
  filterList: FilterState;
  onCloseListHandler: (e: string) => void;
}

const ItemFilterList: React.FC<FilterByProps> = ({
  filterList,
  onCloseListHandler,
}) => {
  return (
    <div className='container-ItemFilterList'>
      {Object.values(filterList).map((el, index) => (
        <>
          {/* <div className='element' key={index}>
            <div>{el}</div>

            <button
              className="btn-close"
              onClick={() => onCloseListHandler(el)}
              >
              x
            </button>
          </div> */}
          <ItemFilter key={index} filter={el} closeItem={onCloseListHandler} />
        </>
      ))}
    </div>
  );
};

export default ItemFilterList;
