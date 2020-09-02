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
import Feed from '../Components/Feed'


class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token) {
      this.props.setUser(token)
    } else {
      this.props.history.push('/signup')
    }
  }

  render(){
    return (
      <Switch>
        <div>
          <NavBar user={this.state.user}/>
          <Route exact path="/" component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/upload' component={UploadImage}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/feed' component={Feed}/>
        </div>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return{currentUser: state.currentUser.currentUser}
}

export default connect(mapStateToProps, {fetchTags, setUser})(withRouter(App))