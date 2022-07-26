import React from 'react'
import DrinkCard from "./drinkcard"

const DrinkList = ({drinks, created, deleted}) => {
return (
    drinks.map((drink) => (
        <div key={drink._id || drink.drinkId} className='container'>
            <div>
                <DrinkCard drink = {drink} created = {created} deleted = {deleted}/>
            </div>
        </div>
    ))
)}
export default DrinkList