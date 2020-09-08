import React from 'react'
import {connect} from 'react-redux'
import {fetchPics} from '../Actions/pictureActions'
import {deleteUserVillager} from '../Actions/villagerActions'
import fishsprite from '../fishsprite.png'
import bugsprite from '../bugsprite.png'
import fossilsprite from '../fossilsprite.png'
import seasprite from '../seasprite.png'
import PhotoCard from './PhotoCard'


class Profile extends React.Component{

    componentDidMount(){
        this.props.fetchPics()
    }

    userPics = () => {
        if (this.props.userPictures === undefined) {
            return null
        } else {
            let pictures = this.props.userPictures.filter(picture => picture.user_id === this.props.currentUser.id)
            return pictures.map(picture => <PhotoCard from='profile' key={picture.id} photo={picture}/> )
        }
    }

    deleteHandler = villager => {
        this.props.deleteUserVillager(villager, this.props.currentUser)
    }

    render(){
        return(    
            <div className="profilepage">
                {this.props.currentUser !== null ?
                <>
                    <div className="username">
                        <h1>{this.props.currentUser.username}</h1>
                    </div>
                    <div className="uservillagers">
                        {this.props.userVillagers.length === 0 ? <h1>Add some Villagers!</h1> : this.props.userVillagers.map(villager => {
                            return <div className="villagercard">
                                <div className="villager">
                                    <div className="villagertop">
                                        <img className="villagericon" src={villager.icon_uri} alt={villager.name}></img>
                                    </div>
                                    <div className="villagerbottom">
                                        <p className="villagername">{villager.name}</p>
                                        <button className="villagerbutton" onClick={() => this.deleteHandler(villager)}>x</button>
                                    </div>
                                </div>
                            </div>
                        })} 
                    </div>
                    <div className="userpics">
                        {this.userPics()}
                    </div>
                    <div className="useritems">
                        <div className="userfish">
                            {this.props.userFish.length === 0 ? 
                                <div>
                                    <p>0 / 80</p>
                                    <img className="itemicon" src={fishsprite} alt="fish plaque"/>
                                </div>
                            :
                                <div>
                                    <p>{this.props.userFish.length} / 80</p>
                                    <img className="itemicon" src={fishsprite} alt="fish plaque"/>
                                </div>
                            }
                        </div>
                        <div className="userbugs">
                            {this.props.userBug.length === 0 ?                                 
                                <div>
                                    <p>0 / 80</p>
                                    <img className="itemicon" src={bugsprite} alt="bug plaque"/>
                                </div> 
                            : 
                                <div>
                                    <p>{this.props.userBug.length} / 80</p>
                                    <img className="itemicon" src={bugsprite} alt="bug plaque"/>
                                </div>
                            }
                        </div>
                        <div className="userfossils">
                            {this.props.userFossil.length === 0 ?                             
                                <div>
                                        <p>0 / 73</p>
                                        <img className="itemicon" src={fossilsprite} alt="fossil plaque"/>
                                </div> 
                            :
                                <div>
                                    <p>{this.props.userFossil.length} / 73</p>
                                    <img className="itemicon" src={fossilsprite} alt="fossil plaque"/>
                                </div>
                            }
                        </div>
                        <div className="userseacreatures">
                            {this.props.userSeacreature.length === 0 ?                
                                <div>
                                        <p>0 / 40</p>
                                        <img className="itemicon" src={seasprite} alt="sea plaque"/>
                                </div>  
                            : 
                            <div>
                                <p>{this.props.userSeacreature.length} / 40</p>
                                <img className="itemicon" src={seasprite} alt="sea plaque"/>
                            </div> 
                            }
                        </div>
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
        userSeacreature: state.seacreatures.usersSeacreatures,
        userPictures: state.pictures.picsArray[0]
    }
}

export default connect(mapStateToProps, {fetchPics, deleteUserVillager})(Profile)