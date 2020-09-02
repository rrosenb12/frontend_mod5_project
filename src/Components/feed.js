import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import FeedContent from './FeedContent'
// import {fetchTags} from '../actions'

class Feed extends React.Component {

    state={
        tags: [],
        tagFollows: []
    }

    componentWillMount(){
        fetch('http://localhost:3000/tags')
        .then(response => response.json())
        .then(data => this.setState({tags: data}))

        fetch('http://localhost:3000/tag_follows')
        .then(response => response.json())
        .then(data => {
            let tagFollows = data.filter(tF => tF.user_id === this.props.currentUser.id)
            this.setState({tagFollows: tagFollows})
        })
    }

    handleClick = e => {
        fetch('http://localhost:3000/tag_follows', {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({user_id: this.props.currentUser.id, tag_id: e.target.value})
            }
        )
        .then(response => response.json())
        .then(data => this.setState(previousState => {return {tagFollows: [...previousState.tagFollows, data]}}))
    }

    render(){
        console.log(this.state.tagFollows)
    return(
        <>
            <h1>hi</h1>
            <p>What would you like to see in your feed?</p>
            {this.state.tags.map(tag => {
                return <button key={tag.id} value={tag.id} onClick={this.handleClick}>{tag.description}</button>
            })}
            <FeedContent tagFollows={this.state.tagFollows}/>
            </>
        
    ) }
}

export default (Feed)