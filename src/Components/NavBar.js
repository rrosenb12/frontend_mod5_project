import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {unClickItem, logOutUser} from '../actions'
import nooksilo from '../nooksilo.png'
import isabellesilo from '../isabellesilo.png'
import kksilo from '../kksilo.png'

class NavBar extends React.Component{

    state={
        loggedOut: false
    }

    render(){
        return(
            <div className='navbar' onClick={this.props.unClickItem} >
                <div className='buttons'>
                    {this.props.user === undefined || this.state.loggedOut ? 
                        <>
                            <NavLink to='/login' className='navbarbutton' id="login">Login</NavLink> 
                            <NavLink to='/signup'className='navbarbutton' id="signup">Signup</NavLink>
                        </> 
                    : 
                        <>
                            <button to='/logout' className='navbarbutton' id="logout" onClick={() => 
                                    {   
                                        localStorage.removeItem("token")
                                        this.setState(previousState => {
                                            return{loggedOut: !previousState.loggedOut}})
                                            return this.props.logOutUser()
                                    }
                                }>Logout  
                            </button>
                            <NavLink to='/upload'className='navbarbutton' id="upload">Upload Image</NavLink>
                            <NavLink to='/feed' className='navbarbutton' id='feed'>The Feed</NavLink>
                        </>
                    }
                    <NavLink to='/search'className='navbarbutton' id="search">Search</NavLink>
                    <NavLink to='/profile'className='navbarbutton' id="page">My Page</NavLink>
                    <NavLink to='/gallery'className='navbarbutton' id='gallery'>Gallery</NavLink>
                    <NavLink to='/'className='navbarbutton' id="home">Home</NavLink>
                </div>
                <div className='silos'>
                    <img alt=" silo" className='silo' src={nooksilo} height="70"/>
                    <img alt=" silo" className='silo' src={isabellesilo} height="70"/>
                    <img alt=" silo" className='silo' src={kksilo} height="70"/>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {user: state.currentUser.state}
// }

export default connect(null, {unClickItem, logOutUser})(NavBar)