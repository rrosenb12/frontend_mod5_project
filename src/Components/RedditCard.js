import React from 'react'

export default class RedditCard extends React.Component{

    getUrl = (imgUrl) => {
        let encoded = imgUrl.replace('amp;s', 's')
        let doubleEncoded = encoded.replace('amp;', '')
        let tripleEncoded = doubleEncoded.replace('amp;', '')
        return tripleEncoded
    }

    render(){
    return(
        <div className="redditcard">
            <p>{this.props.data.title}</p>
                {this.props.data.preview ? <img src={this.getUrl(this.props.data.preview.images[0].source.url)} width="300" height="200"/> : null}
            
            <h5>{this.props.data.subreddit_name_prefixed}</h5>
        </div>
    )}
}
