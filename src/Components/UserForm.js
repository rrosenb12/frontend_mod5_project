import React from 'react'
import nooksticka from '../nooksticka.png'

export default class UserForm extends React.Component{

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
        this.props.manageUser(this.state)
    }

    render(){
        return(
            <div className="formparent">
                <>
                <div className="wc">
                    <div className="welcomecontainer">
                        {this.props.comingFrom === 'login' ? <h1 className="welcometext">Yes, yes! Welcome back!</h1> : <h1 className="welcometext">Let's get you signed up, hm?</h1>}
                        <img className="sticker" src={nooksticka} height="300" alt="tom nook sticker"></img>
                    </div>
                    </div>
                <div className="formcontainer">
                    {this.props.comingFrom === 'login' ? <h1>Please, login!</h1> : <h1>Create your account here!</h1>}
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
            </div>
        )
    }
}