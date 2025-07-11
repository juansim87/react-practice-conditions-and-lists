// import { useState } from "react";
import "./NameList.css";

const names = ["Ana", "Luis", "Clara", "Sergio", "Marta"];

export const NameList = () => {
  return (
    <div>
      <h2>Lista de nombres</h2>
      <ul>
        {names.map((student) => {
          return <li key={Date.now()}>{student}</li>;
        })}
      </ul>
    </div>
  );
};
