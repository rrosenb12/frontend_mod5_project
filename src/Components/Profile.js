import React from 'react'
import {connect} from 'react-redux'


class Profile extends React.Component{

    //use fetchedUser for displaying pro pic, this.props.user for everything else (rails is annoying)
    state = {
        fetchedUser: {}
    }

    // componentDidMount(){
    //     this.props.user !== undefined &&
    //     fetch(`http://localhost:3000/users/${this.props.user.id}`)
    //     .then(response => response.json())
    //     .then(user => this.setState({fetchedUser: user}))
    // }

    render(){
        console.log(this.props.currentUser)
    return(
        
        <div>
            {this.props.currentUser !== null ? 
                <div>
                    <h1>{this.props.currentUser.username}</h1>
                    {this.props.currentUser.villagers.map(villager => {
                        return <p>{villager.name}</p>
                    })} 
                </div>
            : 
                <h1>Please log in or create an account</h1>}
        </div>
    )
}
}

// const mapStateToProps = state => {
//     return {user: state.currentUser.state}
// }

export default Profile
// export default connect(mapStateToProps)(Profile)