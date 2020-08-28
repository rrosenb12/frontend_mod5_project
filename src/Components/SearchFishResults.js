import React from 'react'

export default class SearchFishResults extends React.Component{

    indi = () => {
        return this.props.searchArray.map(result => <h1>{result.name}</h1>)
    }

    render(){
        // console.log(this.props.searchArray)
    return(
        <>
        {this.indi()}
        <h1>hi</h1>
        </>
    )}
}