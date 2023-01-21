import React, { useEffect, useState } from "react";
// import { useState } from "react";
import Rating from "@mui/material"
import { Box, Button, Modal, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";


//-------------------------------------------------

import { useAppDispatch, useAppSelector } from '../Redux/hook';
import { ProductState } from '../Redux/slice/product.slice';
import { getProductId } from '../Redux/slice/product.slice';
import { productIdFetch } from '../Redux/slice/ProductController';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
 id: string
}

const QuickLookModal: React.FC<ModalProps> = ({id}) => {
  const product: ProductState = useAppSelector(
    (state) => state.productReducer.ProductDetail,
  );
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) {
      productIdFetch(id).then((res) => {
        dispatch(getProductId(res));
      });
    }
  }, [id]);

  return (
    <div>
    <Button onClick={handleOpen}>
      <VisibilityIcon />
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {product.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {product.images}
        </Typography>
        <Rating name="product-rating" value={product.rating} readOnly />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {product.price}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {product.brand}
        </Typography>
      </Box>
    </Modal>
  </div>
  );
};

export default QuickLookModal;
