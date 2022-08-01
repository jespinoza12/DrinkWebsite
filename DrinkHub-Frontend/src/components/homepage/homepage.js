import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <div className="container">
                <h1>Welcome Customer</h1>
                <h3>What would you like to order?</h3>
                <div className="menu">
                    <div id="red" className="option"></div>
                    <div id="yellow" className="option"></div>
                    <div id="blue" className="option"></div>
                </div>
                <div className="menu">
                    <div id="orange" className="option"></div>
                    <div id="green" className="option"></div>
                    <div id="purple" className="option"></div>
                </div>
            </div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage