import { useState, useEffect } from "react";
import NavBar from "../Navbar";
import DetailProduct from "./DetailProduct";

const Detail: React.FC<{}> = () => {
  return (
    <div>
      <NavBar />
      <DetailProduct />
    </div>
  );
};

export default Detail;
