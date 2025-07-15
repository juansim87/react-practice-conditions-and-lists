import { useState } from 'react';
import './RestaurantMenu.css';

export const RestaurantMenu = () => {
  
  const menu = [
    { name: "Tortilla de patatas", price: 6.5, category: "starter" },
    { name: "Croquetas de jamón", price: 7, category: "starter" },
    { name: "Patatas bravas", price: 6, category: "starter" },
    { name: "Paella", price: 12.9, category: "main" },
    { name: "Chuletón de ternera", price: 18.9, category: "main" },
    { name: "Merluza con salsa verde", price: 10.5, category: "main" },
    { name: "Tarta de queso", price: 4.5, category: "dessert" },
    { name: "Tiramisú", price: 5.5, category: "dessert" },
    { name: "Coulant", price: 5, category: "dessert" }
  ];

  const [activeTab, setActiveTab] = useState("starter");
  const [dishOptions, setDishOptions] = useState([]);
  
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const currentSelection = menu.filter((item) => item.category === tabName);   
    setDishOptions(currentSelection)
  }
  


  return (
    <div>
    <h2>Menú de Restaurante</h2>
      <button className={activeTab === "starter" ? "selected" : ""} onClick={()=> handleTabClick("starter")}>Entrantes</button>
      <button className={activeTab === "main" ? "selected" : ""} onClick={()=> handleTabClick("main")}>Platos principales</button>
      <button className={activeTab === "dessert" ? "selected" : ""} onClick={()=> handleTabClick("dessert")}>Postres</button>
      <ul>
        {dishOptions.map((item) => <li key={item.name}>{item.name} | {item.price}€</li>)}
      </ul>
    </div>
  );
};