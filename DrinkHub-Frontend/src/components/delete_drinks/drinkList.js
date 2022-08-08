import React from 'react'
import DrinkCard from "./drinkcard"

const DrinkList = ({drinks, rawr}) => {
return (
    drinks.map((drink) => (
        <div key={drink._id || drink.drinkId} className='container'>
            <div>
                <DrinkCard mydrink = {drink} rawr = {rawr}/>
            </div>
        </div>
    ))
)}
export default DrinkList