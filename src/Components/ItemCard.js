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

    getMonths = (array) => {
        console.log((this.props.item.availability.split(',')))
        console.log((array.slice[0, -1]))
        let months = {
            "1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June", "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December"
        }
        let monthnums = Object.keys(months)
        console.log(monthnums)
        let monthstrings = []
        // array.forEach(num => {
        //     let simi = monthnums.find(monthnum => monthnum === num)
        //     monthstrings.push(simi)
        // })
    }
    
    extraDetails = () => {
        if (this.props.item.kind === 'villagers'){
        return <div>
            <p>{this.props.item.species}</p> 
            <p>{this.props.item.personality}</p>
            <p>{this.props.item.catch_phrase}</p>
            <p>{this.props.item.birthday}</p>
        </div>         
        } else if (this.props.item.kind === 'fish' || this.props.item.kind === 'bugs' || this.props.item.kind === 'seacreatures') {
            return <div>
            <p>{this.props.item.catch_phrase}</p>
            <p>{this.props.item.price}</p>
            {this.getMonths(this.props.item.availability)}
        </div>     
        }
    }

    render(){
        return(
            <div key={this.props.item.id} className="detailedinfo">
            <h1 className="itemtitle"> {this.props.item.name}</h1>
            <img alt="item"src={this.props.item.image_uri} className="itemimage"/>
            {this.extraDetails(this.props.item)}
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