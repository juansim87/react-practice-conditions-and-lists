import { useState } from "react";
import "./EditableList.css";

export const EditableList = () => {
  const [names, setNames] = useState([
    { id: 1, name: "Laura", isEditing: false },
    { id: 2, name: "Pedro", isEditing: false },
    { id: 3, name: "Isabel", isEditing: false },
  ]);

  const [editedNames, setEditedNames] = useState({});

  const handleEditClick = (id) => {
    setNames((prevNames) =>
      prevNames.map((element) => {
        if (element.id !== id) return element;

        if (element.isEditing) {
          const newName = editedNames[id];
          const shouldUpdate =
            newName !== undefined &&
            newName.trim() !== "" &&
            newName !== element.name;

          return {
            ...element,
            name: shouldUpdate ? newName : element.name,
            isEditing: false,
          };
        } else {
          return { ...element, isEditing: true };
        }
      })
    );

    setEditedNames((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleInputChange = (event, id) => {
    setEditedNames((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));
  };

  return (
    <div>
      <h2>Lista editable</h2>
      <ul>
        {names.map((element) => (
          <li key={element.id}>
            {element.name}
            <button onClick={() => handleEditClick(element.id)}>
              {element.isEditing ? "Confirmar" : "Modificar"}
            </button>
            {element.isEditing ? (
              <input
                type="text"
                value={
                  editedNames[element.id] !== undefined
                    ? editedNames[element.id]
                    : element.name
                }
                onChange={(event) => handleInputChange(event, element.id)}
              />
            ) : (
              <></>
            )}
          </li>
        ))}
        {}
      </ul>
    </div>
  );
};
