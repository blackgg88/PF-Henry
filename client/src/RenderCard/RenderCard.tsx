import React, { useEffect, useCallback } from 'react';
import './RenderCard.css';
import { useAppDispatch, useAppSelector } from '../Redux/hook';
import { ProductState } from '../Redux/slice/product/product.slice';
import { getProduct } from '../Redux/slice/product/product.slice';
import { productFetch } from '../Redux/slice/product/ProductController';
import { Link } from 'react-router-dom';

import { addProduct } from '../Redux/slice/shoppingCart/shoppingCart.slice';
import { ProductCart } from '../Redux/slice/shoppingCart/shoppingCart.slice';

const RenderCard: React.FC<{}> = () => {
  const Allproduct: ProductState[] = useAppSelector(
    (state) => state.productReducer.Products,
  );

  const productsInCart = useAppSelector((state) => state.cartReducer.Products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Allproduct.length) {
      productFetch().then((res) => {
        dispatch(getProduct(res));
      });
    }
  }, [Allproduct]);

  const handleAddCart = (product: ProductState) => {
    const productCart: ProductCart = {
      _id: product._id,
      name: product.name,
      price: product.price,
      brand: product.brand,
      images: product.images,
      categories: product.categories,
      stock: product.stock,
      quantity: 1,
    };
    dispatch(addProduct(productCart));
  };

  return (
    <div className='container-RenderCard'>
      {Allproduct?.map((product) => {
        return (
          <div key={product._id} className='ProductCard'>
            <h3>{product.name}</h3>
            <Link to={`/product/${product._id}`}>
              <img src={product.images[0]} alt='image' />
            </Link>
            <p>{product.description.substring(0, 200)}...</p>
            <h4>Price: {product.price}$</h4>
            <button onClick={() => handleAddCart(product)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default RenderCard;
