import React, { useEffect, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import iconStarB from "../../assets/images/icons/iconStartB.png";
import iconStarW from "../../assets/images/icons/iconStartW.png";
import iconStarM from "../../assets/images/icons/iconStartM.png";
import { Rating } from "@mui/material";
import { toast, Zoom } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import {
  addFavoriteFetch,
  removeFavoriteFetch,
} from "../../Redux/slice/user/userController";
import { addFavorite } from "../../Redux/slice/user/user.slice";
import { userInterface, getUserLogin } from "../../Redux/slice/user/user.slice";

import { ProductState } from "../../Redux/slice/product/product.slice";
import { getProduct } from "../../Redux/slice/product/product.slice";
import {
  productFetch,
  productIdFetch,
} from "../../Redux/slice/product/ProductController";
import PaginationComp from "../Pagination";
import QuickLookModal from "./QuickLookModal";
import { useAuth0 } from "@auth0/auth0-react";

import {
  addProduct,
  deleteProduct,
} from "../../Redux/slice/shoppingCart/shoppingCart.slice";
import { ProductCart } from "../../Redux/slice/shoppingCart/shoppingCart.slice";
import { Favorite } from "@mui/icons-material";
import { any, object } from "prop-types";

import favoriteUnset_w from "../../assets/images/icons/favorite/favorite_w.png";
import favoriteSet_w from "../../assets/images/icons/favorite/favorite_b.png";
import AddFavoritesModal from "./AddFavoritesModal";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const CardBeta: React.FC<{}> = () => {
  const Allproduct: ProductState[] = useAppSelector(
    state => state.productReducer.Products
  );
  const productsInCart = useAppSelector(state => state.cartReducer.Products);
  const userByBd: userInterface = useAppSelector(
    state => state.userReducer.userState
  );
  const [getFavorites, setGetFavorites] = useState<ProductState[]>([]);

  // const user = useAppSelector((state) => state.userReducer.userState);

  // if (userByBd.favorites) {
  //   getFavorites = userByBd.favorites;
  //   console.log('GET', getFavorites);
  // } else if (userByBd.favorites) {
  //   userByBd.favorites.map((favorite: ProductState) => {
  //     getFavorites.push(favorite);
  //   });
  //   console.log('GET', getFavorites);
  // }

  const dispatch = useAppDispatch();

  const stars = [1, 2, 3, 4, 5];
  useEffect(() => {
    if (!Allproduct.length) {
      productFetch().then(res => {
        dispatch(getProduct(res));
      });
    }
  }, [Allproduct]);

  //--------------------------->  CART CARD FEATURES

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

  // const product = state.Products.find

  //----------------------> FAVORITES CARD FEATURES
  const [modalOpen, setModalOpen] = useState(false);

  const { user, isAuthenticated } = useAuth0();

  //!--------------------------------------------------------------------------------------
  const handleToggleFavorite = async (product: ProductState) => {
    if (isAuthenticated && user?.email_verified) {
      const newFavorite: ProductState = {
        _id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        brand: product.brand,
        images: product.images,
        rating: product.rating,
        categories: product.categories,
        stock: product.stock,
        isActive: product.isActive,
      };

      let actualFavorites: ProductState[] = userByBd.favorites;

      // if (userByBd.favorites) {
      //   actualFavorites = userByBd.favorites;
      // } else if (userByBd.favorites) {
      //   actualFavorites = userByBd.favorites;
      // }
      //console.log("user",user)
      //console.log("user.favorites",user.favorites)

      // let newFavorites: ProductState[] = [];
      // let add = true;
      //console.log("actualFavorites:___A", actualFavorites, product);
      if (!actualFavorites.length) {
        actualFavorites = [newFavorite];
      } else {
        // actualFavorites.map((favorite) => {
        //   if (favorite._id !== newFavorite._id) {
        //     actualFavorites = [...actualFavorites, newFavorite];
        //   } else {
        //     actualFavorites = actualFavorites.filter(
        //       (favorite) => favorite._id !== newFavorite._id,
        //     );
        //   }
        // });

        const findFavo = actualFavorites.find(
          favorite => favorite._id === newFavorite._id
        );

        if (findFavo?._id) {
          actualFavorites = actualFavorites.filter(
            favorite => favorite._id !== newFavorite._id
          );

          toast.error("Product removed from favorites", {
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
        } else {
          actualFavorites = [...actualFavorites, newFavorite];

          toast.success("Product added to favorites", {
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
        }
      }

      const userUpdate = await addFavoriteFetch(
        userByBd._id,
        newFavorite,
        actualFavorites
      );
      dispatch(addFavorite(userUpdate.favorites));
      setGetFavorites(userUpdate.favorites);
    } else {
      setModalOpen(true);
    }
  };

  //!--------------------------------------------------------------------------------------
  //!--------------------------------------------------------------------------------------
  //handleToggleFavorite({});
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

  useEffect(() => {
    if (isAuthenticated) {
      setGetFavorites(userByBd.favorites);
    } else {
      setGetFavorites([]);
    }
  }, [isAuthenticated]);

  return (
    <div className='container-render-card-v-beta'>
      <div className='container-card-beta'>
        {currentItems?.map(product => {
          let iconFavorite = favoriteUnset_w;

          getFavorites.map(favorite => {
            if (favorite._id === product._id) {
              iconFavorite = favoriteSet_w;
            }
          });

          return (
            <div key={product._id} className='product-card-beta'>
              <div className='header-card-beta'>
                <div
                  className='container-favorite'
                  onClick={() => handleToggleFavorite(product)}
                >
                  <img src={iconFavorite} alt={iconFavorite} />
                </div>

                <QuickLookModal
                  product={product}
                  handleAddCart={handleAddCart}
                  priceFormat={priceFormat}

                  // handleCloseModal={handleCloseModal}
                  // showModal={showModal}
                />
              </div>

              <div className='content-image-card-beta'>
                <Link
                  className='link-image-card'
                  to={`/product/${product._id}`}
                >
                  <img
                    className='image-card'
                    src={product.images[0]}
                    alt='image'
                  />
                </Link>
              </div>

              <div className='content-title-description-card-beta'>
                <h3 className='product-name-card-beta'>
                  {product.name.substring(0, 25)}...
                </h3>

                <p className='product-description-card-beta'>
                  {product.description.substring(0, 57)}...
                </p>
              </div>

              <div className='content-value-rating-card-beta'>
                <div className='content-rating-card-beta'>
                  <Rating
                    size='small'
                    value={product.rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
                
                <div className='content-value-card-beta'>
                  <h4 className='price2'>$ {priceFormat(product.price)}</h4>
                </div>
              </div>

              <div className='content-add-car-card-beta'>
                {product.stock > 0 &&
                !productsInCart.find(el => el._id === product._id) ? (
                  <div
                    className='add-car-card-beta'
                    onClick={() => handleAddCart(product)}
                  >
                    <p>add to Cart</p>
                  </div>
                ) : product.stock > 0 &&
                  productsInCart.find(el => el._id === product._id) ? (
                  <div
                    className='add-car-card-beta'
                    onClick={() => handleRemoveCart(product)}
                  >
                    <p>Remove</p>
                  </div>
                ) : (
                  <div className='add-car-card-beta'>
                    <button disabled>out of Stock</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {modalOpen && <AddFavoritesModal />}
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
