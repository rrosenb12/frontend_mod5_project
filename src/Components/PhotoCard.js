import React from 'react' 
import {connect} from 'react-redux'

class PhotoCard extends React.Component{

    state = {
        users: []
    }

    setUser = photo => {
        if (this.state.users.length === 0) {
            return null 
        } else {
            let author = this.state.users.find(user => user.id === photo.user_id)
            return author.username
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(usersArray => {
            let ids = usersArray.map(user => user.id)
            if (ids.includes(this.props.currentUser.id)) {
                this.setState({users: usersArray})
            } else {
                let newUsersArray = usersArray.concat(this.props.currentUser)
                this.setState({users: newUsersArray})
            }
        })
    }

    render(){
        return(
            <div className="photocard">
                {this.props.from ? <h1 className="photocardtitle"> {this.props.photo.description}</h1> :
                <h1 className="photocardtitle"> {this.props.photo.description}, by {this.setUser(this.props.photo)}</h1>}
                <img className="photocardimg" alt="gallery" src={this.props.photo.image.url}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {currentUser: state.currentUser.currentUser}
}

export default connect(mapStateToProps)(PhotoCard)