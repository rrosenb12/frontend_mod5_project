import React from 'react'

export default class Search extends React.Component{

    state={
        searchFor: '',
        searchBy: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <>
                <h1>Search for:</h1>
                <select onChange={this.handleChange}>
                    <option value="Select">Select from Dropdown</option>
                    <option value="Villagers">Villagers</option>
                    <option value="Fish">Fish</option>
                    <option value="Bugs">Bugs</option>
                    <option value="Sea Creatures">Sea Creatures</option>
                    <option value="Fossils">Fossils</option>
                </select>

            </>
        )    
    }
}