import React, { useState, useEffect } from "react";
import { API_URL } from "../../../config";

import { Rating, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

//------------
import { toast, Zoom } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import RateModal from "./RateModal";

interface Props {
  id: string;
}

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Ratingcomp: React.FC<Props> = ({ id }) => {
  const [rating, setRating] = useState<number | null>(2.5);
  const [hover, setHover] = useState(-1);

  //-------------------> LOGGED USER <-----------------------

  const [modalOpen, setModalOpen] = useState(false);

  const { user, isAuthenticated } = useAuth0();

  //--------------------------------------------------------

  const handleSubmit = async (rating: number | null) => {
    if (!isAuthenticated) {
      setModalOpen(true);
      return;
    }
    try {
      const response = await fetch(`${API_URL}/products/${id}/ratings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating }),
      });
      const data = await response.json();
      console.log(data.message);

      toast.success("Rating submitted", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log("rating: ", rating);
  }, [rating]);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("rating: ", rating);
          handleSubmit(rating);
        }}
      >
        <Rating
          size="large"
          name="hover-feedback"
          value={rating}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {rating !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
        )}

        <button type="submit"> Rate</button>
      </form>
      {modalOpen && <RateModal />}
    </div>
  );
};

export default Ratingcomp;
