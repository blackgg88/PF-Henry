import React from 'react';
import FiltersPanel from '../Filters/FiltersPanel';
import Breadcrumb from '../components/BreadCrumb';
import Card2 from '../components/CardBeta/CardBeta';

const Shop: React.FC<{}> = () => {

  return (
    <div className='content-shop'>
      <div className='breadcrumb'>
        <div className='base'>
          <Breadcrumb />
        </div>
      </div>
      <div className='shop-contain'>
        <FiltersPanel />
        <Card2 />
      </div>
    </div>
  );
};

export default Shop;
