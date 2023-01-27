import { useAppDispatch } from "../../../../Redux/hook";

import { updateCategoryFilter } from "../../../../Redux/slice/product/product.slice";

const FilterByCategory: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  //hecho por yeral!!!! todos los tipados los hize yoooooooooooo!
  //TQM SAUL!!!!!
  const handlerChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateCategoryFilter(event.target.value));
  };

  return (
      <div className='new-container-category'>
        <select className="select-category" name='' onChange={handlerChange}>
          <option className="option-categority" value=''> ---- </option>
          <option className="option-categority" value='63bebb1fe29c7344a53f6c29'>Connectify and Control</option>
          <option className="option-categority" value='63bebc3e001d5278f72b9266'>Home Entertainment</option>
          <option className="option-categority" value='63bebc4e001d5278f72b9268'>Energy Management</option>
          <option className="option-categority" value='63bebc5f001d5278f72b926a'>Safety and Security</option>
          <option className="option-categority" value='63bebc6c001d5278f72b926c'>Confort and Ease</option>
          <option className="option-categority" value='63c6d27b2fbbfb7b7911edf2'>Lifestyle and Health</option>
        </select>
      </div>
  );
};

export default FilterByCategory;
