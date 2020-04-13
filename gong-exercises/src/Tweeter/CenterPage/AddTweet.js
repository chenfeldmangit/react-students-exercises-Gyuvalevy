import React, {Component} from "react";
import '../../css/twitter-add-tweet.css';
import PropTypes from "prop-types";

class AddTweet extends Component {
    constructor() {
        super();
        this.state = {content: 'lulu'};
    }

    render() {
        return (
            <div id="addTweet" className="text-area">
                <div className="add-area">
                    <label htmlFor="addTweetTextArea">
                        <textarea
                            id="addTweetTextArea"
                            placeholder="What&apos;s happening"
                            rows="5"
                            value={this.state.content}
                            onChange={(event => this.setState({content: event.target.value}))}
                        />
                    </label>
                </div>
                <div>
                    <button className="basic-button edit-profile-button" id="addTweetButton"
                            onClick={() => this.props.sendTweet(this.state.content)}>
                        Tweet
                    </button>
                </div>
                {/* <div class="post-actions">*/}
                {/*         <div class="action"><i class="small-icon icon-space-pad speech-bubble icon-hover"></i><span>117</span></div>*/}
                {/*         <div class="action"><i class="small-icon icon-space-pad retweet icon-hover"></i><span>31</span></div>*/}
                {/*         <div class="action"><i class="small-icon icon-space-pad heart icon-hover"></i><span>300</span></div>*/}
                {/*         <div class="action"><i class="small-icon icon-space-pad upload icon-hover"></i></div>*/}
                {/* </div>*/}
            </div>
        );
    }
}

export default AddTweet;

AddTweet.propTypes = {
    sendTweet: PropTypes.func,
}
