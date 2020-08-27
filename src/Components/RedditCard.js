import React from 'react'

export default class RedditCard extends React.Component{
    render(){
        console.log(this.props.data)
    return(
        <div className="redditcard">
            <h5>
                {this.props.data.title}
                {/* {this.props.data.preview ? console.log(this.props.data.preview.images[0].resolutions[0].url) : null } */}
                {/* {this.props.data.preview ? <img src={this.props.data.preview.images[0].source.url}/> : null} */}
            </h5>
        </div>
    )}
}