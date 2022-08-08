import React, {useState} from "react";
import "./add.css"
import axios from "axios"

const Add = () => {

    const [check, setCheck] = useState(true)
    const [ drink, setDrink] = useState({
        name: "",
        ingredients: "",
        containsAlc: check,
        authorId: localStorage.getItem('user'),
        username: localStorage.getItem('username'),
        steps:"",
        // containsAlc: check,
    })



    const handleChange2 = e => {
        if (check === false){
            setCheck(true)
            setDrink({
                name: "",
                ingredients: "",
                authorId: localStorage.getItem('user'),
                username: localStorage.getItem('username'),
                steps:"",
                containsAlc: check,
            })
            console.log(drink)
        }else if (check === true){
            setCheck(false)
            setDrink({
                name: "",
                ingredients: "",
                authorId: localStorage.getItem('user'),
                username: localStorage.getItem('username'),
                steps:"",
                containsAlc: check,
            })
            console.log(drink)

        }
    }
    const handleChange = e => {
        const { name, value } = e.target
        setDrink({
            ...drink,
            [name]: value
        })
        console.log(drink)
    }

    const createDrink = () => {
        const { name, steps, ingredients  } = drink
        if( name && steps && ingredients){
            axios.post("http://localhost:3002/createDrinks", drink)
            .then( res => {
                console.log(res.data.message)
            })
        } else {
            console.log("Oopsie")
        }
    }
    
    return (
        <div className="view">
            <h1>Create Drink</h1>
            <p>--------------------------------------------------------</p>
            <label>Contains Alcohol?: <input id="myCheckBox" type="checkbox" onChange={ handleChange2 }></input></label>
            <p>--------------------------------------------------------</p>
            <label>Drink Name: </label>
            <input type="text" name="name" value={drink.name} onChange={ handleChange }></input>
            <p>--------------------------------------------------------</p>
            <label>Ingredients:</label>
            <textarea type="text" name="ingredients" value={drink.ingredients} onChange={handleChange}></textarea>
            <p>--------------------------------------------------------</p>
            <label>Steps:</label>
            <textarea type="text" name="steps" value={drink.steps} onChange={ handleChange }></textarea>
            <button className="button" onClick={createDrink}>Create Drink</button>
            <a className="button" href="/">Back</a>
        </div>
    )
    }

export default Add