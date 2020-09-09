import React from "react";
import { connect } from "react-redux";
import { fetchTags } from "../Actions/tagActions";
import { fetchPictureTags, fetchPics } from "../Actions/pictureActions";
import PhotoCard from "./PhotoCard";

class Feed extends React.Component {
  photos = [];

  state = {
    tagIds: [],
    pictures: [],
  };

  componentWillMount() {
    this.props.fetchPics();
    this.props.fetchPictureTags();
    this.props.fetchTags();
    fetch("http://localhost:3000/tag_follows")
      .then((response) => response.json())
      .then((tagFollows) => {
        let userFollows = tagFollows.filter(
          (tF) => tF.user_id === this.props.currentUser.id
        );
        let tagIds = userFollows.map((uF) => uF.tag_id);
        this.setState({ tagIds: tagIds });
      });
  }

  componentDidMount() {
    console.log("mounted");
    this.props.pictureTags.filter((pT) =>
      this.statetagIds.map((tag) => {
        console.log(tag);
        if (pT.tag_id === tag) {
          console.log("hello");
          let photo = this.props.pictures.find(
            (picture) => picture.id === pT.picture_id
          );
          this.photos.push(photo);
          console.log(this.photos);
        }
      })
    );
  }

  handleClick = (e) => {
    fetch("http://localhost:3000/tag_follows", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        tag_id: e.target.value,
      }),
    })
      .then((response) => response.json())
      .then((tagFollow) =>
        this.setState((previousState) => {
          return {
            tagIds: [...previousState.tagIds, tagFollow.tag_id],
          };
        })
      );
  };

  getRelevantPictureTags = (tagIds) => {
    console.log(tagIds);
    this.props.pictureTags.filter((pT) =>
      this.statetagIds.map((tag) => {
        if (pT.tag_id === tag) {
          console.log("hello");
          let photo = this.props.pictures.find(
            (picture) => picture.id === pT.picture_id
          );
          this.photos.push(photo);
          console.log(this.photos);
        }
      })
    );
  };

  renderPhoto = (photo) => {
    return <PhotoCard photo={photo} />;
  };

  render() {
    // console.log(this.state.tagIds)
    return (
      <div className="feeddiv">
        {this.props.tags === undefined ? null : (
          <>
            <h1 className="feedname">
              {this.props.currentUser.username}'s feed
            </h1>
            <div className="feedoptions">
              <p className="feedquestion">
                What would you like to see in your feed?
              </p>
              <div className="feedbuttons">
                {this.props.tags.map((tag) => {
                  return (
                    <button
                      className="feedbutton"
                      key={tag.id}
                      value={tag.id}
                      onClick={this.handleClick}
                    >
                      {tag.description}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* {this.props.pictureTags !== undefined && this.getRelevantPictureTags()} */}
            <div className="photoscontainer">
              {/* {this.photos.map(photo => {photo !== undefined && this.renderPhoto(photo)})} */}
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    tags: state.tags.tagsArray[0],
    pictureTags: state.pictures.pictureTagsArray,
    pictures: state.pictures.picsArray,
  };
};

export default connect(mapStateToProps, {
  fetchTags,
  fetchPictureTags,
  fetchPics,
})(Feed);
