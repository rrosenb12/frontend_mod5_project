import React from 'react'
import WelcomePage from '../Components/WelcomePage'
import {connect} from 'react-redux'
import {createUser} from '../Actions/userActions'
import {Redirect} from 'react-router-dom'

import UserForm from '../Components/UserForm'

class Signup extends React.Component{

    signupHandler = userObj => {
        console.log("in sign up handler:", userObj)
        this.props.createUser(userObj)
    }

    toRender = () => {
        if (this.props.error === null) {
            return <UserForm manageUser={this.signupHandler} comingFrom="signup"/>
        } else if (this.props.error === 'That username is already taken.') {
            return <>
                <p className="error">{this.props.error}</p> 
                <UserForm manageUser={this.signupHandler} comingFrom="signup"/>
            </>
        } else {
            return <Redirect to="/profile"/>
        }
    }
    
    render(){
        return(
            this.toRender()
        )
    }
}

const mapStateToProps = state => {
    return {error: state.currentUser.error}
}

export default connect(mapStateToProps, {createUser})(Signup)