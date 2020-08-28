import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'
import WelcomePage from './WelcomePage'

class Signup extends React.Component{

    state = {
        user: {
            username: '',
            password: '',
            pro_pic: null,
            currentUser: false
        }    
    }

    handleChange = e => {
        this.setState({user: {
            ...this.state.user,
            [e.target.name]: e.target.value
        }})
    }


    onImageChange = event => { 
        this.setState({user: {
            ...this.state.user,
            pro_pic: event.target.files[0] }
        });
    };

    handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', this.state.user.username);
        formData.append('password', this.state.user.password);
        formData.append('pro_pic', this.state.user.pro_pic);
        this.setState(previousState => {
            return {
                currentUser: !previousState.currentUser
            }
        })
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: ({user: formData})
            })
            .then(response => response.json())
            .then(console.log)
            .catch(error=>console.log(error));
        // fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     headers: {
        //         'accepts': 'application/json',
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password
        //     })
        // })
        // .then(response => response.json())
        // .then(resp => this.props.fetchUser(resp))
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