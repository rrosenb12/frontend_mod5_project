import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'

class Signup extends React.Component{

    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(resp => this.props.fetchUser(resp))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="IGN or Username" value={this.state.username} onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="Create Password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="Create Account"/>
            </form>
        )
    }
}

export default connect(null, {fetchUser})(Signup)