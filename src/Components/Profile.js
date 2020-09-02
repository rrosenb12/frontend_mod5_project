import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


class Profile extends React.Component{

    //use fetchedUser for displaying pro pic, this.props.user for everything else (rails is annoying)
    // state = {
    //     fetchedUser: {}
    // }

    // componentDidMount(){

        // this.props.user !== undefined &&
        // fetch(`http://localhost:3000/users/${this.props.user.id}`)
        // .then(response => response.json())
        // .then(user => this.setState({fetchedUser: user}))
    // }

//     render(){
//         // this.props.user !== undefined && console.log(this.props.user.villagers)
//         // this.state.fetchedUser.pro_pic !== undefined && console.log(this.state.fetchedUser.pro_pic.url)
//     return(
        
//         <div>
//             {this.props.user ?
//             <>
//                 {/* {this.props.user !== undefined && this.state.fetchedUser.pro_pic !== undefined ?  */}
//                     <div>
//                         <h1>{this.props.user.username}</h1>
//                         {this.props.user.villagers.map(villager => {
//                             return <p>{villager.name}</p>
//                         })} 
//                         <img src={this.state.fetchedUser.pro_pic.url} alt="pro pic"/>
//                     </div>
//                 : 
//                     <h1>Please log in or create an account</h1>}
//             </>
//             : <Redirect to='/'/>}
//         </div>
//     )
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


const mapStateToProps = state => {
    return {currentUser: state.currentUser.currentUser}
}
export default Profile
// export default connect(mapStateToProps)(Profile)