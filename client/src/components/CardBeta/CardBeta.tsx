import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import iconStarB from '../../assets/images/icons/iconStartB.png';
import iconStarW from '../../assets/images/icons/iconStartW.png';
import iconStarM from '../../assets/images/icons/iconStartM.png';

import { useAppDispatch, useAppSelector } from '../../Redux/hook';

import { ProductState } from '../../Redux/slice/product/product.slice';
import { getProduct } from '../../Redux/slice/product/product.slice';
import { productFetch } from '../../Redux/slice/product/ProductController';
import PaginationComp from '../Pagination';
//import QuickLookModal from './QuickLookModal';

import { addProduct } from '../../Redux/slice/shoppingCart/shoppingCart.slice';
import { ProductCart } from '../../Redux/slice/shoppingCart/shoppingCart.slice';

const CardBeta: React.FC<{}> = () => {
  const Allproduct: ProductState[] = useAppSelector(
    (state) => state.productReducer.Products,
  );

  const productsInCart = useAppSelector((state) => state.cartReducer.Products);

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
    dispatch(addProduct(productCart));
  };

  //-----------------------> Helper Functions <----------------------

  const priceFormat = (productPrice: number) => {
    const formattedNumber = productPrice.toFixed(2);
    return formattedNumber;
  };

  //-----------------> PAGINATION <----------------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

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
    <div className='container-render-card-v-beta'>
      <div className='container-card-beta'>
        {currentItems?.map((product) => {
          return (
            // <div key={product._id} className='product-card2'>
            //   <div className='content-product-name2'>
            //     <h3 className='product-name2'>{product.name.substring(0, 51)}</h3>
            //   </div>
            //   <div className='separator-top2'>.</div>
            //   <div className='content-images2'>
            //       <Link to={`/product/${product._id}`}>
            //     <div
            //       className='image-card2'
            //       style={{
            //         backgroundImage: `url(${product.images[0]})`,
            //         backgroundSize: '85%',
            //         backgroundPosition: 'center',
            //         backgroundRepeat: 'no-repeat',
            //       }}
            //       ></div>
            //       </Link>
            //   </div>
            //   {/* <img className="image-card" src={product.images[0]} alt="image" /> */}
            //   {/* <p>{product.description.substring(0,200)}...</p>  */}

            //   <div className='details2'>
            //     <div className='populariry2'>
            //       <img src={iconStar} alt='icon' />
            //       <h4 className='rating2'>{product.rating}</h4>
            //     </div>
            //     <div>
            //       {/* <QuickLookModal id={product._id}/> */}
            //     </div>
            //     <div className='separator2'>.</div>
            //     <div className='value2'>
            //       <h4 className='price2'>$ {priceFormat(product.price)}</h4>
            //     </div>
            //   </div>
            // </div>
            <div key={product._id} className='product-card-beta'>
              <div className='header-card-beta'>n e w</div>
              <div className='content-image-card-beta'>
                <Link to={`/product/${product._id}`}>
                  <img className='image-card' src={product.images[0]} alt='image' />
                </Link>
              </div>
              <div className='content-title-description-card-beta'>
                <div className='content-title-card-beta'>
                  <h3 className='product-name-card-beta'>
                    {product.name.substring(0, 25)}...
                  </h3>
                </div>
                <div className='content-description-card-beta'>
                  <p>{product.description.substring(0, 57)}...</p>
                </div>
              </div>
              <div className='content-value-rating-card-beta'>
                <div className='content-rating-card-beta'>
                  {stars.map((star) => {
                    if (star < product.rating && star + 1 > product.rating) {
                      return <img src={iconStarM} />;
                    } else if (star < product.rating) {
                      return <img src={iconStarB} />;
                    } else {
                      return <img src={iconStarW} />;
                    }
                  })}
                </div>
                <div className='content-value-card-beta'>
                  <h4 className='price2'>$ {priceFormat(product.price)}</h4>
                </div>
              </div>
              <div className='content-add-car-card-beta'>
                <div className='add-car-card-beta' onClick={() => handleAddCart(product)}>
                  add to Car
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
  );
};

export default CardBeta;
