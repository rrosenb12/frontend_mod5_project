import React from 'react'
import RedditCard from '../Components/RedditCard'

export default class Home extends React.Component{

    state = {
        redditData: []
    }

    componentDidMount(){
        fetch(`https://www.reddit.com/search.json?q=animal_crossing`)
        .then(response => response.json())
        .then(redditData => this.setState({redditData: redditData.data.children.slice(0, 5)}))
    }

    itsCardTime = () => {
        return this.state.redditData.map(rd => <RedditCard key={rd.id} data={rd.data}/>)
    }

    render(){
        return(
            <div className="homecontent">
                <div className="homeimage">
                    <h1 >cute image</h1>
                </div>
                <div className="redditdata">
                    {this.itsCardTime()}
                </div>
            </div>
        )
    }
}