import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar(){
    return(
        <div className='navbar'>
            <NavLink to='/login'><button className='navbarbutton'>Login</button></NavLink>
            <NavLink to='/search'><button className='navbarbutton'>Search</button></NavLink>
            <NavLink to='/profile'><button className='navbarbutton'>My Page</button></NavLink>
            <NavLink to='/'><button className='navbarbutton'>Home</button></NavLink>
        </div>
    )
}