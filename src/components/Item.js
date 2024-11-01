import React, { useState } from "react";


function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false);
  function handleAddItem(){
    setAddCart((addItem) => !addItem)
  }
  return (
    <li className={addCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>{addCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
