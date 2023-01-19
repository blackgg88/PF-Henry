import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { ProductState } from '../../Redux/slice/product.slice';
import { getProductId } from '../../Redux/slice/product.slice';
import { productIdFetch } from '../../Redux/slice/ProductController';
import { Link } from 'react-router-dom';

const DetailProduct: React.FC<{}> = () => {
  const id = useParams().id as string;
  const dispatch = useAppDispatch();

  const productDetail: ProductState = useAppSelector(
    (state) => state.productReducer.ProductDetail,
  );

  const allProducts: ProductState[] = useAppSelector(
    (state) => state.productReducer.Products,
  );

  const [principalImage, setPrincipalImage] = useState<string>('');
  const [relatedProduct, setRelatedProduct] = useState<ProductState[]>([]);

  useEffect(() => {
    productIdFetch(id).then((res) => {
      dispatch(getProductId(res));
      handleFilter(res);
      setPrincipalImage(res.images[0]);
    });
  }, [id]);

  const handleSetImage = (image: string) => {
    setPrincipalImage(image);
  };

  const handleFilter = (res: ProductState) => {
    let aux = allProducts.filter(
      (product: any) =>
        product.categories.findIndex((cat: any) => cat._id === res.categories[0]) > -1,
    );

    if (aux.length > 5) aux = aux.slice(0, 5);
    setRelatedProduct(aux);
  };

  return (
    <div className='detail-contain'>
      <div className='info-pincipal-detail'>
        <div className='land-images'>
          {productDetail?.images?.map((image) => (
            <div key={image.slice(5)} className='secondary-images'>
              <img
                src={image}
                onMouseOver={() => {
                  handleSetImage(image);
                }}
              />
            </div>
          ))}
        </div>
        <div className='imagen-principal-detail'>
          <div className='principal-image'>
            <img src={principalImage} alt={productDetail.name} />
          </div>
        </div>
        <div className='principal-details'>
          <div className='character-details'>
            <div className='product-detail'>
              <div>{productDetail.name}</div>
            </div>
            <div className='product-brand'>Brand: {productDetail.brand}</div>

            <div className='product-description'>
              Description:
              <div>{productDetail.description}</div>
            </div>
          </div>
          <div className='transaction-details'>
            transaction details:
            <div className='price_rating'>
              <div className='product-rating'>Rating: {productDetail.rating}</div>
              <div className='transaction-price'>${productDetail.price}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-description'>
        <div className='detail-detail'>
          {relatedProduct?.map((product) => (
            <div className='releated-images'>
              <p className='detail_product-name'>{product.name}</p>
              <Link to={`/product/${product._id}`}>
                <img src={product.images[0]} alt={product.name[0]} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='comments-section'>
        <div className='comments-box'>
          <div
            className='fb-comments'
            data-href='https://developers.facebook.com/docs/plugins/comments#configurator'
            data-width='50'
            data-numposts='5'
          ></div>
          comments
        </div>
        <div className='other-box'>other-box</div>
      </div>
    </div>
  );
};

export default DetailProduct;
