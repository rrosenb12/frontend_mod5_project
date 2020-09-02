import React from 'react'
import {connect} from 'react-redux'
import {fetchVillagers, fetchFish, fetchBugs, fetchSeacreatures, fetchFossils, unClickItem} from '../Actions/actions'
import ItemCard from './ItemCard'
import SearchResults from './SearchResults'

class SearchVillagers extends React.Component{

    state={
        searchFor: '',
        searchBy: '',
        paramsSet: false,
        searchValue: '',
        searchArray: [],
    }

    handleSearchForChange = (e) => {
        let array = this.state.searchArray !== 0 && []
        this.props.unClickItem()
        this.setState({
            searchFor: e.target.value,
            paramsSet: false,
            searchArray: array
        }, () => {
            this.state.searchFor === 'Villagers' && this.props.fetchVillagers()
            this.state.searchFor === 'Fish' && this.props.fetchFish()
            this.state.searchFor === 'Bugs' && this.props.fetchBugs()
            this.state.searchFor === 'Sea Creatures' && this.props.fetchSeacreatures()
            this.state.searchFor === 'Fossils' && this.props.fetchFossils()
        })
    }

    handleSearchByChange = (e) => {
        this.props.unClickItem()
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
                <div className="searchby">
                    <h1>Search by:</h1>
                    <select onChange={this.handleSearchByChange}>
                        <option value="Select">Select from Dropdown</option>
                        <option value="Name">Name</option>
                        <option value="Personality">Personality</option>
                        <option value="Species">Species</option>
                    </select>
                </div>
            )
        } else if (this.state.searchFor === 'Fish' || this.state.searchFor === 'Bugs' || this.state.searchFor === 'Sea Creatures') {
            return (
                <div className="searchby">
                    <h1>Search by:</h1>
                    <select onChange={this.handleSearchByChange}>
                        <option value="Select">Select from Dropdown</option>
                        <option value="All">All</option>
                        <option value="Name">Name</option>
                        <option value="Availability">Availability</option>
                        <option value="Price">Price</option>
                    </select>
                </div>
            )
        } else if (this.state.searchFor === 'Fossils') {
            return (
                <div className="searchby">
                    <h1>Search by:</h1>
                    <select onChange={this.handleSearchByChange}>
                        <option value="Select">Select from Dropdown</option>
                        <option value="All">All</option>
                        <option value="Name">Name</option>
                        <option value="Price">Price</option>
                    </select>
                </div>
            )
        }
    }

    handleSubmit = (e) => {
        this.props.unClickItem()
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
                let timeArrays = array.map(item => 
                    item.availability.replace('[', '').replace(']','').split(', ')
                )
                let indexes = []
                timeArrays.map(time => time.includes(this.state.searchValue) ? indexes.push(timeArrays.indexOf(time)) : null)
                let correct = []
                indexes.map(index => correct.push(array[index]))
                this.setState({searchArray: correct})
            } else if (this.state.searchBy === 'Price') {
                let items = array.filter(fish => fish.price > this.state.searchValue)
                items.sort((a,b) => a.price > b.price ? 1 : -1)
                this.setState({searchArray: items})
            }
        }
        else if (this.state.searchFor === 'Fossils') {
            if (this.state.searchBy === 'All') {
                let fossilsArray = this.props.fossils
                this.setState({searchArray: fossilsArray})
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

    reset = () => {
        this.setState({
            searchFor: '',
            searchBy: '',
            searchValue: '',
            paramsSet: false
        })
    }

    render(){
        console.log(this.props.currentUser)
        return(
            <div className="searchpage">
                <div className="searchformcontainer">
                    <div className="searchfor">
                <h1>Search for:</h1>
                <select onChange={this.handleSearchForChange} value={this.state.searchFor}>
                    <option value="Select">Select from Dropdown</option>
                    <option value="Villagers">Villagers</option>
                    <option value="Fish">Fish</option>
                    <option value="Bugs">Bugs</option>
                    <option value="Sea Creatures">Sea Creatures</option>
                    <option value="Fossils">Fossils</option>
                </select>
                </div>
                {this.handleSearchBy()}
                {this.state.paramsSet && 
                    <form onSubmit={this.handleSubmit} className="searchbar">
                        <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange}/>
                        <input type="submit"/>
                    </form>
                }
                <button onClick={this.reset}>Reset Form</button>
                </div>
                <div className="searchresultscontainer">
                    {this.state.paramsSet && <SearchResults searchArray={this.state.searchArray}/>}
                </div>
                <div className="selecteditemcontainer">
                {this.props.item && <ItemCard currentUser={this.props.currentUser}/>}
                </div>     
            </div>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.currentUser,
        villagers: state.villagers.state, 
        fish: state.fish.state, 
        bugs: state.bugs.state, 
        seacreatures: state.seacreatures.state, 
        fossils: state.fossils.state,
        item: state.items.clicked
    }
}

export default connect(mapStateToProps, {fetchVillagers, fetchFish, fetchBugs, fetchSeacreatures, fetchFossils, unClickItem})(SearchVillagers)