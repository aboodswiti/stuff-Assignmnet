import React from "react";
import { FaPlus, FaCheck } from "react-icons/fa";


const Item = ({ text, id, isAdded, addItem }) => {
  return (
    <div
      key={id}
    >
      {" "}
      <div className="element">
        <option disabled={isAdded}>  {text}  </option>

        <div onClick={() => addItem(id)}>
          {isAdded ? <FaCheck color="grey" /> : <FaPlus />}
        </div>
      </div>
    </div>
  );
};

export default Item;
