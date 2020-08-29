import React from 'react'
import { connect } from 'react-redux'

 class ItemCard extends React.Component {
    render(){
        console.log(this.props.user)
        return(
            <div key={this.props.item.id}>
            <h1>{this.props.item.name}</h1>
            <p>Add to profile</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.items.state.item,
        user: state.currentUser.state
    }
}

export default connect(mapStateToProps)(ItemCard)