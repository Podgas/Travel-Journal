import React from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import cardData from "./data.js";
import "./App.css";

export default function App() {
    const cardElements = cardData.map((element) => {
        return <Card key={element.id} {...element} />;
    });

    return (
        <>
            <Header />
            <div className="card-container">{cardElements}</div>
        </>
    );
}
