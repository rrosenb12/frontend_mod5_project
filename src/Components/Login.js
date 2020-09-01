import React from 'react'
// import {connect} from 'react-redux'
// import {fetchUser} from '../actions'
import WelcomePage from './WelcomePage'
import nooksticka from '../nooksticka.png'

export default class Login extends React.Component{

    state = {
        username: '',
        password: '',
        // currentUser: false,
        // users: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.loginHandler(this.state)
        // fetch('http://localhost:3000/users', {
        //     method: 'GET'
        //     // ,
        //     // headers: {
        //     //     Authorization: `Bearer ${token}`
        //     // }
        // })
        // .then(response => response.json())
        // .then(users => {this.setState({users: users}, () => {
        //     let user = this.state.users.find(user => user.username === this.state.username)
        //     if (user !== undefined){ 
        //     this.setState(previousState =>{return{currentUser: !previousState.currentUser}})
        //     this.props.fetchUser(user)} else {
        //         window.alert('you need to create an account')
        //     }
        // })})
    }

    render(){
        return(
            <div className="formparent">
                {this.state.currentUser ? 
                    <WelcomePage />
                :
                <>
                <div className="wc">
                    <div className="welcomecontainer">
                        <h1 className="welcometext">Yes, yes! Welcome back!</h1>
                        <img className="sticker" src={nooksticka} height="300" alt="tom nook sticker"></img>
                    </div>
                    </div>
                <div className="formcontainer">
                    <h1>Please, login!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="inputfields">
                        <input className="usernameform" type="text" name="username" placeholder="IGN or Username" value={this.state.username} onChange={this.handleChange}/>
                        <input className="passwordform" type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="submitbutton">
                        <input type="submit" value="Login" className="sb"></input>
                    </div>
                </form>
                </div>
                </>
                }
            </div>
        )
    }
}

// export default connect(null, {fetchUser})(Login)