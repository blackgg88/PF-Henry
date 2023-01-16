import React from "react";
import "./ItemFilterList.css";
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
          <div key={index}>
            {el}
            <span>
              <button onClick={() => onCloseListHandler(el)}>x</button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ItemFilterList;
