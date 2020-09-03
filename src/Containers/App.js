import React from 'react';
import {Switch, withRouter, Route} from 'react-router-dom'
import {setUser} from '../Actions/userActions'
import {fetchTags} from '../Actions/actions'
import {connect} from 'react-redux'
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

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token) {
      console.log("in CDM:", token)
      this.props.setUser(token)
      this.setState({
        user: this.props.currentUser
      })
    } else {
      this.props.history.push('/')
    }
  }

  render(){
    console.log("in app:", this.props.currentUser)
    return (
      <Switch>
        <div>
          <NavBar user={this.state.user}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' render={() => <Login loginHandler={this.loginHandler}/>}/>
          <Route exact path='/signup' render={() => <Signup signupHandler={this.signupHandler}/>}/>
          <Route exact path='/search' render={() => <Search currentUser={this.state.user}/>}/>
          <Route exact path='/profile' render={() => <Profile currentUser={this.state.user}/>}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/upload' render={() => <UploadImage currentUser={this.state.user}/>}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/feed' render={() => <Feed currentUser={this.state.user}/>}/>
        </div>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return{currentUser: state.currentUser}
}

export default connect(mapStateToProps, {fetchTags, setUser})(withRouter(App))