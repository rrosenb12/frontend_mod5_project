import React from 'react'
import {connect} from 'react-redux'

function WelcomePage(props){

    return(
        <>
            {props.user.state === undefined ? <h1>Welcome. You are now logged in.</h1> : <h1>Welcome, {props.user.state.username}. You are now logged in.</h1>}
        </>
    )
}

const mapStateToProps = state => {
    return {user: state.currentUser}
}

export default connect(mapStateToProps)(WelcomePage)