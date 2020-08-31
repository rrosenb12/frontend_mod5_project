import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'
import WelcomePage from './WelcomePage'

class Signup extends React.Component{

    state = {
        username: '',
        password: '',
        pro_pic: null,
        currentUser: false,
        users: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onImageChange = event => { 
        this.setState({
            pro_pic: event.target.files[0] }
        );
    };

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
        const formData = new FormData()
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        formData.append('pro_pic', this.state.pro_pic);
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: (formData)
            })
        .then(response => response.json())
        .then(response => this.props.fetchUser(response))
        .then(this.setState(previousState => {
            return {
                currentUser: !previousState.currentUser
            }
        }))
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
                        <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
                        <input type="submit" value="Create Account"/>
                    </form>
                }
            </div>
        )
    }
}

export default connect(null, {fetchUser})(Signup)