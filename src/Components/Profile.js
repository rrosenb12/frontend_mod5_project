import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


class Profile extends React.Component{

    render(){
        console.log(this.props)
    return(
        
        <div>
            {this.props.currentUser !== null ? 
                <div>
                    <h1>{this.props.currentUser.username}</h1>
                    {/* {this.props.usersVillagers.map(villager => {
                        return <p>{villager.name}</p>
                    })}  */}
                </div>
            : 
                <h1>Please log in or create an account</h1>}
        </div>
    )
}
}

const mapStateToProps = state => {
    return {currentUser: state.currentUser.currentUser
        // , userVillagers: state.villagers.usersVillagers
    }
}

export default connect(mapStateToProps)(Profile)