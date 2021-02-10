import React, { useState } from "react";
import Item from "./Item";
const Selector = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [items, setItems] = useState([
    {
      text: "Budget",
      isAdded: false,
      id: 0,
    },
    {
      text: "Food allergies",
      isAdded: false,
      id: 1,
    },
    {
      text: "Numper of people",
      isAdded: false,
      id: 2,
    },
    {
      text: "Special restriction",
      isAdded: false,
      id: 3,
    },
  ]);

  const addItem = (index) => {
    const newItems = [...items];
    newItems[index].isAdded = !items[index].isAdded;
    setItems(newItems);
  };

  return (
    <div className="card"> 
      <input
        type="text"
        placeholder="Search questions"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {items
        .filter((item) => {
          if (searchTerm === "") return item;
          else if (item.text.toLowerCase().includes(searchTerm.toLowerCase()))
            return item;
        })
        .map((item) => (
          <Item
            key={item.id}
            id={item.id}
            isAdded={item.isAdded}
            text={item.text}
            addItem={addItem}
          />
        ))}
    </div>
  );
};

export default Selector;
