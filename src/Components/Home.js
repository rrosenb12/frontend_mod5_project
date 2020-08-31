import React from 'react'
import RedditCard from '../Components/RedditCard'

export default class Home extends React.Component{

    state = {
        redditData: []
    }

    componentDidMount(){
        fetch(`https://www.reddit.com/r/AnimalCrossing.json`)
        .then(response => response.json())
        .then(redditData => this.setState({redditData: redditData.data.children.slice(2)}))
    }

    itsCardTime = () => {
        return this.state.redditData.map(rd => <RedditCard key={rd.id} data={rd.data}/>)
    }

    render(){
        return(
            <div className="homecontent">
                <div className="homeimage">
                    <h1>Hello, hello! Welcome to Human Crossing</h1>
                    <p>The platform for connecting with other Humans who like to cross animals!</p>
                </div>
                <div className="redditdata">
                    {this.itsCardTime()}
                </div>
            </div>
        )
    }
}