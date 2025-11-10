import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header({ isOpen }) {
  return (
    <header style={{ textAlign: "center", padding: "30px 0" }}>
      <h1
        style={{
          fontSize: "60px",
          color: "#f5c518",
          margin: 0,
          letterSpacing: "2px",
          fontFamily: "'Cinzel Decorative', serif",
          fontWeight: 700,
        }}
      >
        Iggy's Pizza Co.
      </h1>
      {isOpen && (
        <p
          style={{
            color: "#ffed8a",
            fontStyle: "italic",
            marginTop: "10px",
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
          }}
        >
          Authentic Italian Cuisine
        </p>
      )}
    </header>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div
      style={{
        backgroundColor: "#2a2a2a",
        border: "1px solid #444",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "300px",
        height: "430px",
        padding: "20px",
        textAlign: "center",
        transition: "0.3s",
        opacity: soldOut ? 0.5 : 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img
        src={photoName}
        alt={name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ color: "#f5c518", marginBottom: "10px" }}>{name}</h3>
      <p style={{ marginBottom: "5px" }}>{ingredients}</p>
      <p style={{ fontWeight: "bold", color: "#ffed8a" }}>
        {soldOut ? "SOLD OUT" : "$" + price}
      </p>
    </div>
  );
}

function Menu() {
  return (
    <main style={{ textAlign: "center", marginTop: "40px" }}>
      <h2
        style={{
          color: "#f5c518",
          fontSize: "40px",
          marginBottom: "20px",
          fontFamily: "'Cinzel Decorative', serif",
          fontWeight: 700,
        }}
      >
        Our Menu
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 flexible columns
          gap: "40px",                           // space between cards
          justifyItems: "center",                // centers each card
          alignItems: "start",
          width: "90%",                          // prevent overflow
          maxWidth: "1100px",                    // keeps nice center alignment
          margin: "0 auto",                      // centers grid itself
        }}
      >
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </main>
  );
}


function Order() {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <p style={{ color: "#f5c518", marginBottom: "10px" }}>
        We're currently open!
      </p>
      <button
        style={{
          backgroundColor: "#f5c518",
          color: "#1e1e1e",
          border: "none",
          padding: "10px 25px",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Order Now
      </button>
    </div>
  );
}

function Footer({ isOpen }) {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "30px",
        borderTop: "2px solid #f5c518",
        marginTop: "40px",
      }}
    >
      {isOpen ? <Order /> : <p style={{ color: "#aaa" }}>Sorry, we're closed.</p>}
    </footer>
  );
}

function App() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        color: "#f5f5f5",
        fontFamily: "'Playfair Display', serif",
        minHeight: "100vh",
        margin: 0,
        padding: "20px",
      }}
    >
      <Header isOpen={isOpen} />
      <Menu />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
