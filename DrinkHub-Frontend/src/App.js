import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import View from "./components/view_drinks/view"
import Add from "./components/add_drinks/add"
import axios from 'axios'
import Delete from "./components/delete_drinks/delete"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [user, setLoginUser] = useState({})
  const [drinks, setDrinks] = useState([])
  const [sDrink, setSDrink] = useState([])
  const [myDrinks, setMyDrinks]  = useState([])
  const [data, setData] = useState([])
  const [cdrinks, setcDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState([])
  const [check, setCheck] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const drinksURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  useEffect(() => {
    setLoginUser({
      _id: localStorage.getItem('user')
    })
      getAllMyCreatedDrinks()
      getAllDrinks()
      getAllCreatedDrinks()
      getNonAlcDrinks()
      getAllCreatedDrinks()
    
  }, []);

  useEffect(() => {
    getSearchedDrinks(searchTerm)
    getFilteredCards()
  }, [searchTerm]);

  const getAllDrinks = () => {
    axios
      .get(drinksURL)
      .then(function (response) {
        setData(response.data.drinks)
        setDrinks(current => [...current, {data}]);

        setDrinks(response.data.drinks);
        console.log(drinks);
        console.log(response.data.drinks)
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  const getNonAlcDrinks = () => {
    var url = "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    axios
      .get(url)
      .then(function (response) {
        setDrinks(response.data.drinks);
        setData(response.data.drinks)
        setDrinks(current => [...current, {data}]);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }

  const getSearchedDrinks = (query) => {
    var url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

  }

  const getAllCreatedDrinks = () => {
    axios.get('http://localhost:3002/allDrinks')
    .then((response) => {
      setcDrinks(response.data)
      console.log(response.data)
      console.log('Data has been received!!');
    })
    .catch((error) => {
      console.log(error)
      console.log('Error retrieving data!!!');
    });
  } 

  const getAllMyCreatedDrinks = () => {
    axios.get('http://localhost:3002/allDrinks')
    .then((response) => {
      var tempDrinks = response.data.filter((drinks) => {
        return drinks.authorId === localStorage.getItem('user')
      })
      setMyDrinks(tempDrinks)
      console.log(tempDrinks)
      console.log('Data has been received!!');
    })
    .catch((error) => {
      console.log(error)
      console.log('Error retrieving data!!!');
    });
  } 

  const getFilteredCards = () => {
      
  }
  const getDrinkForDelete = (drink) => {
      setSDrink(drink)
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
              user && user._id && check === false ?  <View drinks = {cdrinks} created = {true} deleted = {false}/>: <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/viewAllDrink">
            {
              user && user._id && check === false ?  <View drinks = {drinks} created = {false} deleted = {false}/>: <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/add">
            {
              user && user._id ? <Add /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/delete">
            {
              user && user._id && check === false? <View drinks = {myDrinks} created = {true} deleted = {true}/> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;