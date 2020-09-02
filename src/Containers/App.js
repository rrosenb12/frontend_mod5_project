import React from 'react';
import {Switch, withRouter, Route} from 'react-router-dom'
import {fetchTags} from '../actions'
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
import Feed from '../Components/Feed'


class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => response.json())
      .then(console.log)
    } else {
      this.props.history.push('/signup')
    }
  }

  // loginHandler = (userObj) => {
  //   fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     headers: {
  //       'accepts': 'application/json',
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify({user: userObj})
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     localStorage.setItem("token", data.jwt)
  //     this.setState({user: data.user}, () => this.props.history.push('/profile'))
  //   })
  // }

  submitHandler = (userObject) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'accepts': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(userObject)
            })
    .then(response => response.json())
    .then(data => this.setState({user: data.user}))
  }

  render(){
    return (
      <Switch>
        <div>
          <NavBar user={this.state.user}/>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path='/login' render={() => <Login loginHandler={this.loginHandler}/>}/> */}
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' render={() => <Signup submitHandler={this.submitHandler}/>}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/profile' component={Profile}/>
          {/* <Route exact path='/profile' render={() => <Profile user={this.props.currentUser} />}/> */}
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/upload' component={UploadImage}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/feed' render={() => <Feed user={this.props.currentUser}/>}/>
        </div>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return{currentUser: state.currentUser.currentUser}
}

export default connect(mapStateToProps, {fetchTags})(withRouter(App))