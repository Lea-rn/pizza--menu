import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"

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
      <Menu  />
      <Footer />
    </div>
  );
}



function Header() {


  return <h1 className="title" >Fast React Pizza Co.</h1>;
}

function Menu(props) {
  return (
    <div>
      <h2 className="menu-title">Our Menu </h2>
<div className="cards-container">
        <Pizza name="Focaccia"    
          ingredients= "Bread with italian olive oil and rosemary"
             photoName= "pizzas/focaccia.jpg"
             price={18}
          
          />

                 <Pizza name="Pizza Margherita"    
          ingredients= "Tomato and mozarella"
             photoName= "pizzas/margherita.jpg"
             price={18}
          
          />
     
</div>
    </div>
  );
}

function Pizza(props) {
  console.log("props :" , props)
  return (
    <section className="card">
      <img height={200} src={props.photoName} alt={props.name} />
     <div className="card-info">
       <h2> {props.name}</h2>
       <p>{props.ingredients}</p>
       <p>{props.price  }</p>
     </div>
    </section>
  );
}



function Footer() {
  const hour = new Date().getHours();  /// 21
  const openHour = 12 ; 
  const closeHour = 22 ; 
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
//   if (hour >= openHour && hour <= closeHour){
// alert("We're currently open")
//   }  else {
//     alert("Sorry we're closed !!!!")
//   }
  return (
    <footer> {new Date().toLocaleTimeString()} We're currently open</footer>
  );
}





const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
