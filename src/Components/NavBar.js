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
                            <NavLink to='/login' className='navbarbutton' >Login</NavLink> 
                            <NavLink to='/signup'className='navbarbutton'>Signup</NavLink>
                        </> 
                    : 
                        <>
                            <NavLink to='/logout'>
                                <button className='navbarbutton' onClick={() => 
                                    {
                                        this.setState(previousState => {
                                            return{loggedOut: !previousState.loggedOut}})
                                            return this.props.logOutUser()
                                    }
                                }>Logout</button>    
                            </NavLink>
                            <NavLink to='/upload'className='navbarbutton'>Upload Image</NavLink>
                        </>
                    }
                    <NavLink to='/search'className='navbarbutton'>Search</NavLink>
                    <NavLink to='/profile'className='navbarbutton'>My Page</NavLink>
                    <NavLink to='/'className='navbarbutton'>Home</NavLink>
                </div>
                <div className='silos'>
                    <img className='silo' src={nooksilo} height="70"/>
                    <img className='silo' src={isabellesilo} height="70"/>
                    <img className='silo' src={kksilo} height="70"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.currentUser.state}
}

export default connect(mapStateToProps, {unClickItem, logOutUser})(NavBar)