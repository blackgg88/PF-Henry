import React from "react";
//import "./Shop.css";


import replegarFiltro from "../assets/images/buttons/replegarFiltro.png"
import desplegarFiltro from "../assets/images/buttons/desplegarFiltro.png"


import FiltersPanel from "../Filters/FiltersPanel";
//import RenderCards from "../RenderCard/RenderCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/BreadCrumb";
import Card2 from "../components/CardBeta/CardBeta";
import logoforFilter from "../assets/images/logos/logoforFilter.png"
const Shop: React.FC<{}> = () => {

  const spanFilter = () => {

    const filterPanel = document.getElementById("idFilterPanel");
    const buttonSpan = document.getElementById("idButtonSpan");
    const backgroundFilter = document.getElementById("background-filter");
    const listFilter = document.getElementById("list-filter");

    if (filterPanel && backgroundFilter && buttonSpan && listFilter) {
      filterPanel.classList.toggle("filter-move");
      buttonSpan.classList.toggle("btn-move");
      backgroundFilter.classList.toggle("filter-block");
      listFilter.classList.toggle("filter-list-move");
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
      <button className="filter-btn-out" onClick={spanFilter} id="idButtonSpan"
       style={{
        backgroundImage: `url(${desplegarFiltro})`,
        backgroundSize: '60%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      ></button>
      <div className="filter-unblock" id="background-filter" onClick={spanFilter}>
        <img className="logoforFilter" src={logoforFilter} alt="" />
      </div>
      
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
