import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import View from "./components/view_drinks/view"
import Add from "./components/add_drinks/add"
import Delete from "./components/delete_drinks/delete"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;