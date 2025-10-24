import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <header>
      <h1>Iggy's Pizza Co.</h1>
      <h2>OUR MENU</h2>
      <p>Authentic Italian cuisine, all from our stone oven</p>
    </header>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.src} alt={props.name} width="150" />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <p>{props.price}</p>
    </div>
  );
}

function App() {
  const pizzas = [
    {
      name: "Focaccia",
      ingredients: "Bread with Italian olive oil and rosemary",
      price: 6,
      src: "/pizzas/focaccia.jpg"
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozzarella",
      price: 10,
      src: "/pizzas/margherita.jpg"
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
      price: 12,
      src: "/pizzas/spinaci.jpg"
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozzarella, mushrooms, and onion",
      price: 12,
      src: "/pizzas/funghi.jpg"
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozzarella, and pepperoni",
      price: 15,
      src: "/pizzas/salamino.jpg"
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
      price: 18,
      src: "/pizzas/prosciutto.jpg"
    }
  ];

  return (
    <div>
      <Header />
      <div className="menu">
        {pizzas.map(function (pizza) {
          return (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              src={pizza.src}
            />
          );
        })}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
