import React from 'react'
import RedditCard from '../Components/RedditCard'
import forwards from '../forwards.png'
import backwards from '../backwards.png'

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
        return this.state.redditData.slice(0,5).map(rd => <RedditCard key={rd.id} data={rd.data}/>)
    }

    render(){
        return(
            <div className="homecontent">
                <h1>Hello, hello! Welcome to Human Crossing</h1>
                <p>The platform for connecting with other Humans who like to cross animals!</p>
                <h3>Currently on Reddit:</h3>
                <div className="scrollingwrapper">
                    <div className="redditdata">
                        <img src={backwards} height='100' className="backbutton"/>
                        {this.itsCardTime()}
                        <img src={forwards} height='100' className="morebutton"/>
                    </div>
                </div>
            </div>
        )
    }
}