import React from 'react'
import RedditCard from '../Components/RedditCard'
import {connect} from 'react-redux'
import {fetchTags} from '../Actions/actions'

class Home extends React.Component{

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
                <h1>Hello, hello! Welcome to Human Crossing</h1>
                <p>The platform for connecting with other Humans who like to cross animals!</p>
                <h3>Currently on Reddit:</h3>
                <div className="scrollingwrapper">
                    <div className="redditdata">
                        {this.itsCardTime()}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {fetchTags})(Home)