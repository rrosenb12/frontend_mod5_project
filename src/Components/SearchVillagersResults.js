import React from 'react'

export default class SearchVillagersResults extends React.Component{

    indi = () => {
        return this.props.searchArray.map(result => <h1>{result.name}</h1>)
    }

    render(){
    return(
        <>
        {this.indi()}
        <h1>hi</h1>
        </>
    )}
}