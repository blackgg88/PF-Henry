import React from 'react';
import { productsFilter } from '../../Redux/slice/product/ProductController';
import { getProduct, FilterState } from '../../Redux/slice/product/product.slice';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';

const useFiltersPanel = () => {
  const dispatch = useAppDispatch();

  const Filters: FilterState = useAppSelector((state) => state.productReducer.Filters);

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    try {
      e.preventDefault();
      productsFilter(Filters)?.then((response) => {
        dispatch(getProduct(response));
      });
    } catch (error) {
      console.error({ message: error });
    }
  };

  return { handleFilter };
};

export default useFiltersPanel;
