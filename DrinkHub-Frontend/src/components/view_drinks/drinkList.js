import React from 'react'
import DrinkCard from "./drinkcard"

const DrinkList = ({drinks}) => {
return (
    drinks?.map((drink) => (
        <div key={drink.idDrink} className='container'>
            <div>
                <DrinkCard drink = {drink}/>
            </div>
        </div>
    ))
)}
export default DrinkList