import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../Redux/hook';
import { ProductCart } from '../Redux/slice/shoppingCart/shoppingCart.slice';

const ShoppingCart = () => {
  const productsInCart = useAppSelector((state) => state.cartReducer.Products);
  console.log(productsInCart);

  return (
    <div className='ShoppingCart_contain'>
      <div className='ShoppingCart_title'>
        <h1>Shopping Cart</h1>
      </div>
      <div className='ShoppingCart_info'>
        <div className='ShoppingCart_items-container'>
          <div className='ShoppingCart_items'>
            {productsInCart?.map((ele: ProductCart) => (
              <div key={ele._id} className='ShoppingCart_item-wrapper'>
                <div className='ShoppingCart_image'>
                  <img src={ele.images[0]} alt={ele.name} />
                </div>
                <div className='ShoppingCart_description'>
                  <p className='ShoppingCart_name'>{ele.name}</p>
                  <p className='ShoppingCart_category'>Category: {ele.categories.name}</p>
                  <p className='ShoppingCart_brand'>Brand: {ele.brand}</p>
                </div>
                <div className='ShoppingCart_quantity-container'>
                  <select name='quantity'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>
                </div>
                <div className='ShoppingCart_price'>
                  <p>${ele.price.toFixed(2)}</p>
                </div>
                <div className='ShoppingCart_button-remove'>
                  <button>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='ShoppingCart_purchases'>
          <div className='ShoppingCart_total_amount'>aqui la info de la plata</div>
          <div className='ShoppingCart_confirm-button'>aqui boton para comprar</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
