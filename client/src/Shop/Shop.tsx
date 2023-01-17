import React from "react";
import "./Shop.css";
import ResponsiveAppBar from "../components/NavBarShop"
import FiltersPanel from "../Filters/FiltersPanel";
import RenderCards from "../RenderCard/RenderCard";

const Shop: React.FC<{}> = () => {
  return (
    <div className="shop-contain">
      <ResponsiveAppBar/>
      <FiltersPanel />
      <RenderCards />
    </div>
  );
};

export default Shop;
