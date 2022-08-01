import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <div className="container">
                <h1>Welcome Customer</h1>
                <h3>What would you like to do?</h3>
                <div className="menu">
                    <div id="red" className="option">View Drinks</div>
                    <div id="yellow" className="option">Add Drinks</div>
                    <div id="blue" className="option">Delete Drinks</div>
                </div>
            </div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage