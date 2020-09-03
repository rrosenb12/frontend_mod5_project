import React from 'react'
import { connect } from 'react-redux'
import {userVillagersState} from '../Actions/villagerActions' 

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
                    user_id: this.props.currentUser.id,
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
                    user_id: this.props.currentUser.id,
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
                    user_id: this.props.currentUser.id,
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
                    user_id: this.props.currentUser.id,
                    villager_id: this.props.item.id
                })
            })
            .then(response => response.json())
            .then(this.props.userVillagersState(this.props.item))
        } else if (this.props.item.kind === 'seacreatures') {
            fetch(`http://localhost:3000/user_seacreatures`, {
                method: 'POST',
                headers: {
                    'accepts': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: this.props.currentUser.id,
                    sea_creature_id: this.props.item.id
                })
            })
            .then(response => response.json())
        }
    }

    getMonths = (array) => {
        let actualArray = (array.replace('[','').replace(']','').split(', '))
        let firstNum = actualArray[0]
        let lastNum = actualArray[actualArray.length - 1]
        let months = {
            "1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June", "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December"
        }
        if (firstNum == 1 && lastNum == 12){
            return <p>All year {this.props.item.hours === '' ? 'all day' : this.props.item.hours}</p>
        } else {
        return <p>{months[firstNum]} to {months[lastNum]}, {this.props.item.hours === '' ? 'all day' : this.props.item.hours}</p>
        }
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
            <p>"{this.props.item.catch_phrase}"</p>
            <p>{this.props.item.price} Bells</p>
            {this.getMonths(this.props.item.availability)}
        </div>     
        } else if (this.props.item.kind === 'fossils') {
            return <div>
                <p>{this.props.item.museum_phrase}</p>
                <p>{this.props.item.price} Bells</p>
            </div>
        }
    }

    render(){
        return(
            <div key={this.props.item.id} className="detailedinfo">
                <div className="baseinfo">
                    <h1 className="itemtitle"> {this.props.item.name}</h1>
                    <p onClick={this.clickHandler}>Add to profile</p>
                </div>
                <div className="detailpic">
                    <img alt="item"src={this.props.item.image_uri} className="itemimage"/>
                </div>
                <div className="extradetails">
                    {this.extraDetails(this.props.item)}
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        item: state.items.state.item,
        currentUser: state.currentUser.currentUser
    }
}

export default connect(mapStateToProps, {userVillagersState})(ItemCard)