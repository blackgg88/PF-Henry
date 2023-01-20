import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import {
  ProductCart,
  changeQuantity,
  deleteProduct,
} from '../../Redux/slice/shoppingCart/shoppingCart.slice';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const ShoppingCart = () => {
  const [total, setTotal] = useState(0);
  const productsInCart = useAppSelector((state) => state.cartReducer.Products);

  console.log(productsInCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleTotal();
  }, [productsInCart]);

  const handleSetQuantity = (e: SelectChangeEvent<number>, id: string) => {
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
                    <FormControl fullWidth>
                      <InputLabel id='id_quantity'>Quantity</InputLabel>
                      <Select
                        labelId='id_quantity'
                        id='demo-simple-select'
                        value={ele.quantity}
                        label='Quantity'
                        onChange={(e) => handleSetQuantity(e, ele._id)}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
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
