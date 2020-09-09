import React from 'react'
import {connect} from 'react-redux'
import {clickItem} from '../Actions/actions'

class SearchResults extends React.Component{

    handleClick = e => {
        let result = this.props.searchArray.find(result => result.name === e.target.parentNode.firstChild.innerText)
        this.props.clickItem(result)
    }

    indi = () => {
        return this.props.searchArray.map(result => 
            <div className="basicitemcard">
                <div key={result.id}>
                    <h1>{result.name}</h1>
                    {result.kind === 'fossils' ? <img className="itemicon" alt={result.name} src={result.image_uri}/> : <img className="itemicon" src={result.icon_uri} alt="item icon"/>}                    
                    <p onClick={this.handleClick} className="moreinfo">Click for more...</p>
                </div>
            </div>
        )
    }

    render(){
        return(
            this.indi()
        )
    }
}

export default connect(null, {clickItem})(SearchResults)