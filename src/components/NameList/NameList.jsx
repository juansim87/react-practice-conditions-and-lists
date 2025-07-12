// import { useState } from "react";
import "./NameList.css";

export const NameList = () => {
  const names = ["Ana", "Luis", "Clara", "Sergio", "Marta"];
  return (
    <div>
      <h2>Lista de nombres</h2>
      <ul>
        {names.map((student) => {
          return <li key={`${Date.now()}-${student}`}>{student}</li>;
        })}
      </ul>
    </div>
  );
};
