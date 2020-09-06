import React from 'react'
import redditlogo from '../redditlogo.png'
export default class RedditCard extends React.Component{

    truncateString = (string) => {
        if (string.length <= 70) {
            return string
        } else {
            return string.slice(0, 70) + '...'
        }
    }

    getUrl = (imgUrl) => {
        let encoded = imgUrl.replace('amp;s', 's').replace('amp;', '').replace('amp;', '')
        return encoded
    }

    render(){
    return(
        <div className="redditcard">
            <div className="forthaborder">
            <div className="rr">
                <div className='rtc'>
            <p className="reddittitle">{this.truncateString(this.props.data.title)}</p>
            </div>
                {this.props.data.preview ? <div className="redditimgcontainer"><img className="redditimg" src={this.getUrl(this.props.data.preview.images[0].source.url.replace('amp;s', 's'))} alt=""/></div>  : <div className="redditimgcontainer"><img className="redditimg" src={redditlogo} alt=""/></div>}
            
            <div className="reddithrefcontainer"><a href={`https://www.reddit.com${this.props.data.permalink}`} target="_blank" rel="noopener noreferrer" className="reddithref"> To the Post!</a></div>
            
            </div>
            </div>
        </div>
    )}
}