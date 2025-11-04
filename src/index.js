import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase", textAlign: "center" }}>
      Iggy's Pizza Co.
    </h1>
  );
}

function Greeting({ name, signedIn }) {
  return (
    <div style={{ textAlign: "center", margin: "10px 0" }}>
      {signedIn ? <h2>Welcome back {name}!</h2> : <h2>Please login</h2>}
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza" style={{ 
      border: "1px solid #4A4642", 
      borderRadius: "12px", 
      padding: "20px", 
      textAlign: "center", 
      margin: "10px",
      width: "250px"
    }}>
      <img 
        src={props.src} 
        alt={props.name} 
        width="200" 
        style={{ 
          borderRadius: "20px",
          marginBottom: "10px" 
        }} 
      />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <p style={{ fontWeight: "bold" }}>${props.price}</p>
    </div>
  );
}


function Menu() {
  const pizzas = [
    { name: "Focaccia", ingredients: "Bread with Italian olive oil and rosemary", price: 6, src: "/pizzas/focaccia.jpg" },
    { name: "Pizza Margherita", ingredients: "Tomato and mozzarella", price: 10, src: "/pizzas/margherita.jpg" },
    { name: "Pizza Spinaci", ingredients: "Tomato, mozzarella, spinach, and ricotta cheese", price: 12, src: "/pizzas/spinaci.jpg" },
    { name: "Pizza Funghi", ingredients: "Tomato, mozzarella, mushrooms, and onion", price: 12, src: "/pizzas/funghi.jpg" },
    { name: "Pizza Salamino", ingredients: "Tomato, mozzarella, and pepperoni", price: 15, src: "/pizzas/salamino.jpg" },
    { name: "Pizza Prosciutto", ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese", price: 18, src: "/pizzas/prosciutto.jpg" }
  ];

  const menuStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px",
    gap: "20px"
  };

  return (
    <div className="menu" style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "30px" }}>Our Menu</h2>
      <div style={menuStyle}>
        {pizzas.map(pizza => (
          <Pizza 
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            src={pizza.src}
          />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 10 && hour < 22;

  const footerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#ffb84d",
    color: "#fff",
    fontWeight: "bold",
    marginTop: "40px"
  };

  return (
    <footer style={footerStyle}>
      {isOpen ? "We're currently open" : "Sorry, we're closed"}
    </footer>
  );
}

function ProfileCard({name, age}) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
}


function App() {
  return (
    <div className="container">
      <Header />
      <Greeting name="Iggy" signedIn={true} />
      <ProfileCard name="Iggy" age={18} />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
