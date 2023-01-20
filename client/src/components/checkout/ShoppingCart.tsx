import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import {
  ProductCart,
  changeQuantity,
  deleteProduct,
} from '../../Redux/slice/shoppingCart/shoppingCart.slice';

const ShoppingCart = () => {
  const [total, setTotal] = useState(0);
  const productsInCart = useAppSelector((state) => state.cartReducer.Products);

  console.log(productsInCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleTotal();
  }, [productsInCart]);

  const handleSetQuantity = (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
    const quantity = Number(e.target.value);
    dispatch(changeQuantity({ id, quantity }));
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const handleTotal = () => {
    const total = productsInCart
      .reduce((acc, product) => acc + product.quantity * product.price, 0)
      .toFixed(2);

    setTotal(Number(total));
  };

  return (
    <div className='ShoppingCart_contain'>
      <div className='ShoppingCart_title'>
        <h1>Shopping Cart</h1>
      </div>
      <div className='ShoppingCart_info'>
        <div className='ShoppingCart_items-container'>
          <div className='ShoppingCart_items-titles'>
            <div>PRODUCT</div>
            <div>QUANTITY</div>
            <div>PRICE</div>
          </div>
          <div className='ShoppingCart_items'>
            {productsInCart?.map((ele: ProductCart) => {
              return (
                <div key={ele._id} className='ShoppingCart_item-wrapper'>
                  <div className='ShoppingCart_image'>
                    <img src={ele.images[0]} alt={ele.name} />
                  </div>
                  <div className='ShoppingCart_description'>
                    <p className='ShoppingCart_name'>{ele.name}</p>
                    <p className='ShoppingCart_category'>
                      Category: {ele.categories.name}
                    </p>
                    <p className='ShoppingCart_brand'>Brand: {ele.brand}</p>
                  </div>
                  <div className='ShoppingCart_quantity-container'>
                    <select
                      name='quantity'
                      value={ele.quantity}
                      onChange={(e) => handleSetQuantity(e, ele._id)}
                    >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                  </div>
                  <div className='ShoppingCart_price'>
                    <p>${(ele.price * ele.quantity).toFixed(2)}</p>
                  </div>
                  <div className='ShoppingCart_button-remove'>
                    <button onClick={() => handleRemoveProduct(ele._id)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='ShoppingCart_purchases'>
          <div className='ShoppingCart_total_amount'>Total: ${total}</div>
          <div className='ShoppingCart_confirm-button'>
            <Link to={`/checkout`}>
              <button>Confirm purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
