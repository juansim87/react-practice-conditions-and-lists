# 🧪 Ejercicios de React con con renderizado de listas y formularios

## 🌟 Objetivo

Practicar el renderizado de listas en React, utilizando estructuras de datos para iterar con `.map()`, trabajar con formularios y actualizar el estado de forma dinámica.

Eso sí, te aviso que en el ejercicio se piden conceptos que no hemos visto en clase, pero puedes buscar información sobre ellos en internet. ¡Ánimo!

Intenta no usar ChatGPT para resolver los ejercicios, ya que es mejor que intentes resolverlos por ti mismo. Si te atascas, puedes buscar ayuda en internet. Si después de buscar en internet no consigues resolverlo, entonces sí puedes preguntar a ChatGPT.

---

## 🚀 Pasos iniciales

### 1. Crear un nuevo repositorio en tu propia cuenta de GitHub
En este repositorio, sube tu código usando Git y mensajes claros en tus commits como viste en la clase de GitHub Avanzado.

### 2. Crear un proyecto React vacío

Usa `Vite` para crearlo:

```bash
npm create vite@latest
# Elige React (con JavaScript)
```

### 3. Limpiar el proyecto

- Borra todo el código de ejemplo que no necesitas (logos, App.css, etc.)
- Deja solo lo esencial: `main.jsx`, `App.jsx` y tu estructura propia

### 4. Realiza el ejercicio
Todo el código, así como el ejercicio, estará en tu propio repositorio de GitHub.

---

## 🧹 Ejercicios

Crea estos 15 componentes que usan formularios y listas:

> Puedes modificar todas las estructuras de datos a tu gusto, añadir o quitar propiedades. Siéntete libre de ser creativo y hacerlos más interesantes.

1. **NameList**
   - Dibuja una lista de nombres a partir de un array fijo. Usa `.map()` para renderizarlos.
   ```js
   const names = ["Ana", "Luis", "Clara", "Sergio", "Marta"];
   ```

2. **ProductList**
   - Muestra una lista de productos con nombre y precio. Renderiza cada uno como una tarjeta.
   ```js
   const products = [
     { name: "Camiseta", price: 19.99 },
     { name: "Pantalón", price: 29.99 },
     { name: "Zapatillas", price: 49.99 }
   ];
   ```

3. **TaskList**
   - Muestra una lista de tareas y un checkbox junto a cada una. Permite marcar tareas como hechas.
   ```js
   const tasks = [
     { id: 1, title: "Hacer la compra" },
     { id: 2, title: "Llamar al médico" },
     { id: 3, title: "Estudiar React" }
   ];
   ```

4. **AddFruitForm**
   - Muestra un formulario con un input para frutas. Al hacer submit, añade la fruta a la lista.

5. **RemoveItemList**
   - Muestra una lista de elementos con un botón “Eliminar” al lado de cada uno.
   ```js
   const items = ["Mesa", "Silla", "Lámpara", "Sofá"];
   ```

6. **DynamicShoppingList**
   - Formulario con dos campos: nombre del producto y cantidad. Muestra una lista con los elementos agregados.

7. **ToggleItemsList**
   - Lista de elementos con un botón que cambia su estado de activo/inactivo y aplica un estilo distinto.
   ```js
   const toggles = [
     { id: 1, label: "Notificaciones" },
     { id: 2, label: "Modo oscuro" },
     { id: 3, label: "Sonido" }
   ];
   ```

8. **EditableList**
   - Muestra una lista de nombres con un botón "Editar" que permite modificarlos en un input.
   ```js
   const editableNames = ["Laura", "Pedro", "Isabel"];
   ```

9. **OrderManager**
   - Formulario de pedidos (nombre y precio). Muestra una lista de pedidos. Al hacer click en "Completar", mueve el pedido a otra lista.

10. **UserFilterList**
    - Dibuja una lista de usuarios y un input de búsqueda. Muestra solo los usuarios cuyo nombre contenga el texto.
    ```js
    const users = [
      { id: 1, name: "Antonio" },
      { id: 2, name: "Beatriz" },
      { id: 3, name: "Carmen" }
    ];
    ```

11. **ScoreBoard**
    - Lista de jugadores con su puntuación. Botón para subir la puntuación de cada uno.
    ```js
    const players = [
      { id: 1, name: "Mario", score: 10 },
      { id: 2, name: "Lucía", score: 15 },
      { id: 3, name: "David", score: 8 }
    ];
    ```

12. **MovieFavorites**
    - Lista de películas favoritas con un botón para quitar cada película.
    ```js
    const movies = [
      { id: 1, title: "El laberinto del fauno" },
      { id: 2, title: "Mar adentro" },
      { id: 3, title: "Ocho apellidos vascos" }
    ];
    ```

13. **EmailCollector**
    - Formulario para recoger emails de usuarios. Muestra la lista de emails introducidos.

14. **RestaurantMenu**
    - Muestra una carta de platos. Cada plato tiene nombre, precio y categoría. Usa `.filter()` para mostrar solo una categoría.
    ```js
    const menu = [
      { name: "Tortilla de patatas", price: 6.5, category: "Entrante" },
      { name: "Paella", price: 12.9, category: "Principal" },
      { name: "Tarta de queso", price: 4.5, category: "Postre" }
    ];
    ```

15. **PizzaOrdersAdvanced**
    - Crea un componente inspirado en la pizzería del ejemplo de clase: formulario para añadir pedidos, lista de pedidos pendientes, lista de pedidos completados, y cálculo del total facturado.

---

## ✅ Requisitos

- Todos los componentes deben funcionar de forma independiente.
- Tu código tiene que estar escrito en inglés.
- Debes usar estructuras de datos y renderizado con `.map()`.
- Cada componente debe tener estilos simples pero bien organizados.
- Añade ejemplos de todos los componentes en `App.jsx`.