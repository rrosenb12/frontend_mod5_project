import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import Login from './Login'
import Search from './Search'
import Profile from './Profile'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/profile' component={Profile}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
