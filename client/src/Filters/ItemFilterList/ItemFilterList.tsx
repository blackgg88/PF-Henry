import React from "react";
//import "./ItemFilterList.css";
import ItemFilter from "../ItemFilter/ItemFilter";

interface FilterByProps {
  filterList: string[];
  onCloseListHandler: (e: string) => void;
}

const ItemFilterList: React.FC<FilterByProps> = ({
  filterList,
  onCloseListHandler,
}) => {
  return (
    <div className="container-ItemFilterList">
      {filterList.map((el, index) => {
        return (
          // <div className="element" key={index}>
          //   <div>{el}</div>

          //   <button
          //     className="btn-close"
          //     onClick={() => onCloseListHandler(el)}
          //   >
          //     x
          //   </button>
          // </div>
          <ItemFilter key={Math.random+el} filter={el} closeItem={onCloseListHandler} />
        );
      })}
    </div>
  );
};

export default ItemFilterList;
