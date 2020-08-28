import React from 'react'
import {connect} from 'react-redux'
import {fetchVillagers, fetchFish} from '../actions'
import SearchVillagersResults from './SearchVillagersResults'
import SearchFishResults from './SearchFishResults'

class Search extends React.Component{

    state={
        searchFor: '',
        searchBy: '',
        paramsSet: false,
        searchValue: '',
        searchArray: []
    }

    handleSearchForChange = (e) => {
        this.setState({
            searchFor: e.target.value
        }, () => {
            this.state.searchFor === 'Villagers' && this.props.fetchVillagers()
            this.state.searchFor === 'Fish' && this.props.fetchFish()
        })
    }

    handleSearchByChange = (e) => {
        this.setState({
            searchBy: e.target.value,
            paramsSet: true
        })
    }

    handleSearchChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSearchBy = () => {
        if (this.state.searchFor === '' || this.state.searchFor === 'Select') {
            return null 
        } else if (this.state.searchFor === 'Villagers') {
            return (
                <>
                    <h1>Search by:</h1>
                    <select onChange={this.handleSearchByChange}>
                        <option value="Select">Select from Dropdown</option>
                        <option value="Name">Name</option>
                        <option value="Personality">Personality</option>
                        <option value="Species">Species</option>
                    </select>
                </>
            )
        } else if (this.state.searchFor === 'Fish') {
            console.log(this.props.fish)
            return (
                <>
                    <h1>Search by:</h1>
                    <select onChange={this.handleSearchByChange}>
                        <option value="Select">Select from Dropdown</option>
                        <option value="All">All</option>
                        <option value="Name">Name</option>
                        <option value="Availability">Availability</option>
                        <option value="Price">Price</option>
                    </select>
                </>
            )
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.searchFor === 'Villagers') {
            if (this.state.searchBy === 'Name'){
                let villagersArray = this.props.villagers.filter(villager => villager.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
                this.setState({searchArray: villagersArray})
            } else if (this.state.searchBy === 'Personality'){
                let villagersArray = this.props.villagers.filter(villager => villager.personality.toLowerCase() === this.state.searchValue.toLowerCase())
                this.setState({searchArray: villagersArray})
            } else if (this.state.searchBy === 'Species') {
                let villagersArray = this.props.villagers.filter(villager => villager.species.toLowerCase() === this.state.searchValue.toLowerCase())
                this.setState({searchArray: villagersArray})
            }
        } 
        else if (this.state.searchFor === 'Fish') {
            if (this.state.searchBy === 'All') {
                let fishArray = this.props.fish
                this.setState({searchArray: fishArray})
            }
        }
    }

    render(){
        return(
            <>
                <h1>Search for:</h1>
                <select onChange={this.handleSearchForChange}>
                    <option value="Select">Select from Dropdown</option>
                    <option value="Villagers">Villagers</option>
                    <option value="Fish">Fish</option>
                    <option value="Bugs">Bugs</option>
                    <option value="Sea Creatures">Sea Creatures</option>
                    <option value="Fossils">Fossils</option>
                </select>
                {this.handleSearchBy()}
                {this.state.paramsSet && 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange}/>
                    <input type="submit"/>
                </form>}
                {this.state.searchFor === 'Villagers' && <SearchVillagersResults searchArray={this.state.searchArray}/>}
                {this.state.searchFor === 'Fish' && <SearchFishResults searchArray={this.state.searchArray}/>}
            </>
        )    
    }
}

const mapStateToProps = (state) => {
    return {villagers: state.villagers.state, fish: state.fish.state}
}

export default connect(mapStateToProps, {fetchVillagers, fetchFish})(Search)