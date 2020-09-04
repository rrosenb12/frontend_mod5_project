import React from 'react'
import { connect } from 'react-redux'
import {createUserVillagers, deleteUserVillager} from '../Actions/villagerActions' 
import {createUserFish} from '../Actions/fishActions'
import {createUserBugs} from '../Actions/bugActions'
import {createUserFossils} from '../Actions/fossilActions'
import {createUserSeacreatures} from '../Actions/seacreatureActions'

 class ItemCard extends React.Component {

    clickHandler = () => {
        if(this.props.item.kind === 'fish') {
            this.props.createUserFish(this.props.item, this.props.currentUser)
        } else if (this.props.item.kind === 'bugs') {
            this.props.createUserBugs(this.props.item, this.props.currentUser)
        } else if (this.props.item.kind === 'fossils') {
            this.props.createUserFossils(this.props.item, this.props.currentUser)
        } else if (this.props.item.kind === 'villagers') {
            this.props.createUserVillagers(this.props.item, this.props.currentUser)
        } else if (this.props.item.kind === 'seacreatures') {
            this.props.createUserSeacreatures(this.props.item, this.props.currentUser)
        }
    }

    deleteHandler = () => {
        if(this.props.item.kind === 'fish') {
            this.props.createUserFish(this.props.item, this.props.currentUser)
        } else if (this.props.item.kind === 'bugs') {
            this.props.createUserBugs(this.props.item, this.props.currentUser)
        } else if (this.props.item.kind === 'fossils') {
            this.props.createUserFossils(this.props.item, this.props.currentUser)
        } else if (this.props.item.kind === 'villagers') {
            this.props.deleteUserVillager(this.props.item, this.props.currentUser)
        } else if (this.props.item.kind === 'seacreatures') {
            this.props.createUserSeacreatures(this.props.item, this.props.currentUser)
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
            <p>"{this.props.item.catch_phrase}"</p>
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
                <p>"{this.props.item.museum_phrase}"</p>
                <p>{this.props.item.price} Bells</p>
            </div>
        }
    }

    render(){
        console.log(this.props.usersVillagers)
        return(
            <div key={this.props.item.id} className="detailedinfo">
                <div className="baseinfo">
                    <h1 className="itemtitle"> {this.props.item.name}</h1>
                    {this.props.usersVillagers.find(villager => villager.id === this.props.item.id) ? <p onClick={this.deleteHandler}>Remove from Profile</p> : <p onClick={this.clickHandler}>Add to profile</p>}
                    
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
        currentUser: state.currentUser.currentUser,
        usersVillagers: state.villagers.usersVillagers
    }
}

export default connect(mapStateToProps, {createUserVillagers, deleteUserVillager, createUserFish, createUserBugs, createUserFossils, createUserSeacreatures})(ItemCard)