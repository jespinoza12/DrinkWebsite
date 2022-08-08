import React, {useState} from 'react'
import DrinkList from './drinkList'
import axios from 'axios'

const DrinkCard = ({mydrink, created}) => {

  const [drinks, setDeck] = useState({
    drinkId: mydrink._id
  })

  function onClick2(e){
    setDeck({
      deckId: mydrink._id
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
            <img src={mydrink.strDrinkThumb} className="imgSmall"></img>
            <p>Name: {mydrink.name || mydrink.strDrink}</p>
            --------
            <p>{mydrink.ingredients || mydrink.strIngredient1}</p>
            <p><p>{mydrink.strIngredient2 || ""}</p><p>{mydrink.strIngredient3 || ""}</p></p>  
            {
              created?  <p>Created By: {mydrink.username}</p> : <p></p>
            }
            <button className='button' onClick={onClick2}>Delete</button>
            <p>-------------------------</p>
          </div>
    )}

export default DrinkCard