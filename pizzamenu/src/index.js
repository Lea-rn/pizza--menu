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
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1 className="title">Fast React Pizza Co.</h1>;
}
/// 0 , false , "" , undefined , null
function Menu(props) {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length; //// 0
  return (
    <div>
      <h2 className="menu-title">Our Menu </h2>
      {numPizzas && (
        <div className="cards-container">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </div>
      )}
    </div>
  );
}

function Pizza(props) {
  /////// early return ....
  if (props.pizzaObj.soldOut) return null;
  return (
    <section className="card">
      <img
        height={200}
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
      />
      <div className="card-info">
        <h2> {props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price}</p>
      </div>
    </section>
  );
}

function Footer() {
  const hour = new Date().getHours(); /// 21
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // ///// conditionnal rendering with early return ...
  // if (!isOpen){
  //   return <p style={{textAlign:"center"}}>
  //     We're happy to welcome you between {openHour}:00 and {closeHour}:00
  //   </p>
  // }

  // return (
  //  ////// conditional rendering with && operator ...
  //   <footer>
  //     {isOpen && (   //// true or false
  //       <div>
  //         <p>We're open until {closeHour}:00 , Come visit us or order online</p>
  //         <button className="btn">Order</button>
  //       </div>
  //     )}
  //   </footer>
  // );

  return (
    <footer>
      {isOpen ? (
        <div>
          <p>We're open until {closeHour}:00 , Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          
          We're happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
