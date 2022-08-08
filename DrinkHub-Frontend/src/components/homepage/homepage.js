import React from "react"
import "./homepage.css"



const Homepage = ({setLoginUser}) => {
    
    const handleClick = (e) => {
        e.preventDefault()
        setLoginUser({})
        localStorage.clear()

    }
    return (
        <div className="homepage">
            <div className="container">
                <h1>Welcome {localStorage.getItem('username')}</h1>
                <h3>What would you like to do?</h3>
                <div className="menu">
                    <a id="red" className="option" href="/view">View Created Drinks</a>
                    <a id="yellow" className="option" href="/add">Add Drinks</a>
                    <a id="blue" className="option" href="/delete">Delete Drinks</a>
                    <a id="red" className="option" href="/viewAllDrink">View All Drinks</a>
                </div>
            </div>
            <div className="button" onClick={handleClick} >Logout</div>
        </div>
    )
}

export default Homepage