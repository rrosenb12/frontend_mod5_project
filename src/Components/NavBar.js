import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {unClickItem, logOutUser} from '../actions'

class NavBar extends React.Component{

    state={
        loggedOut: false
    }

    render(){
        return(
            <div className='navbar' onClick={this.props.unClickItem} >
                {this.props.user.state === undefined || this.state.loggedOut ? 
                    <>
                        <NavLink to='/login'><button className='navbarbutton' >Login</button></NavLink> 
                        <NavLink to='/signup'><button className='navbarbutton'>Signup</button></NavLink>
                    </> 
                : 
                    <NavLink to='/logout'>
                        <button className='navbarbutton' onClick={() => 
                            {
                                this.setState(previousState => {
                                    return{loggedOut: !previousState.loggedOut}})
                                    return this.props.logOutUser()
                            }
                        }>Logout</button>    
                    </NavLink>
                }
                <NavLink to='/search'><button className='navbarbutton'>Search</button></NavLink>
                <NavLink to='/profile'><button className='navbarbutton'>My Page</button></NavLink>
                <NavLink to='/'><button className='navbarbutton'>Home</button></NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.currentUser}
}

export default connect(mapStateToProps, {unClickItem, logOutUser})(NavBar)