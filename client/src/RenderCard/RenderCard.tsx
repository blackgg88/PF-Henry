import React, { useEffect, useState } from 'react';
import './RenderCard.css';
import iconStar from '../assets/images/icons/star.png';
import { useAppDispatch, useAppSelector } from '../Redux/hook';
import { ProductState } from '../Redux/slice/product.slice';
import { getProduct } from '../Redux/slice/product.slice';
import { productFetch } from '../Redux/slice/ProductController';
import PaginationComp from '../components/Pagination';
import { ChangeEvent } from 'react';
import QuickLookModal from './QuickLookModal';

const RenderCard: React.FC<{}> = () => {
  const Allproduct: ProductState[] = useAppSelector(
    (state) => state.productReducer.Products,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Allproduct.length) {
      productFetch().then((res) => {
        dispatch(getProduct(res));
      });
    }
  }, [Allproduct]);

  //-----------------------> Helper Functions <----------------------

  const priceFormat = (productPrice: number) => {
    const formattedNumber = productPrice.toFixed(2);
    return formattedNumber;
  };

  //-----------------> PAGINATION <----------------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

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
    <div className='container-RenderCard'>
      <div className='container-procucts'>
        {currentItems?.map((product) => {
          return (
            <div key={product._id} className='product-card'>
              <div className='content-product-name'>
                <h3 className='product-name'>{product.name.substring(0, 51)}</h3>
              </div>
              <div className='separator-top'>.</div>
              <div className='content-images'>
                <div
                  className='image-card'
                  style={{
                    backgroundImage: `url(${product.images[0]})`,
                    backgroundSize: '85%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
              </div>
              {/* <img className="image-card" src={product.images[0]} alt="image" /> */}
              {/* <p>{product.description.substring(0,200)}...</p>  */}

              <div className='details'>
                <div className='populariry'>
                  <img src={iconStar} alt='icon' />
                  <h4 className='rating'>{product.rating}</h4>
                </div>
                <div>
                  <QuickLookModal AllProducts={Allproduct} />
                </div>
                <div className='separator'>.</div>
                <div className='value'>
                  <h4 className='price'>$ {priceFormat(product.price)}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='pagination'>
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

export default RenderCard;
