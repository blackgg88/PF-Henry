import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import iconStarB from '../../assets/images/icons/iconStartB.png';
import iconStarW from '../../assets/images/icons/iconStartW.png';
import iconStarM from '../../assets/images/icons/iconStartM.png';
import { Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; //corazon vacio como el de ella
import FavoriteIcon from '@mui/icons-material/Favorite'; //corazon lleno como nadie en mi vida UwU
import { toast, Zoom } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { addFavoriteFetch } from '../../Redux/slice/user/userController';
import { addFavorite } from '../../Redux/slice/user/user.slice';
import { userInterface } from '../../Redux/slice/user/user.slice';

import { ProductState } from '../../Redux/slice/product/product.slice';
import { getProduct } from '../../Redux/slice/product/product.slice';
import { productFetch, productIdFetch } from '../../Redux/slice/product/ProductController';
import PaginationComp from '../Pagination';
import QuickLookModal from './QuickLookModal';

import { addProduct } from '../../Redux/slice/shoppingCart/shoppingCart.slice';
import { ProductCart } from '../../Redux/slice/shoppingCart/shoppingCart.slice';

const CardBeta: React.FC<{}> = () => {
  const Allproduct: ProductState[] = useAppSelector((state) => state.productReducer.Products);

  const userByBd: userInterface = useAppSelector((state) => state.userReducer.userState);

  //console.log(Allproduct)
  const dispatch = useAppDispatch();
  const stars = [1, 2, 3, 4, 5];
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

    toast.success('Product added', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Zoom,
    });

    dispatch(addProduct(productCart));
  };

  const handleAddFavorite = async (product: ProductState) => {
    const favorite: ProductState = {
      _id: product._id,
      name: product.name,
      price: product.price,
      description: product.description,
      brand: product.brand,
      images: product.images,
      rating: product.rating,
      categories: product.categories,
      stock: product.stock,
    };

    const favorites: ProductState[] = await addFavoriteFetch(userByBd._id, favorite);

    dispatch(addFavorite(favorites));
  };

  //-----------------------> Helper Functions <----------------------

  const priceFormat = (productPrice: number) => {
    const formattedNumber = productPrice.toFixed(2);
    return formattedNumber;
  };

  //-----------------> PAGINATION <----------------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // const handlePageChange = (event: ChangeEvent<unknown>) => {
  //   const pageNumber = Number((event.currentTarget as HTMLInputElement).value);
  //   if (!isNaN(pageNumber)) {
  //     setCurrentPage(pageNumber);
  //   }
  // };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Allproduct.slice(indexOfFirstItem, indexOfLastItem);

  //-----------------------> QUICKLOOK MODAL  <-------------------------------

  return (
    <>
      <div className='container-render-card-v-beta'>
        <div className='container-card-beta'>
          {currentItems?.map((product) => {
            return (
              <div key={product._id} className='product-card-beta'>
                <div className='header-card-beta'>
                  n e w
                  <QuickLookModal
                    product={product}
                    handleAddCart={handleAddCart}
                    priceFormat={priceFormat}
                    // handleCloseModal={handleCloseModal}
                    // showModal={showModal}
                  />
                </div>
                <div className='content-image-card-beta'>
                  <Link className='link-image-card' to={`/product/${product._id}`}>
                    <img className='image-card' src={product.images[0]} alt='image' />
                  </Link>
                </div>
                <div className='content-title-description-card-beta'>
                  <div className='content-title-card-beta'>
                    <h3 className='product-name-card-beta'>{product.name.substring(0, 25)}...</h3>
                  </div>
                  <div className='content-description-card-beta'>
                    <p className='product-description-card-beta'>
                      {product.description.substring(0, 57)}...
                    </p>
                  </div>
                </div>
                <div className='content-value-rating-card-beta'>
                  <div className='content-rating-card-beta'>
                    <Rating size='small' value={product.rating} precision={0.01} readOnly />
                    {/* {stars.map((star) => {
                    if (star < product.rating && star + 1 > product.rating) {
                      return <img key={productIdFetch+iconStarM+product.rating} src={iconStarM} />;
                    } else if (star < product.rating) {
                      return <img key={productIdFetch+iconStarB+product.rating} src={iconStarB} />;
                    } else {
                      return <img key={productIdFetch+iconStarW+product.rating} src={iconStarW} />;
                    }
                  })} */}
                  </div>
                  <div className='content-value-card-beta'>
                    <h4 className='price2'>$ {priceFormat(product.price)}</h4>
                  </div>
                </div>
                <div className='content-add-car-card-beta'>
                  <div className='add-car-card-beta' onClick={() => handleAddCart(product)}>
                    <p>add to Cart</p>
                  </div>
                  <div onClick={() => handleAddFavorite(product)}>
                    <FavoriteBorderIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='pagination2'>
          <PaginationComp
            itemsPerPage={itemsPerPage}
            totalItems={Allproduct.length}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default CardBeta;
