import { useState, useEffect } from "react";
import NavBar from "../navbar/Navbar";
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
