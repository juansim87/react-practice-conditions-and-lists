import { useState } from "react";
import "./RemoveItemList.css";

export const RemoveItemList = () => {
  const [deleted, setDeleted] = useState([]);

  const items = ["Mesa", "Silla", "Lámpara", "Sofá"];

  const handleDelete = (item) => {
    setDeleted((prev) => [...prev, item]);
  };

  const visibleItems = items.filter((item) => !deleted.includes(item));

  return (
    <div>
      <h2>Lista de objetos borrables</h2>

      {visibleItems.map((item, index) => (
        <div key={`${item}-${index}`} className="item">
          <p>{item}</p>
          <button onClick={() => handleDelete(item)}>Borrar</button>
        </div>
      ))}
    </div>
  );
};
