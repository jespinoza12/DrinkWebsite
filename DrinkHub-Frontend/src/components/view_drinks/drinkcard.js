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
            <p>Name: {drink.name || drink.strDrink}</p>
            --------
            <p>{drink.ingredients || drink.strIngredient1}</p>
            <p><p>{drink.strIngredient2 || ""}</p><p>{drink.strIngredient3 || ""}</p></p>  
            {
              created?  <p>Created By: {drink.username}</p> : <p></p>
            }
            {
              deleted ? <button className='button' onClick={onClick2}>Delete</button> : <div></div>

            }
            <p>-------------------------</p>
          </div>
    )}

export default DrinkCard