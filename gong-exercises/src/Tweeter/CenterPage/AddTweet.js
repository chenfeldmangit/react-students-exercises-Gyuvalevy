import React, {Component} from "react";
import PropTypes from "prop-types";
import '../../sass/twitter-add-tweet.sass';

class AddTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            okToSend: false,
        };
    }

    submitTweet = () => {
        if (this.state.okToSend) {
            this.setState({content: ''});
            return this.props.sendTweet(this.state.content);
        }
    }

    onTextAreaChange = (event) => {
        this.setState({
            content: event.target.value,
            okToSend: !!event.target.value && event.target.value.length >= 3
        });
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
                            onChange={this.onTextAreaChange}
                        />
                    </label>
                </div>
                <div>
                    <button
                        className="basic-button edit-profile-button"
                        id="addTweetButton"
                        onClick={this.submitTweet}
                        disabled={!this.state.okToSend}>
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
    sendTweet: PropTypes.func.isRequired,
}
