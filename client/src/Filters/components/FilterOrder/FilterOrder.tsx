import useFilterOrder from "./hook/useFilterOrder";

const FilterOrder: React.FC<{}> = () => {
  const { handlerChange } = useFilterOrder();

  return (
    <div className="new-container-category">
      <select className="select-category" name="" onChange={handlerChange}>
        <option className="option-categority" value="all">
          {" "}
          ----{" "}
        </option>
        <option className="option-categority" value="[name]=stringup">
          A - Z
        </option>
        <option className="option-categority" value="[name]=stringdown">
          Z - A
        </option>
        <option className="option-categority" value="[price]=up">
          Highest Price
        </option>
        <option className="option-categority" value="[price]=down">
          Lowest Price
        </option>
        <option className="option-categority" value="[rating]=up">
          Max Rating
        </option>
        <option className="option-categority" value="[rating]=down">
          Min Rating
        </option>
        <option className="option-categority" value="[stock]=up">
          Highest Stock
        </option>
        <option className="option-categority" value="[stock]=down">
          Lowest Stock
        </option>
      </select>
    </div>
  );
};

export default FilterOrder;
