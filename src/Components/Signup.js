import React from 'react'
import WelcomePage from './WelcomePage'
import {connect} from 'react-redux'
import {createUser} from '../Actions/userActions'

class Signup extends React.Component{

    state = {
        username: '',
        password: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createUser(this.state)
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

export default connect(null, {createUser})(Signup)