import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { ProductState } from "../../Redux/slice/product/product.slice";
import { getProductId } from "../../Redux/slice/product/product.slice";
import { productIdFetch } from "../../Redux/slice/product/ProductController";
import { Link } from "react-router-dom";

//.........
import {
  addProduct,
  deleteProduct,
  ProductCart,
} from "../../Redux/slice/shoppingCart/shoppingCart.slice";
import { toast, Zoom } from "react-toastify";

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

import { Rating } from "@mui/material";

import star from "../../assets/images/icons/iconStartB.png";

const Detail: React.FC<{}> = () => {
  const id = useParams().id as string;
  const dispatch = useAppDispatch();

  const productDetail: ProductState = useAppSelector(
    (state) => state.productReducer.ProductDetail
  );

  const allProducts: ProductState[] = useAppSelector(
    (state) => state.productReducer.Products
  );

  const productsInCart = useAppSelector((state) => state.cartReducer.Products);
  //----------------------> SHARE FEATURE  <----------------------------

  // const currentPageUrl = window.location.href;
  // const currentPageUrl = `https://henry-pf-smartnest.netlify.app/product/${productDetail._id}`
  const currentPageUrl =
    "https://dev--kaleidoscopic-tarsier-9d0a45.netlify.app/shop";

  //-----------------------> ADD TO CART BUTTON <-------------------------

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

    dispatch(addProduct(productCart));

    toast.success("Product added to Cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });
  };

  const handleRemoveCart = (product: ProductState) => {
    dispatch(deleteProduct(product._id));

    toast.error("Product removed from Cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });
  };

  console.log("ssssssssssssssssssss", productDetail);
  const [principalImage, setPrincipalImage] = useState<string>("");
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
      (product: any) => product.categories._id === res.categories
    );

    if (aux.length > 5) aux = aux.slice(0, 5);
    setRelatedProduct(aux);
  };

  // brand:"TJOY"
  // categories:"63bebc6c001d5278f72b926c"
  // description:"Tuya Smart App Control, Group control/Music sync, Timer and Schedule, Work With Alexa/Google Assistant/Siri, RGB Color Changing/Brightness Dimmable, Tuya Smart App allows you to change color and brightness via phone. It will change the bulbs scenes follow the music you played. Also, Tuya Smart App has a timer and scheduler mode. And when you are not home, Tuya Smart APP allows you to control the bulb without distance limit."
  // images:(4)['https://m.media-amazon.com/images/I/71p+7k2OFeL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61Tzi0T2naL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81OZy+uf6XL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81z3XOeWFbL._AC_SL1500_.jpg']
  // name:"Alexa Smart Light Bulbs"
  // price:66.99
  // rating:4.2
  // stock:17
  // _id:"63c6db802aaabb925fc78a56"

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
          <div className="transaction-details">
            Description:
            <div>{productDetail.description}</div>
            <div>{productDetail.name}</div>
            <div className="rating">
              <Rating
                size="large"
                value={productDetail.rating}
                precision={0.01}
                readOnly
              />
              <div className="product-rating">{productDetail.rating}</div>
            </div>
            <div className="product-rating">stock: {productDetail.stock}</div>
            <div className="price">
              <div className="transaction-price">
                USD ${productDetail.price}
              </div>
              <div className="content-add-car-card-beta">
                {productDetail?.stock > 0 &&
                !productsInCart.find((el) => el._id === productDetail._id) ? (
                  <div
                    className="add-car-card-beta"
                    onClick={() => handleAddCart(productDetail)}
                  >
                    <p>add to Cart</p>
                  </div>
                ) : productDetail.stock > 0 &&
                  productsInCart.find((el) => el._id === productDetail._id) ? (
                  <div
                    className="add-car-card-beta"
                    onClick={() => handleRemoveCart(productDetail)}
                  >
                    <p>Remove</p>
                  </div>
                ) : (
                  <div className="add-car-card-beta">
                    <button disabled>out of Stock</button>
                  </div>
                )}
              </div>
              <div className="social-media-buttons-wrap">
                <span>Share</span>
                <div className="container-share">
                  <FacebookShareButton url={currentPageUrl}>
                    <i className="facebook">
                      <FacebookIcon size={32} round={true} />
                    </i>
                  </FacebookShareButton>
                  <TwitterShareButton url={currentPageUrl}>
                    <i className="twitter">
                      <TwitterIcon size={32} round={true} />
                    </i>
                  </TwitterShareButton>
                  <WhatsappShareButton url={currentPageUrl}>
                    <i className="whatsapp">
                      <WhatsappIcon size={32} round={true} />
                    </i>
                  </WhatsappShareButton>
                  <EmailShareButton url={currentPageUrl}>
                    <i className="email">
                      <EmailIcon size={32} round={true} />
                    </i>
                  </EmailShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-description">
        <div className="detail-detail">
          {relatedProduct?.map((product) => (
            <div className="releated-images">
              <p className="detail_product-name">{product.name}</p>
              <Link to={`/product/${product._id}`}>
                <img src={product.images[0]} alt={product.name[0]} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="comments-section">
        <div className="comments-box">
          <div
            className="fb-comments"
            data-href={`https://henry-pf-smartnest.netlify.app/product/${productDetail._id}`}
            data-width="50"
            data-numposts="5"
          ></div>
          <span
            className="fb-comments-count"
            data-href={`https://henry-pf-smartnest.netlify.app/product/${productDetail._id}`}
          ></span>
          comments
        </div>
        <div className="other-box">other-box</div>
      </div>
    </div>
  );
};

export default Detail;
