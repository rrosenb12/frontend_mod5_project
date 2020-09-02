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
import Feed from '../Components/feed'


class App extends React.Component {

  state = {
    user: null
  }

  loginHandler = (userObj) => {
    this.setState({user: userObj})
  }

  signupHandler = (userObj) => {
    this.setState({user: userObj})
  }

  logOutUser = () => {
    this.setState({user: null}, () => {console.log(this.state.user)})
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <NavBar currentUser={this.state.user} logOutUser={this.logOutUser}/>
          <Route exact path="/" component={Home}/>
          <Route exact path='/login' render={() => <Login loginHandler={this.loginHandler}/>}/>
          <Route exact path='/signup' render={() => <Signup signupHandler={this.signupHandler}/>}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/upload' component={UploadImage}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/feed' component={Feed}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
