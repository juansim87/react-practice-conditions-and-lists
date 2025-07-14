import { useState } from "react";
import "./EmailCollector.css";

export const EmailCollector = () => {
  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRegisterEmail = () => {
    if (!inputValue) {
      setError("El campo no puede estar vacío");
      return;
    }

    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    if (!isValidEmail(inputValue)) {
      setError("El formato del email no es válido");
      return;
    }

    const registeredEmail = emails.find(
      (element) => element.email === inputValue
    );

    if (registeredEmail) {
      setError("Este email ya está registrado");
      return;
    }

    setEmails((prev) => [...prev, { id: Date.now(), email: inputValue }]);
    setInputValue("");
    setError("");
  };

  return (
    <div>
      <h2>Gestor de emails</h2>
      <input type="email" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleRegisterEmail}>Enviar</button>
      <h3>Emails registrados</h3>
      <ul>
        {emails.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
