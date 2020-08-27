import React from 'react'

export default class RedditCard extends React.Component{

    render(){
        console.log(this.props.data)
    return(
        <div className="redditcard">
            <p>{this.props.data.title}</p>
                {/* {this.props.data.preview ? console.log(this.props.data.preview.images[0].resolutions[0].url) : null } */}
                {this.props.data.preview ? <img src={this.props.data.thumbnail}/> : null}
                {/* {this.props.data.preview ? <img src={this.props.data.preview.images[0].source.url}/> : null} */}
            
            <h5>{this.props.data.subreddit_name_prefixed}</h5>
        </div>
    )}
}