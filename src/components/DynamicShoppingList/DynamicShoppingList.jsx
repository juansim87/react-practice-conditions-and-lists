import { useState } from "react";
import "./DynamicShoppingList.css";

const INIT_LIST_FORM = { name: "", quantity: 0 };

export const DynamicShoppingList = () => {
  const [productList, setProductList] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setError("Introduce un producto");
      return;
    }

    if (quantity <= 0) {
      setError("Introduce una cantidad válida");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      quantity,
    };

    setProductList((prev) => [...prev, newProduct]);
    setName("");
    setQuantity(1);
  };

  return (
    <div>
      <h2>Lista de compra dinámica</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="Nombre del producto"
        />
        <input
          value={quantity}
          type="number"
          min={1}
          onChange={(event) => setQuantity(event.target.value)}
          placeholder="Cantidad"
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {error && <p>{error}</p>}
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - Cantidad: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
