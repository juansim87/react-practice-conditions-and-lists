import { useState } from "react";
import "./ProductList.css";

export const ProductList = () => {
  const products = [
    { name: "Camiseta", price: 19.99 },
    { name: "Pantalón", price: 29.99 },
    { name: "Zapatillas", price: 49.99 },
  ];

  return (
    <div className="products">
      <h2>Lista de productos</h2>
      <div className="product-cards">
        {products.map((item) => {
          return (
            <div key={Date.now()} className="card">
              <h3>{item.name}</h3>
              <p>Precio: {item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
