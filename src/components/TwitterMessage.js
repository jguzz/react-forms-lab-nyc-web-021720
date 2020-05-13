import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  charRemaining = () => { 
    return( this.props.maxChars - this.state.message.length)
  }
  render() {
    console.log(this.state.message)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessage} value={this.state.message} type="text" name="message" id="message" />
    <p>Number of Characters left: {this.charRemaining()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
