<<<<<<< HEAD
import React from 'react'
import './Shop.css'

import FiltersPanel from '../Filters/FiltersPanel'
import RenderCards from '../RenderCard/RenderCard'
import { Link } from 'react-router-dom'

const Shop: React.FC<{}> = () => {
  return (
    <>
      <Link to='/'><button>Back</button></Link>
      <div className='shop-contain'>
        <FiltersPanel />
        <RenderCards />
      </div>
    </>
  )
}
=======
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
>>>>>>> dd5c280d8f64a3a9e9a8e00a3915f5af59dfa1e8

export default Shop
