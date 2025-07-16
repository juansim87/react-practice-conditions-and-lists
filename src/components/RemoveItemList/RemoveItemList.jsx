import { useState } from "react";
import "./RemoveItemList.css";

const INIT_LIST = ["Mesa", "Silla", "Lámpara", "Sofá"];

export const RemoveItemList = () => {
  const [items, setItems] = useState(INIT_LIST);

  const handleDelete = (itemToDelete) => {
    const filteredItems = items.filter((item) => item !== itemToDelete);
    setItems(filteredItems);
  };

  return (
    <div>
      <h2>Lista de objetos borrables</h2>

      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="item">
          <p>{item}</p>
          <button onClick={() => handleDelete(item)}>Borrar</button>
        </div>
      ))}
    </div>
  );
};
