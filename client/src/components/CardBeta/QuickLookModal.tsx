import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { ProductState } from "../../Redux/slice/product/product.slice";

import { Rating } from "@mui/material";
import Slider from "react-slick";

import "./quicklook.css";
import { Link } from "react-router-dom";

interface Props {
  product: ProductState;
  handleAddCart: (product: ProductState) => void;
  priceFormat: (price: number) => void;
  //     handleCloseModal: () => void;
  //     showModal: boolean;
}

const QuickLookModal: React.FC<Props> = ({
  product,
  handleAddCart,
  priceFormat,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const settings = {
    // dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const LeftArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <ChevronLeft />
      </div>
    );
  };

  const RightArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <ChevronRight />
      </div>
    );
  };
  return (
    <div>
      <Button onClick={handleOpenModal}>
        <VisibilityIcon />
      </Button>
      <Modal open={showModal} onClose={handleCloseModal} className="modal">
        <div className="paper">
          <div className="product-info">
            <div className="slider-container">
              <Slider
                prevArrow={<LeftArrow />}
                {...settings}
                nextArrow={<RightArrow />}
                className="carousel"
              >
                {product?.images?.map((image: string) => (
                  <div className="img-wrapper">
                    <img src={image} key={image} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="product-details-container">
              <div className="product-name">{product.name}</div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-rating">
                <Rating value={product.rating} precision={0.1} readOnly />
                {/* <div className="product-price">
                  $ {priceFormat(product.price)}
               </div> */}
                <Button
                  className="add-to-cart-button"
                  onClick={() => handleAddCart(product)}
                >
                  Add to Cart
                </Button>
                <Link to={`/product/${product._id}`}>
                  <Button className="see-more-button">See More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default QuickLookModal;
