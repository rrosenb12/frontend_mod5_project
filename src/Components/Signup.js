import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'
import WelcomePage from './WelcomePage'

class Signup extends React.Component{

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
        .then(users => this.setState({users: users}, () => {
            let user = this.state.users.find(user => user.username === this.state.username)
            user === undefined ? this.createUser() : window.alert('you already have an account')
        }))
    }
    
    createUser(){
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username, 
                password: this.state.password})
            })
        .then(response => response.json())
        .then(response => this.props.signupHandler(response))
        .catch(error=>console.log(error));
    }
    
    render(){
        return(
            <div>
                {this.state.currentUser ? 
                    <WelcomePage/> 
                : 
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username" placeholder="IGN or Username" value={this.state.username} onChange={this.handleChange}/>
                        <input type="password" name="password" placeholder="Create Password" value={this.state.password} onChange={this.handleChange}/>
                        <input type="submit" value="Create Account"/>
                    </form>
                }
            </div>
        )
    }
}

export default Signup
// export default connect(null, {fetchUser})(Signup)