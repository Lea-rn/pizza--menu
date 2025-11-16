import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

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

function App() {
  ///// parent component
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return <h1 className="title">Fast React Pizza Co.</h1>;
}

//// wrapped the element (react fragment)

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length; //// 0
  return (
    <div>
      <h2 className="menu-title">Our Menu </h2>
   
      {numPizzas > 0 ?  ( 

      <>
             <p className="menu-introduction">
          Authentic Italien cuisine , 6 creative dishes to choose from . All from
          our stone oven  all organic , all delicious .
        </p>
          
          <div className="cards-container">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </div>
      </>
      )    :  <p style={{textAlign:"center" , color:"red"}}>
        We 're still working on our menu . Please come back later .. </p>}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  /////// early return ....
  // if (pizzaObj.soldOut) return null;
  return (
    <section className={`card ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img height={200} src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className="card-info">
        <h2> {pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>


        {/* {pizzaObj.soldOut ? 
          <span>sold out</span> : <h1> {pizzaObj.price}</h1>
        } */}
        <p>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</p>
      </div>
    </section>
  );
}

function Footer() {
  const hour = new Date().getHours(); /// 20
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div>
      <p>
        We're open from {openHour}:00 | until {closeHour}:00 , Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
