import { Component } from "react";

import "./feedbackandthank.css";

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  };

  onClickEmoji = () => {
    this.setState({
      isFeedbackGiven: true,
    });
  };
  onBack = () => {
    this.setState((prevState) => ({
      isFeedbackGiven: prevState.isFeedbackGiven ? false : true,
    }));
  };

  renderFeedbackQuestion = () => {
    const { resources } = this.props;
    const { emojis } = resources;

    return (
      <div className="feedback-card-container">
        <h1 className="main-heading-question">
          How satisfied are you with our <br />
          customer support performance?
        </h1>

        <ul className="emoji-list">
          {emojis.map((eachEmoji) => (
            <li key={eachEmoji.id} className="emoji-item">
              <button
                type="button"
                className="emoji-button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-image"
                />
                <p className="emoji-name">{eachEmoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  renderThankYou = () => {
    const { resources } = this.props;
    const { loveEmojiUrl } = resources;

    return (
      <div className="feedback-card-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="thank-you-description">
          We will use your feedback to improve our customer support performance
        </p>
        <button type="button" className="back-button" onClick={this.onBack}>
          Back
        </button>
      </div>
    );
  };

  render() {
    const { isFeedbackGiven } = this.state;

    return (
      <div className="feedback-container">
        {isFeedbackGiven
          ? this.renderThankYou()
          : this.renderFeedbackQuestion()}
      </div>
    );
  }
}

export default Feedback;
