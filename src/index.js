import React from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data';
import './index.css';

const App = () => {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
};

const Header = () => {
    const style = {}
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
};

const Menu = () => {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <ul className="pizzas">
                <Pizza />
            </ul>
        </main>
    );
};

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    // if (hour >= openHour && hour <= closeHour) alert('We are currently open!');
    // else alert("Sorry we're closed");
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}. We are currently open!
        </footer>
    );
};

const Pizza = () => {
    return (
        <div className="pizza">
            {pizzaData.map((pizza) => {
                return (
                    <div key={pizza.name} >
                        <img src={pizza.photoName} alt={pizza.name} />
                        <h3>{pizza.name}</h3>
                        <p>{pizza.ingredients}</p>
                        <span>{pizza.price}</span>
                    </div>
                );
            })}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
