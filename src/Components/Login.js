import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../Actions/userActions'
// import {fetchUser} from '../actions'
import WelcomePage from './WelcomePage'
import nooksticka from '../nooksticka.png'

class Login extends React.Component{

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
        this.props.loginUser(this.state)
        // this.props.loginHandler(this.state)
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

export default connect(null, {loginUser})(Login)