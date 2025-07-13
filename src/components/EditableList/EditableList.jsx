import { useState } from "react";
import "./EditableList.css";

export const EditableList = () => {

  const [names, setNames] = useState([
    { id: 1, name: "Laura", isEditing: false },
    { id: 2, name: "Pedro", isEditing: false },
    { id: 3, name: "Isabel", isEditing: false }
  ]);


  const handleEditClick = (name) => {
    setNames((prevNames) =>
    prevNames.map((element) =>
        element.name === name ? {...element, isEditing:!element.isEditing} : element
))
    
  }

  return (
    <div>
      <h2>Lista editable</h2>
      <ul>
        {names.map((element) => (
          <li key={element.id}>{element.name}<button onClick={() => handleEditClick(element.name)}>{element.isEditing ? "Confirmar" : "Modificar"}</button></li>
        ))}
        {}
      </ul>
    </div>
  );
};
