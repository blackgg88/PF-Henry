import React from 'react';
import { useAppSelector } from '../../Redux/hook'
import { dbPrueba } from './dbPrueba';

export const AllProducts = () => {

    const Allproduct = useAppSelector( state => state.cardReducer) 

  return (
    <div>
        {
            dbPrueba.map( product => {
                return (
                    <div>
                        <h3>{product.name}</h3>
                        <img src={product.images[0]} alt="productImage"/>
                        <h5>Price: {product.price}</h5>
                        <h5>stock: {product.stock}</h5>
                        <h5>Category: {product.categories}</h5>
                        <h5>rating: {product.rating} Stars</h5>
                        <p>{product.description}</p>
                        <h5>brand: {product.brand}</h5>
                        <hr/>
                    </div>
                    
                )
            })
        }
    </div>
  )
}
