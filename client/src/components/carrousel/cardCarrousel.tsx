import React from "react";
import iconStarB from "../../assets/images/icons/iconStartB.png";
import iconStarW from "../../assets/images/icons/iconStartW.png";
import iconStarM from "../../assets/images/icons/iconStartM.png";

interface cards {
  name: string;
  images: string;
  description: string;
  rating: number;
  price: number;
}

const Card = ({ name, images, description, rating, price }: cards) => {
  return (
    <div className="cardCarrousel">
      <div className="HomeCard_HeaderContainer">
        <p>new</p>
      </div>
      <div className="HomeCard_ImageContainer">
        <img src={images} alt="image_product" />
      </div>
      <div className="HomeCard_NameContainer">
        <h1>{name}...</h1>
      </div>
      <div className="HomeCard_DescriptionContainer">
        <p>{description.substring(0, 50).toLowerCase()}...</p>
      </div>
      <div className="HomeCard_RatingContainer">
        {[...new Array(Math.floor(rating))].map((e) => {
          return <img src={iconStarB} alt="" />;
        })}
        <img src={iconStarM} alt="" />
      </div>
      <div className="HomeCard_PriceContainer">
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Card;
