import React, {Component} from "react";
import {Redirect, Prompt} from "react-router-dom";
import PropTypes from 'prop-types';
import '../../../sass/twitter-left-side.sass';
import '../../../sass/twitter-center-side.sass';
import EditBox from "../../Common/EditBox";

class EditProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.profile.name,
            mention: props.profile.mention,
            description: props.profile.description,
            saved: false,
            isBlocking: false,
        };
    }

    onNameChange = (event) => this.setState({name: event.target.value, isBlocking: true});

    onMentionChange = (event) => this.setState({mention: event.target.value, isBlocking: true});

    onDescriptionChange = (event) => this.setState({description: event.target.value, isBlocking: true});

    save = () => this.setState({saved: true}, () => this.props.save(this.state));

    render() {
        return <>
            <Prompt when={!this.state.saved && this.state.isBlocking} message="Are you sure? you made some changes" />
            {
                this.state.saved
                    ? (<Redirect to="/profile"/>)
                    : (
                        <div id="profileCenter" className="center-container">
                            <div className="profile-title">
                                <div className="title">Edit Your Profile</div>
                                <button className="basic-button edit-profile-button" onClick={this.save}>Save</button>
                            </div>
                            <div className="profile-details">
                                <div className="profile-basic-info">
                                    <div>
                                        <i><img className="profile-picture" src={this.props.profile.imgSrc} alt="profile"/></i>
                                    </div>
                                    <div>
                                        <span>Full Name:</span>
                                        <EditBox wrapperId="profileName" value={this.state.name}
                                                 onChangeFunc={this.onNameChange}/>
                                    </div>
                                    <div>
                                        <span>Mention Tag:</span>
                                        <EditBox wrapperClassName="profile-mention" value={this.state.mention}
                                                 onChangeFunc={this.onMentionChange}/>
                                    </div>
                                </div>
                                <div>
                                    <span>Profile Description:</span>
                                    <EditBox value={this.state.description} onChangeFunc={this.onDescriptionChange}/>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    }
}

const Profile = PropTypes.shape({
    name: PropTypes.string.isRequired,
    mention: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
})

EditProfilePage.propTypes = {
    profile: Profile,
}

export default EditProfilePage;
