import React from "react";
import "./ItemFilter.css";

interface FilterByProps {
  closeItem: (e: string) => void;
  filter: string;
}

const ItemFilter: React.FC<FilterByProps> = ({ filter, closeItem }) => {
  return <div className="container-itemFilter">{filter}</div>;
};

export default ItemFilter;
