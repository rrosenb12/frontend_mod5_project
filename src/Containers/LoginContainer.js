import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../Actions/userActions'
import WelcomePage from '../Components/WelcomePage'

import UserForm from '../Components/UserForm'

class Login extends React.Component{
    
    handleLogin = userObj => {
        this.props.loginUser(userObj)
    }

    render(){
        return(
            <div className="loginform">
                <UserForm manageUser={this.handleLogin} comingFrom="login"/>
            </div>
        )
    }
}

export default connect(null, {loginUser})(Login)