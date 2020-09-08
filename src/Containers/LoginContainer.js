import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../Actions/userActions'
import WelcomePage from '../Components/WelcomePage'
import UserForm from '../Components/UserForm'

class Login extends React.Component{
    
    handleLogin = userObj => {
        this.props.loginUser(userObj)
    }

    toRender = () => {
        if (this.props.error === null) {
            return <UserForm manageUser={this.handleLogin} comingFrom="login"/> 
        } else if (this.props.error === 'Invalid Username or Password') {
            return <>
            <p>{this.props.error}</p> 
            <UserForm manageUser={this.handleLogin} comingFrom="login"/> 
            </>
        } else {
            return <WelcomePage />
        }
    }

    render(){
        console.log(this.props.error)
        return(
            this.toRender()
            // <div className="loginform">
            //     {this.props.error ? 
            //     <>
            //     <p>{this.props.error}</p> 
            //     <UserForm manageUser={this.handleLogin} comingFrom="login"/> 
            //     </>
            //     : <WelcomePage />}
            // </div>
        )
    }
}

const mapStateToProps = state => {
    return {error: state.currentUser.error}
}

export default connect(mapStateToProps, {loginUser})(Login)