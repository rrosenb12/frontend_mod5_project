import React from 'react'

export default class Home extends React.Component{

    state = {
        redditData: []
    }

    componentDidMount(){
        fetch('https://www.reddit.com/search.json?q=animal%20crossing')
        .then(response => response.json())
        .then(redditData => this.setState({redditData: redditData.data.children}))
    }

    render(){
        return(
            <div className="homecontent">
                <div>
                    <h1>cute image</h1>
                </div>
                <div>
                    <h1>reddit data</h1>
                </div>
            </div>
        )
    }
}