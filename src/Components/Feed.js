import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
// import {fetchTags} from '../actions'

function Feed(props) {

    // componentDidMount(){
    //     return this.props.tags === undefined ? this.props.fetchTags() : null
    // }

    // render(){
    //     return <div>
    //         {this.props.tags === undefined ? null : console.log(this.state.tags)}
    //             <h1>{this.props.user.username}'s Feed</h1>
    //             <p>What would you like to see in your feed?</p>
    //             <button></button>
        
    //     </div>
    // }

    return(
        <>
            {props.currentUser ? <h1>hi</h1> : <Redirect to='/'/>}
        </>
        
    ) 
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.currentUser
    }
}

export default connect(mapStateToProps)(Feed)