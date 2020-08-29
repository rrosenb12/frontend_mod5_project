import React from 'react'
import {connect} from 'react-redux'
import {clickItem} from '../actions'

class SearchResults extends React.Component{

    handleClick = e => {
        let result = this.props.searchArray.find(result => result.name === e.target.parentNode.firstChild.innerText)
        this.props.clickItem(result)
    }

    indi = () => {
        return this.props.searchArray.map(result => 
            <div key={result.id}>
                <h1>{result.name}</h1>
                <p onClick={this.handleClick} >Click for more...</p>
            </div>
        )
    }

    render(){
    return(
        <>
        {this.indi()}
        </>
    )}
}


export default connect(null, {clickItem})(SearchResults)