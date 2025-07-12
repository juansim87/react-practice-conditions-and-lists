import { useState } from "react";
import "./TaskList.css";

export const TaskList = () => {
  const tasks = [
    { id: 1, title: "Hacer la compra" },
    { id: 2, title: "Llamar al médico" },
    { id: 3, title: "Estudiar React" },
  ];

  const [completed, setCompleted] = useState([]);

  const handleInputChange = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
  };

  return (
    <div className="taskList">
    <h2>Lista de tareas</h2>
      <ul>
        {tasks.map((item) => {
          const isCompleted = completed.includes(item.id);
          return (
            <div key={item.id} className="task">
              <li htmlFor="checkbox" className={isCompleted ? "completed" : ""}>
                {item.title}
              </li>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleInputChange(item.id)}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
