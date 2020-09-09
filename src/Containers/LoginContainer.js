import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../Actions/userActions'
import UserForm from '../Components/UserForm'
import {Redirect} from 'react-router-dom'

class Login extends React.Component{
    
    handleLogin = userObj => {
        this.props.loginUser(userObj)
    }

    toRender = () => {
        if (this.props.error === null) {
            return <UserForm manageUser={this.handleLogin} comingFrom="login"/> 
        } else if (this.props.error === 'Invalid Username or Password') {
            return <>
            <p className="error">{this.props.error}</p> 
            <UserForm manageUser={this.handleLogin} comingFrom="login"/> 
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

export default connect(mapStateToProps, {loginUser})(Login)