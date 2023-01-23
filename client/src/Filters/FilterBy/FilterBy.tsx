import React, { useEffect, useState } from 'react';
// import {Slider} from @materialui
//import "./FilterBy.css";
import icon from '../../assets/images/icons/search_icon_w.png';
import iconStar from '../../assets/images/icons/star.png';

//---------------------SearchBar Suggestions
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { ProductState } from '../../Redux/slice/product/product.slice';
import { getProduct } from '../../Redux/slice/product/product.slice';
import { productFetch } from '../../Redux/slice/product/ProductController';

interface FilterByProps {
  switchSelect: (e: string) => void;
  type: string;
  filter: {
    properties: string[];
    order: string[];
    categories: string[];
    filterList: string[];
  };
}

const stars = [1, 2, 3, 4, 5];

const FilterBy: React.FC<FilterByProps> = ({ switchSelect, filter, type }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current);
    if (inputRef.current) {
      console.log(inputRef.current.value);
      switchSelect(inputRef.current.value);
      inputRef.current.value="";

    }
  };

  //-------------------------SearchBar Suggestions
  const Allproduct: ProductState[] = useAppSelector(
    (state) => state.productReducer.Products,
  );

  const [value, setValue] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  // const onChange = (event: string) => {
  //   setValue(event.target.value);
  // };

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Allproduct.length) {
      productFetch().then((res) => {
        dispatch(getProduct(res));
      });
    }
  }, [Allproduct]);
  

  //----------------------------------------------------------

  return (
    <div className='container-FilterBy'>
      {/* <img src={icon} alt="icon" /> */}

      {type === 'Name' && (
        <form action='' onSubmit={onSubmitHandler}>
          <div className='container-filterBy-c'>
            <input
              className='input-filterByName'
              type='text'
              id='inputName'
              ref={inputRef}
              value={value}
              onChange={(e) => onChange(e)}
            />
            <button className='🔍' type='submit'>
              <img className='img-btn' src={icon} alt='icon' />
            </button>
          </div>
          <div className='dropdown'>
            {Allproduct.filter((prod) => {
              const searchTerm = value.toLowerCase();
              const fullName = prod.name.toLowerCase();

              return (
                searchTerm && fullName.includes(searchTerm) && fullName !== searchTerm
              );
            })
              .slice(0, 5)
              .map((prod) => (
                <div
                  onClick={() => switchSelect(prod.name)}
                  className='dropdown-row'
                  key={prod.name}
                >
                  {prod.name}
                  {/* <div className="separator">separator</div> */}
                </div>
              ))}
          </div>
        </form>
      )}

      {type === 'Rating' && (
        <div className='container-filterBy-c'>
          <div className='⭐️'>⭐️</div>
          <input
            className='input-filterByRating'
            min={1}
            max={5}
            defaultValue={1}
            type='number'
            onChange={(e) => {
              const rating = `⭐️ ${e.target.value}`;
              switchSelect(rating);
            }}
          />
        </div>
      )}

      {type === 'stars' && (
        <div className='container-filterBy-c'>
          {stars.map((star) => {
            return (
              <button
                className='btn-start'
                value={star}
                onClick={(e:any) => {
                  switchSelect(`⭐️ ${e.target.value}`);
                }}
                style={{
                  backgroundImage: `url(${iconStar})`,
                  backgroundSize: '100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></button>
            );
          })}
        </div>
      )}

      {type === 'Price' && (
        // <Slider/>
        <div className='container-filterBy-c'>
          <input
            className='input-filterByPrice'
            type='range'
            onChange={(e) => {
              const price = `💰(0 - ${e.target.value})`;
              switchSelect(price);
            }}
          />
        </div>
      )}

      {
        //Category
        type === 'Category' && (
          <div className='container-filterBy-c'>
            <select
              className='select-FilterByCategory'
              onChange={(e) => {
                switchSelect(e.target.value);
              }}
            >
              {filter.categories?.map((property, index) => {
                return (
                  <option className='option' key={property + index} value={property}>
                    {property}
                  </option>
                );
              })}
            </select>
          </div>
        )
      }

      {
        //Category
        type === 'Order' && (
          <div className='container-filterBy-c'>
            <select
              className='select-FilterByCategory'
              onChange={(e) => {
                switchSelect(e.target.value);
              }}
            >
              {filter.order?.map((property, index) => {
                return (
                  <option className='option' key={property + index} value={property}>
                    {property}
                  </option>
                );
              })}
            </select>
          </div>
        )
      }
      <div className='🔵'></div>
    </div>
  );
};

export default FilterBy;
