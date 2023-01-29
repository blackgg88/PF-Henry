import React from 'react';
import FiltersPanel from '../Filters/FiltersPanel';
import Breadcrumb from '../components/BreadCrumb';
import Card2 from '../components/CardBeta/CardBeta';

const Shop: React.FC<{}> = () => {
  return (
    <div className='content-shop'>
      {/* <div className="content-navbar"> */}
      {/* <Link to="/">
          <button>Back</button>
        </Link> */}
      {/* <div>content-navbar</div> */}
      {/* </div> */}
      {/* <button className="filter-btn-out" onClick={spanFilter} title="btn-filter" id="idButtonSpan"
       style={{
        backgroundImage: `url(${desplegarFiltro})`,
        
      }}
      ></button> */}

      <div className='shop-contain'>
        <FiltersPanel />
        <Card2 />
      </div>
      {/* <div className="content-footer">
        <div>content footer</div>
      </div> */}
      <div className='breadcrumb'>
        <div className='base'>
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
};

export default Shop;
