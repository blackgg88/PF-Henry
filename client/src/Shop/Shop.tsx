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

export default Shop
