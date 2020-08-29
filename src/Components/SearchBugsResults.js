import React from 'react'

export default class SearchBugsResults extends React.Component{

    indi = () => {
        return this.props.searchArray.map(result => <h1>{result.name}</h1>)
    }

    render(){
    return(
        <>
        {this.indi()}
        </>
    )}
}