import React from 'react'
import {connect} from 'react-redux'
import {fetchVillagers, fetchFish, fetchBugs, fetchSeacreatures, fetchFossils} from '../actions'
import SearchVillagersResults from './SearchResults'
import SearchFishResults from './SearchFishResults'
import SearchBugsResults from './SearchBugsResults'
import SearchSeacreaturesResults from './SearchSeacreaturesResults'
import SearchFossilsResults from './SearchFossilsResults'

class SearchVillagers extends React.Component{

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
            this.state.searchFor === 'Bugs' && this.props.fetchBugs()
            this.state.searchFor === 'Sea Creatures' && this.props.fetchSeacreatures()
            this.state.searchFor === 'Fossils' && this.props.fetchFossils()
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
        } else if (this.state.searchFor === 'Fish' || this.state.searchFor === 'Bugs' || this.state.searchFor === 'Sea Creatures') {
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
        } else if (this.state.searchFor === 'Fossils') {
            return (
                <>
                    <h1>Search by:</h1>
                    <select onChange={this.handleSearchByChange}>
                        <option value="Select">Select from Dropdown</option>
                        <option value="All">All</option>
                        <option value="Name">Name</option>
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
        else if (this.state.searchFor === 'Fish' || this.state.searchFor === 'Bugs' || this.state.searchFor === 'Sea Creatures') {
            let array = []
            console.log(array)
            if (this.state.searchFor === 'Fish' ) {
                array = this.props.fish
            } else if (this.state.searchFor === 'Bugs') {
                array = this.props.bugs
            } else if (this.state.searchFor === 'Sea Creatures') {
                array = this.props.seacreatures
            }
            if (this.state.searchBy === 'All') {
                let items = array
                this.setState({searchArray: items})
            } else if (this.state.searchBy === 'Name') {
                let items = array.filter(item => item.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
                this.setState({searchArray: items})
            } else if (this.state.searchBy === 'Availability') {
                let items = array.filter(item => item.availability.includes(this.state.searchValue))
                this.setState({searchArray: items})
            } else if (this.state.searchBy === 'Price') {
                let items = array.filter(fish => fish.price > this.state.searchValue)
                items.sort((a,b) => a.price > b.price ? 1 : -1)
                this.setState({searchArray: items})
            }
        }
        else if (this.state.searchFor === 'Fossils') {
            if (this.state.searchBy === 'All') {
                let fossilsArray = this.props.fossils
                this.setState({searchArray: fossilsArray}, () => {console.log(this.state.searchArray)})
            } else if (this.state.searchBy === 'Name') {
                let fossilsArray = this.props.fossils.filter(fossil => fossil.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
                this.setState({searchArray: fossilsArray})
            } else if (this.state.searchBy === 'Price') {
                let fossilsArray = this.props.fossils.filter(fossil => fossil.price > this.state.searchValue)
                fossilsArray.sort((a,b) => a.price > b.price ? 1 : -1)
                this.setState({searchArray: fossilsArray})
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
                {this.state.searchFor === 'Bugs' && <SearchBugsResults searchArray={this.state.searchArray}/>}
                {this.state.searchFor === 'Sea Creatures' && <SearchSeacreaturesResults searchArray={this.state.searchArray}/>}
                {this.state.searchFor === 'Fossils' && <SearchFossilsResults searchArray={this.state.searchArray}/>}
            </>
        )    
    }
}

const mapStateToProps = (state) => {
    return {villagers: state.villagers.state, fish: state.fish.state, bugs: state.bugs.state, seacreatures: state.seacreatures.state, fossils: state.fossils.state}
}

export default connect(mapStateToProps, {fetchVillagers, fetchFish, fetchBugs, fetchSeacreatures, fetchFossils})(SearchVillagers)