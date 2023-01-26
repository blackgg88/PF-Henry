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


  const spanFilter = () => {
    
    const filterPanel = document.getElementById("idFilterPanel");
    //const buttonSpan = document.getElementById("idButtonSpan");
    const backgroundFilter = document.getElementById("background-filter");
    const listFilter = document.getElementById("list-filter");
    
    if(filterPanel && backgroundFilter  && listFilter){
      filterPanel.classList.toggle("filter-move");
      //buttonSpan.classList.toggle("btn-move");
      backgroundFilter.classList.toggle("filter-block");
      listFilter.classList.toggle("filter-list-move");
    }
};
  return (
    <div className="container-ItemFilterList"  id="list-filter" >
      {filterList.map((el, index) => {
        return (
          <ItemFilter key={Math.random+el} filter={el} closeItem={onCloseListHandler} />
        );
      })}
    </div>
  );
};

export default ItemFilterList;
