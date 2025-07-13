import { useState } from "react";
import "./ToggleItemsList.css";

export const ToggleItemsList = () => {
  const toggles = [
    { id: 1, label: "Notificaciones" },
    { id: 2, label: "Modo oscuro" },
    { id: 3, label: "Sonido" },
  ];

  const [activeTasks, setActiveTasks] = useState([]);

  const handleClick = (id) => {
    setActiveTasks((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h2>Lista de elementos con cambio de actividad</h2>
      <ul className="list">
        {toggles.map((element) => {
          const isActive = activeTasks.includes(element.id);
          return (
            <li 
            key={element.id}
            className={isActive ? "active" : "inactive"}>
              {element.label}
              <button onClick={() => handleClick(element.id)}>
                {isActive ? "Desactivar" : "Activar"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
