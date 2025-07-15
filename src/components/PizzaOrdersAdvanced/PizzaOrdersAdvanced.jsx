import { useState } from "react";
import "./PizzaOrdersAdvanced.css";

const INITIAL_ORDERS = [
  { id: 1, orderName: "Diavola", quantity: 2, price: 10.95, completed: false },
  { id: 2, orderName: "Calzone", quantity: 1, price: 10.95, completed: false },
];

const menu = [
  { id: 1, orderName: "Calzone", price: 10.95 },
  { id: 2, orderName: "Carbonara", price: 11.9 },
  { id: 3, orderName: "Diavola", price: 10.95 },
  { id: 4, orderName: "Cuatro quesos", price: 11.9 },
  { id: 5, orderName: "Pesto", price: 11 },
];

export const PizzaOrdersAdvanced = () => {
  const [selectedPizza, setSelectedPizza] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [pendingOrders, setPendingOrders] = useState(INITIAL_ORDERS);
  const [completedOrders, setCompletedOrders] = useState([]);

  /**CAMBIOS EN EL INPUT*/

  const handleSelectedPizza = (event) => {
    setSelectedPizza(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(Number(event.target.value));
  };

  /**REALIZAR PEDIDO*/

  const handleOrderClick = () => {
  if (!selectedPizza) return;

  const foundPizza = menu.find((item) => item.orderName === selectedPizza);
  if (!foundPizza) return;

  const newPizzaOrder = {
    ...foundPizza,
    id: Date.now(),
    quantity,
    completed: false,
  };

  setPendingOrders((prev) => [...prev, newPizzaOrder]);
  setSelectedPizza("");
  setQuantity(1);
};

  /**COMPLETAR PEDIDO*/

  const handleComplete = (id) => {
    const orderFound = pendingOrders.find((item) => item.id === id);
    if (!orderFound) {
      return;
    }

    const updatedOrder = { ...orderFound, completed: true };

    const ordersFiltered = pendingOrders.filter((item) => item.id !== id);
    setPendingOrders(ordersFiltered);
    setCompletedOrders((prev) => [...prev, updatedOrder]);
  };

  /**CALCULAR FACTURACIÓN TOTAL*/

  const renderTotal = () => {
    const totalPrice = completedOrders
      .reduce((acc, item) => acc + Number(item.price * item.quantity), 0)
      .toFixed(2);

    return `${totalPrice}€`;
  };

  return (
    <div className="pizza-orders">
      <h2>Pizzería Juancho's</h2>

      <section>
        <h3>Añadir pedido</h3>
        <select value={selectedPizza} onChange={handleSelectedPizza}>
          <option value="">Elige tu pizza</option>

          {menu.map((item) => (
            <option key={item.id} value={item.orderName}>
              {item.orderName}
            </option>
          ))}
        </select>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={handleQuantity}
        />
        <button onClick={handleOrderClick}>Pedir</button>
      </section>

      <section>
        <h3>Pedidos pendientes</h3>
        <ul>
          {pendingOrders
            .filter((order) => !order.completed)
            .map((order) => (
              <li key={order.id}>
                <span>
                  {order.quantity}x {order.orderName} -
                  {order.price * order.quantity}€
                </span>
                <span>
                  <button onClick={() => handleComplete(order.id)}>
                    Completar pedido
                  </button>
                </span>
              </li>
            ))}
        </ul>
      </section>
      <h3>Pedidos completados</h3>
      {completedOrders.map((order) => (
        <li key={order.id}>
          <span>
            {order.quantity}x {order.orderName} -{order.price * order.quantity}€
          </span>
        </li>
      ))}

      <section>
        <h3>Total facturado</h3>
        <p>Hemos facturado un total de {renderTotal()}</p>
      </section>
    </div>
  );
};
