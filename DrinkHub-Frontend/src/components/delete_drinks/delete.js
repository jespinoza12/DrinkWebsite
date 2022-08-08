import React from "react";
import "./delete.css"
import DrinkList from "./drinkList";

const Delete = (drinks, rawr) => {
    return (
        <div className="view">
        <h1>Delete Drinks</h1>
        <p>-----</p>
        <div className="container">
            <DrinkList drinks = {drinks} rawr={rawr}/>
        </div>
        <a className="button" href="/">Back</a>
    </div>
    )
}

export default Delete