import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class NavBar extends React.Component{

    componentDidUpdate(){
        console.log(this.props.user)
    }

    render(){
        console.log(this.props.user)
        return(
            <div className='navbar'>
                {/* {this.props.user.count === undefined ? <><NavLink to='/login'><button className='navbarbutton'>Login</button></NavLink> <NavLink to='/signup'><button className='navbarbutton'>Signup</button></NavLink></> : null} */}
                <NavLink to='/login'><button className='navbarbutton'>Login</button></NavLink> 
                <NavLink to='/signup'><button className='navbarbutton'>Signup</button></NavLink>
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

export default connect(mapStateToProps)(NavBar)