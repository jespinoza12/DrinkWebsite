import React from "react";
import "./view.css"
import DrinkList from "./drinkList";

const View = ({drinks, deleted, created}) => {
    return (

        <div className="view">
            {
                deleted ? <h1>Delete Drinks</h1> : <h1>View Drinks</h1>
            }
            <p>-----</p>
            <div className="container">
                <DrinkList drinks = {drinks} deleted={deleted} created={created}/>
                
            </div>
            <a className="button" href="/">Back</a>
        </div>
    )
}

export default View