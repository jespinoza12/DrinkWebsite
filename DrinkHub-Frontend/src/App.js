import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import View from "./components/view_drinks/view"
import Add from "./components/add_drinks/add"
import Delete from "./components/delete_drinks/delete"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  const [drinks, setDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState([])
  const [check, setCheck] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    setLoginUser({
      _id: localStorage.getItem('user')
    })
    if (localStorage.getItem('userAge') === "20"){
      getAllDrinks()
      getAllCreatedDrinks()
    }else {
      getNonAlcDrinks()
      getAllCreatedDrinks()
    }
  }, []);

  useEffect(() => {
    getSearchedDrinks(searchTerm)
    getFilteredCards()
  }, [searchTerm]);

  const getAllDrinks = () => {
    var url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  }

  const getNonAlcDrinks = () => {
    var url = "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
  }

  const getSearchedDrinks = (query) => {
    var url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
  }

  const getAllCreatedDrinks = () => {

  }

  const getFilteredCards = () => {
      
  }
  const getDrinkForDelete = () => {
      
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ?
                <Homepage setLoginUser={setLoginUser}/>
                : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/view">
            {
              user && user._id && check === false ?  <View drinks = {drinks}/>: <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/add">
            {
              user && user._id ? <Add /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/delete">
            {
              user && user._id ? <Delete rawr = {getDrinkForDelete} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;