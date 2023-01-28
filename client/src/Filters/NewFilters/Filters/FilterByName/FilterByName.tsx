import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../../Redux/hook";
import { getProductName, ProductState } from "../../../../Redux/slice/product/product.slice";
import "./FilterByName.css";
import icon from "../../../../assets/images/icons/search_icon_w.png";
import { FilterState, getProduct } from "../../../../Redux/slice/product/product.slice";
import { productsFilter } from "../../../../Redux/slice/product/ProductController";

const FilterByName: React.FC<{}> = () => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useAppDispatch();

  const Product: ProductState[] = useAppSelector(
    state => state.productReducer.Products
  );

  const Filters: FilterState = useAppSelector(
    state => state.productReducer.Filters
  );

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getProductName(e.target.value));

    const filteredSuggestions = Product?.filter((el) => {
      const searchTerm = e.target.value.toLocaleLowerCase();
      const prodName = el.name.toLocaleLowerCase();
      return (
        searchTerm && prodName.includes(searchTerm) && prodName !== searchTerm
      );
    }).slice(0, 5).map((el) => el.name);

    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    productsFilter(Filters)
      ?.then(response => {
        dispatch(getProduct(response));
      })

    dispatch(getProductName(''))
    setShowSuggestions(false);
  };

  return (
    <form className='new-container-filterBy-c' onSubmit={handlerSubmit}>
      <div className='input'>
        <input
          className='input-filterByName'
          type='text'
          id='inputName'
          value={Filters.name}
          placeholder='Search...'
          onChange={e => handleName(e)}
        />

        <button className='🔍' type='submit'>
          <img className='img-btn' src={icon} alt='icon' />
        </button>
      </div>

      {showSuggestions && (
        <select className='suggestions-dropdown'>
          {suggestions.slice(0, 5).map(el => (
            <Link
              className='link'
              to={`/product/${Product.find(p => p.name === el)?._id}`}
            >
              <div
                className='suggestion-row'
                onClick={() => dispatch(getProductName(el))}
              >
                {el.slice(0, 20)} ...
              </div>
            </Link>
          ))}
        </select>
      )}
    </form>
  );
};

export default FilterByName;