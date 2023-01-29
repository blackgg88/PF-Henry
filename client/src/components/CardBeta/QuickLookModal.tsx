import React, { useState, useEffect } from "react";
import { Modal, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ProductState } from "../../Redux/slice/product/product.slice";

import { Rating } from "@mui/material";

import "./quicklook.css";
import { Link } from "react-router-dom";

interface Props {
  product: ProductState;
  handleAddCart: (product: ProductState) => void;
  priceFormat: (price: number) => void;
}

const QuickLookModal: React.FC<Props> = ({
  product,
  handleAddCart,
  priceFormat,
}) => {
  const [showModal, setShowModal] = useState(false);

  const [mainImage, setMainImage] = useState("");
  const thumbnailImages = product.images?.filter(
    (image) => image !== mainImage
  );

  useEffect(() => {
    setMainImage(product.images[0]);
  }, [product]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>
        <VisibilityIcon />
      </Button>
      <Modal open={showModal} onClose={handleCloseModal} className="modal">
        <div className="paper">
          <div className="product-info">
            <div className="modal-images">
              <div className="main-image-container">
                <img src={mainImage} className="main-image" />
              </div>
              <div className="thumbnail-container">
                {thumbnailImages?.map((image, i) => (
                  <img
                    src={image}
                    key={i}
                    className="thumbnail-image"
                    onMouseEnter={() => setMainImage(image)}
                  />
                ))}
              </div>
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
