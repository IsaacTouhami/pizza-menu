import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
    photoName: "/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App() {
  return (
    <div className="App">
    <Header />
    <Menu />
    <Footer />
    </div>
  );
}
function Header() {
  return (
      <h1 className='title'>Isaazzeria React Co.</h1>
  );
}

function Menu() {
  const openHour= 11;
  const closeHour = 21;
  const hour = new Date().getHours();
  const cond = hour >= openHour && hour <closeHour
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
   setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);


  return (
    <div className='menu'>
    <h2>Menu</h2>
    <ul className='pizzas'>
    {pizzaData.map((pizza) => ( 
      <Pizza data={pizza} key ={pizza.name}/>
    ))}    
    </ul>
    {cond ?<p>We're open from {openHour}:00  to {closeHour}:00, it's {time}</p>: <p>We'll open at {openHour}:00,wait for us,  it's {time}</p> }
    </div>
  );
}

function Pizza({data}) {

  return (
    <li className={`pizza ${data.soldOut ? "sold": ""}`}>
      <img src={data.photoName} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <p>{data.price}$</p>
        <span>{data.soldOut  ? "Sold Out" : <button>Add to cart</button>}</span>
      </div>
    </li>
  );
}


function Footer() {
  return (
    <footer>
      <p>© 2024 Isaazzeria React Co.</p>
    </footer>
  );
}

export default App;
