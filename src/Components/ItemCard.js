import React from 'react'
import { connect } from 'react-redux'

 class ItemCard extends React.Component {

    clickHandler = () => {
        if(this.props.item.kind === 'fish') {
            fetch(`http://localhost:3000/user_fish`, {
                method: 'POST',
                headers: {
                    'accepts': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.props.user.id,
                    fish_id: this.props.item.id
                })
            })
            .then(response => response.json())
        } else if (this.props.item.kind === 'bugs') {
            fetch(`http://localhost:3000/user_bugs`, {
                method: 'POST',
                headers: {
                    'accepts': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.props.user.id,
                    bug_id: this.props.item.id
                })
            }) 
            .then(response => response.json())
        } else if (this.props.item.kind === 'fossils') {
            fetch(`http://localhost:3000/user_fossils`, {
                method: 'POST',
                headers: {
                    'accepts': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.props.user.id,
                    fossil_id: this.props.item.id
                })
            })
            .then(response => response.json())
        } else if (this.props.item.kind === 'villagers') {
            fetch(`http://localhost:3000/user_villagers`, {
                method: 'POST',
                headers: {
                    'accepts': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.props.user.id,
                    villager_id: this.props.item.id
                })
            })
            .then(response => response.json())
        } else if (this.props.item.kind === 'seacreatures') {
            fetch(`http://localhost:3000/user_seacreatures`, {
                method: 'POST',
                headers: {
                    'accepts': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.props.user.id,
                    sea_creature_id: this.props.item.id
                })
            })
            .then(response => response.json())
        }
    }

    render(){
        return(
            <div key={this.props.item.id}>
            <h1>{this.props.item.name}</h1>
            <p onClick={this.clickHandler}>Add to profile</p>
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