import { useState } from "react";
import "./OrderManager.css";

const INIT_ORDER = [
  { id: 1, product: "Catán", price: 45 },
  { id: 2, product: "Unmatched: Cobble&Fog", price: 31.5 },
  { id: 3, product: "Splendor", price: 35 },
  { id: 4, product: "Terra Mystica", price: 80 },
  { id: 5, product: "Ciudadelas", price: 15 },
];

export const OrderManager = () => {
  const [pendingOrders, setPendingOrders] = useState(INIT_ORDER);
  const [completedOrders, setCompletedOrders] = useState([]);

  const onComplete = (id) => {
    console.log("Pedido completado", id);

    const orderFound = pendingOrders.find((element)=> element.id === id);

    console.log("Pedido completado:", orderFound);

    if (!orderFound) {
        return;
    }

    const ordersFiltered = pendingOrders.filter((element) => element.id !== id)
    console.log("Pedidos filtrados:", ordersFiltered);

    setPendingOrders(ordersFiltered);
    setCompletedOrders((prev) => [...prev, orderFound]);

  }

  return (
    <div>
      <h2>Gestor de pedidos</h2>
      <h3>Pedidos pendientes</h3>
      <ul>
        {pendingOrders.length <= 0 && <p>No hay pedidos pendientes</p>}
        {pendingOrders.map((product) => (
          <li key={product.id}>
            <span>
              {product.product} - Precio: {product.price}€
            </span>
            <span>
                <button onClick={() => onComplete(product.id)}>Completar</button>
            </span>
          </li>
        ))}
      </ul>
      <h3>Pedidos completados</h3>
      <ul>
        {completedOrders.length <= 0 && <p>No hay pedidos completados</p>}
        {completedOrders.map((product) => (
          <li key={product.id}>
            <span>
              {product.product} - Precio: {product.price}€
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
