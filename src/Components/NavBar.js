import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

function NavBar(props){
        return(
            <div className='navbar'>
                {props.user.state === undefined ? 
                    <>
                        <NavLink to='/login'><button className='navbarbutton'>Login</button></NavLink> 
                        <NavLink to='/signup'><button className='navbarbutton'>Signup</button></NavLink>
                    </> 
                : 
                    <button className='navbarbutton'>Logout</button>
                }
                <NavLink to='/search'><button className='navbarbutton'>Search</button></NavLink>
                <NavLink to='/profile'><button className='navbarbutton'>My Page</button></NavLink>
                <NavLink to='/'><button className='navbarbutton'>Home</button></NavLink>
            </div>
        )

}

const mapStateToProps = state => {
    return {user: state.currentUser}
}

export default connect(mapStateToProps)(NavBar)