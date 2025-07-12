import { useState } from "react";
import "./AddFruitForm.css";

export const AddFruitForm = () => {

  const [fruitList, setFruitList] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState("");
  const [error, setError] = useState("");

  const fruits = {
    fresa: "Fresa",
    manzana: "Manzana",
    melocoton: "Melocotón",
    pera: "Pera",
    sandia: "Sandía"
  };
  

  const handleInputChange = (event) => {
    setSelectedFruit(event.target.value);
    setError("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (selectedFruit === "") {
        setError("Debes seleccionar una fruta");
        return;
    }

    setFruitList((prev) => [...prev, selectedFruit]);
    setSelectedFruit("");
  }

  return (
    <div>
      <h2>Lista de frutas</h2>
      <form action="form">
        <select value={selectedFruit} onChange={handleInputChange}>
          <option value="">Selecciona una fruta</option>
          {Object.entries(fruits).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button onClick={handleOnSubmit}>Añadir a la lista</button>
        {error && <p>{error}</p>}
        <div>
          {fruitList.length === 0 ? (
            <p>No hay frutas en la lista</p>
          ) : (
            <ul>
              {fruitList.map((fruit, index) => (
                <li key={`${fruit}-${index}`}>{fruits[fruit]}</li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
};
