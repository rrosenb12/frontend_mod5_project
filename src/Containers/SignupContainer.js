import React from 'react'
import WelcomePage from '../Components/WelcomePage'
import {connect} from 'react-redux'
import {createUser} from '../Actions/userActions'

import UserForm from '../Components/UserForm'

class Signup extends React.Component{

    signupHandler = userObj => {
        console.log("in sign up handler:", userObj)
        this.props.createUser(userObj)
    }
    
    render(){
        return(
            <div className="signupform">
                <UserForm comingFrom="signup" manageUser={this.signupHandler}/>
            </div>
        )
    }
}


export default connect(null, {createUser})(Signup)