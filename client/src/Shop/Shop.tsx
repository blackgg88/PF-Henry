import React from "react";
//import "./Shop.css";

import FiltersPanel from "../Filters/FiltersPanel";
//import RenderCards from "../RenderCard/RenderCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/BreadCrumb";
import Card2 from "../components/CardBeta/CardBeta";
const Shop: React.FC<{}> = () => {
  const spanFilter = () => {
    
    const filterPanel = document.getElementById("idFilterPanel");
    const buttonSpan = document.getElementById("idButtonSpan");
    const backgroundFilter = document.getElementById("background-filter");
    const listFilter = document.getElementById("list-filter");
    
    if(filterPanel && backgroundFilter && buttonSpan && listFilter){
      filterPanel.classList.toggle("filter-move");
      buttonSpan.classList.toggle("btn-move");
      backgroundFilter.classList.toggle("filter-block");
      listFilter.classList.toggle("filter-list-move");
      console.log(backgroundFilter)

    }
};

  return (
    <div className="content-shop">
      {/* <div className="content-navbar"> */}
      {/* <Link to="/">
          <button>Back</button>
        </Link> */}
      {/* <div>content-navbar</div> */}
      {/* </div> */}
      <div className="filter-unblock" id="background-filter" onClick={spanFilter}></div>
      <div className="breadcrumb">
        <div className="base">
          <Breadcrumb />
        </div>
      </div>
      <div className="shop-contain">
        <FiltersPanel />
        <Card2 />
      </div>
      {/* <div className="content-footer">
        <div>content footer</div>
      </div> */}
    </div>
  );
};

export default Shop;
