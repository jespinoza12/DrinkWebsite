import React, {useState} from 'react'
import DrinkList from './drinkList'
import axios from 'axios'

const DrinkCard = ({drink, created, deleted}) => {

    const [drinks, setDeck] = useState({
      drinkId: drink._id
    })

    function onClick2(e){
      setDeck({
        deckId: drink._id
      })
      const {drinkId} = drinks
      if (drinkId){
        axios.post("http://localhost:3002/deleteDrink", drinks)
        window.location.reload()
      }else{
        console.log("Oops")
      }
    }
return (
          <div className=''>
            <img src={drink.strDrinkThumb} className="imgSmall"></img>
            <p className='fontSize'>Name: {drink.name || drink.strDrink}</p>
            <p>-------------------</p>            
            <p className='fontSize'>ingredients:</p>
            <p className='fontSize'>{drink.ingredients || drink.strIngredient1}</p>
            <p><p className='fontSize'>{drink.strIngredient2 || ""}</p><p className='fontSize'>{drink.strIngredient3 || ""}</p><p className='fontSize'>{drink.strIngredient4 || ""}</p><p className='fontSize'>{drink.strIngredient5 || ""}</p>
            <p className='fontSize'>{drink.strIngredient6 || ""}</p><p className='fontSize'>{drink.strIngredient7 || ""}</p> <p className='fontSize'>{drink.strIngredient8 || ""}</p></p>  
            {
              created?  <p className='fontSize'>Created By: {drink.username}</p> : <p></p>
            }
            {
              deleted ? <button className='button' onClick={onClick2}>Delete</button> : <div></div>

            }
            <p>-------------------------</p>
          </div>
    )}

export default DrinkCard