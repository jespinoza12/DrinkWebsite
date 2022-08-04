import React from "react";
import "./view.css"
import DrinkList from "./drinkList";

const View = ({drinks}) => {
    return (
        <div className="view">
            <div className="container">
                <h1>View Drinks</h1>
                <DrinkList drinks = {drinks}/>
            </div>
            <a className="button" href="/">Back</a>
        </div>
    )
}

export default View