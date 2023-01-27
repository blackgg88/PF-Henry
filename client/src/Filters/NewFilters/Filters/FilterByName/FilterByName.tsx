import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../../Redux/hook";
// import { getProductName } from "../../Redux/slice/product.slice";
import { getProductName, ProductState } from "../../../../Redux/slice/product/product.slice";
import "./FilterByName.css";
import icon from "../../../../assets/images/icons/search_icon_w.png";
// import {productName} from "../../Redux/slice/ProductController"
import { productName } from "../../../../Redux/slice/product/ProductController"
// import { ProductState } from "../../Redux/slice/product.slice";
import { TextField, Input, List, ListItem, ListItemText } from "@mui/material"

const FilterByName: React.FC<{}> = () => {
  const [name, setName] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useAppDispatch();

  const Product: ProductState[] = useAppSelector(
    state => state.productReducer.Products
  );

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    const filteredSuggestions = Product?.filter((el) => {
      const searchTerm = name.toLocaleLowerCase();
      const prodName = el.name.toLocaleLowerCase();
      return (
        searchTerm && prodName.includes(searchTerm) && prodName !== searchTerm
      );
    }).slice(0, 5).map((el) => el.name);

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  // const handlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    productName(name)
      .then(response => {
        dispatch(getProductName(response));
      }).then(products => {
        return Product;
      });
    setName("");
    setShowSuggestions(false);
  };

  return (
    <form className="new-container-filterBy-c" onSubmit={handlerSubmit}>

      <div className="input">
        <input
          className='input-filterByName'
          type='text'
          id='inputName'
          value={name}
          placeholder="Search..."
          onChange={e => handleName(e)}
        />

        <button className='🔍' type='submit'>
          <img className='img-btn' src={icon} alt='icon' />
        </button>

      </div>




      {showSuggestions && (
        <select className="suggestions-dropdown">
          {suggestions.slice(0, 5).map((el) => (
            <Link className="link" to={`/product/${Product.find(p => p.name === el)?._id}`}>
              <div
                className="suggestion-row"
                onClick={() => setName(el)}
              >
                {el.slice(0,20)} ...
              </div>
            </Link>

          ))}
        </select>
      )}
    </form>
  );

  // return (
  //   <form onSubmit={handlerSubmit}>
  //     <div className='new-container-filterBy-c'>
  //     {/* <TextField value={name} onChange={e => handlerName(e)}  variant="filled"/> */}
  //     {/* <Input 
  //    color="primary"
  //     className="input-name"
  //     size="small" placeholder="Search..." onChange={e => handlerName(e)} /> */}
  //       <input
  //         className='input-filterByName'
  //         type='text'
  //         id='inputName'
  //         value={name}
  //         placeholder="Search"
  //         onChange={e => handlerName(e)}
  //       />


  //     </div>
  //   </form>
  // );
};

export default FilterByName;