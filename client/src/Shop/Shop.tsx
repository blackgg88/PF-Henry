import React, { useRef } from "react";
import FiltersPanel from "../Filters/FiltersPanel";
import Breadcrumb from "../components/BreadCrumb";
import Card2 from "../components/CardBeta/CardBeta";
import ScrollUp from "../components/scrollUp/ScrollUp";

const Shop: React.FC<{}> = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className='content-shop'>
      <div className='shop-contain'>
        <FiltersPanel />
        <Card2 />
        <ScrollUp refUse={ref} />
      </div>

      <div className='breadcrumb'>
        <div className='base'>
          <Breadcrumb />
        </div>
      </div>
      {/* <ScrollUp refUse={ref} /> */}
    </div>
  );
};

export default Shop;
