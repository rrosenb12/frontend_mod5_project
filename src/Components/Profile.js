import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


class Profile extends React.Component{

    render(){
        return(    
            <div className="profilepage">
                {this.props.currentUser !== null ?
                <>
                    <div className="username">
                        <h1>{this.props.currentUser.username}</h1>
                    </div>
                    <div className="uservillagers">
                        {this.props.userVillagers.length === 0 ? null :this.props.userVillagers.map(villager => {
                            return <div className="villagercard">
                                <img className="villagericon" src={villager.icon_uri} alt={villager.name}></img>
                                <p className="villagername">{villager.name}</p>
                            </div>
                        })} 
                    </div>
                    <div className="userpics">

                    </div>
                    <div className="userfish">
                        {this.props.userFish.length === 0 ? null :this.props.userFish.map(fish => {
                            return <p>{fish.name}</p>
                        })}
                    </div>
                    <div className="userbugs">
                        {this.props.userBug.length === 0 ? null : this.props.userBug.map(bug => {
                            return <p>{bug.name}</p>
                        })}
                    </div>
                    <div className="userfossils">
                        {this.props.userFossil.length === 0 ? null :this.props.userFossil.map(fossil => {
                            return <p>{fossil.name}</p>
                        })}
                    </div>
                    <div className="userseacreatures">
                        {this.props.userSeacreature.length === 0 ? null : this.props.userSeacreature.map(seacreature => {
                            return <p>{seacreature.name}</p>
                        })}
                    </div>
                </>
            : 
                <>
                    <h1>Please log in or create an account</h1>
                </>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser.currentUser, 
        userVillagers: state.villagers.usersVillagers,
        userFish: state.fish.usersFish,
        userBug: state.bugs.usersBugs,
        userFossil: state.fossils.usersFossils,
        userSeacreature: state.seacreatures.usersSeacreatures
    }
}

export default connect(mapStateToProps)(Profile)