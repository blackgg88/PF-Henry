// import React from 'react';

// const favoritesModal: React.FC = () => {
//   return <div></div>;
// };

// export default favoritesModal;

import React, { useState } from 'react';
import { ProductState } from '../../Redux/slice/product/product.slice';
import { Link } from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { addProduct, deleteProduct } from '../../Redux/slice/shoppingCart/shoppingCart.slice';
import { ProductCart } from '../../Redux/slice/shoppingCart/shoppingCart.slice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { addFavorite } from '../../Redux/slice/user/user.slice';
import { addFavoriteFetch } from '../../Redux/slice/user/userController';

interface Props {
  closeModal: Function;
  favorites: ProductState[];
  user_id: string;
}

const favoritesModal: React.FC<Props> = ({ closeModal, favorites, user_id }) => {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector((state) => state.cartReducer.Products);

  const handleRemoveFavorite = async (product: ProductState) => {
    const favoritesUpdated: ProductState[] = favorites.filter(
      (favorite) => favorite._id !== product._id,
    );

    const userUpdate = await addFavoriteFetch(user_id, product, favoritesUpdated);
    dispatch(addFavorite(userUpdate.favorites));

    toast.error('Product removed from favorites', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Zoom,
    });
  };

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
      inCart: true,
    };

    toast.success('Product added to Cart', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Zoom,
    });

    dispatch(addProduct(productCart));
  };

  const handleRemoveCart = (product: ProductState) => {
    dispatch(deleteProduct(product._id));
    toast.error('Product removed from Cart', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Zoom,
    });
  };

  return (
    <>
      <div className='ModalFavorite_Overlay'>
        <div className='ModalFavorite_Container'>
          <div className='ModalFavorite_H2_and_x'>
            <h2>My Favorites</h2>
            <Button size='large' onClick={() => closeModal(false)}>
              <CloseIcon fontSize='large' />
            </Button>
          </div>

          {favorites.length ? (
            favorites.map((favorite) => (
              <div className='ModelFavorite_Item-Container'>
                <div className='ModalFavorite_TitleContainer'>{favorite.name}</div>
                <div className='ModalFavorite-Grid'>
                  <div className='ModalFavorite_Image'>
                    <Link to={`/product/${favorite._id}`}>
                      <img src={favorite.images[0]} alt={favorite.name} />
                    </Link>
                  </div>

                  <div className='ModalFavorite_info'>
                    <p>Brand: {favorite.brand}</p>
                    <p>$ {favorite.price.toFixed(2)}</p>
                    <div className='ModalFavorite_info_buttons'>
                      {favorite.stock > 0 &&
                      !productsInCart.find((el) => el._id === favorite._id) ? (
                        <div className='add-car-card-beta' onClick={() => handleAddCart(favorite)}>
                          <Button color='primary'>
                            <AddShoppingCartIcon />
                          </Button>
                        </div>
                      ) : favorite.stock > 0 &&
                        productsInCart.find((el) => el._id === favorite._id) ? (
                        <div
                          className='add-car-card-beta'
                          onClick={() => handleRemoveCart(favorite)}
                        >
                          <Button color='error'>
                            <RemoveShoppingCartIcon />
                          </Button>
                        </div>
                      ) : (
                        <div className='add-car-card-beta'>
                          <button disabled>out of Stock</button>
                        </div>
                      )}
                      <Button color='error' onClick={() => handleRemoveFavorite(favorite)}>
                        <DeleteForeverIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>You have no favorites yet</div>
          )}
        </div>
      </div>
    </>
  );
};

export default favoritesModal;
