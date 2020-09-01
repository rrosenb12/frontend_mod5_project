import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import '../App.css';
import Home from '../Components/Home'
import NavBar from '../Components/NavBar'
import Login from '../Components/Login'
import Search from '../Components/Search'
import Profile from '../Components/Profile'
import Signup from '../Components/Signup'
import Logout from '../Components/Logout'
import UploadImage from '../Components/UploadImage'
import Gallery from '../Components/Gallery'


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/upload' component={UploadImage}/>
          <Route exact path='/gallery' component={Gallery}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
