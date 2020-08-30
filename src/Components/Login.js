import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'
import WelcomePage from './WelcomePage'

class Login extends React.Component{

    state = {
        username: '',
        password: '',
        currentUser: false,
        users: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {this.setState({users: users}, () => {
            console.log(this.state.users)
            let user = this.state.users.find(user => user.username === this.state.username)
            console.log(user)
            if (user !== undefined){ 
            this.setState(previousState =>{return{currentUser: !previousState.currentUser}})
            this.props.fetchUser(user)} else {
                window.alert('you need to create an account')
            }
        })})
    }

    render(){
        return(
            <div>
                {this.state.currentUser ? 
                    <WelcomePage />
                :
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="IGN or Username" value={this.state.username} onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="Create Password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit" value="Login"/>
                </form>
                }
            </div>
        )
    }
}

export default connect(null, {fetchUser})(Login)