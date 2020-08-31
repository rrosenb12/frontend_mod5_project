import React from 'react'

export default class RedditCard extends React.Component{

    getUrl = (imgUrl) => {

        let encoded = imgUrl.replace('amp;s', 's').replace('amp;', '').replace('amp;', '')
        return encoded

    }

    render(){
    return(
        <div className="redditcard">
            <p className="reddittitle">{this.props.data.title}</p>
                {this.props.data.preview ? <div className="redditimgcontainer"><img className="redditimg" src={this.getUrl(this.props.data.preview.images[0].source.url.replace('amp;s', 's'))} alt="" width="300" height="200"/></div>  : null}
            
            <div className="reddithrefcontainer"><a href={`https://www.reddit.com${this.props.data.permalink}`} target="_blank" rel="noopener noreferrer" className="reddithref">{this.props.data.subreddit_name_prefixed}</a></div>
        </div>
    )}
}