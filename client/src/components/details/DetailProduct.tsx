import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { ProductState } from "../../Redux/slice/product.slice";
import { getProductId } from "../../Redux/slice/product.slice";
import { productIdFetch } from "../../Redux/slice/ProductController";

const DetailProduct: React.FC<{}> = () => {
  const id = useParams().id as string;
  const dispatch = useAppDispatch();

  const productDetail: ProductState = useAppSelector(
    (state) => state.productReducer.ProductDetail
  );

  const allProducts: ProductState[] = useAppSelector(
    (state) => state.productReducer.Products
  );

  const [principalImage, setPrincipalImage] = useState<string>("");
  const [relatedProduct, setRelatedProduct] = useState<ProductState[]>([]);

  useEffect(() => {
    productIdFetch(id).then((res) => {
      dispatch(getProductId(res));
      setPrincipalImage(res.images[0]);
    });

    // handleFilter();
  }, [id]);

  const handleSetImage = (image: string) => {
    setPrincipalImage(image);
  };

  const handleFilter = () => {
    setRelatedProduct(
      allProducts.filter(
        (product: any) =>
          product.categories.findIndex(
            (cat) => cat._id === productDetail.categories[0]
          ) > -1
      )
    );
  };

  console.log(productDetail.categories[0]);
  console.log(relatedProduct);

  return (
    <div className="detail-contain">
      <div className="info-pincipal-detail">
        <div className="land-images">
          {productDetail?.images?.map((image) => (
            <div key={image.slice(5)} className="secondary-images">
              <img
                src={image}
                onMouseOver={() => {
                  handleSetImage(image);
                }}
              />
            </div>
          ))}
        </div>
        <div className="imagen-principal-detail">
          <div className="principal-image">
            <img src={principalImage} alt={productDetail.name} />
          </div>
        </div>
        <div className="principal-details">
          <div className="character-details">
            <div className="product-detail">
              <div>{productDetail.name}</div>
            </div>
            <div className="product-brand">Brand: {productDetail.brand}</div>

            <div className="product-description">
              Description:
              <div>{productDetail.description}</div>
            </div>
          </div>
          <div className="transaction-details">
            transaction details:
            <div className="price_rating">
              <div className="product-rating">
                Rating: {productDetail.rating}
              </div>
              <div className="transaction-price">${productDetail.price}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-description">
        <div className="detail-detail"></div>
      </div>
      <div className="comments-section">
        <div className="comments-box">
          <div
            className="fb-comments"
            data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
            data-width="50"
            data-numposts="5"
          ></div>
          comments
        </div>
        <div className="other-box">other-box</div>
      </div>
    </div>
  );
};

export default DetailProduct;
