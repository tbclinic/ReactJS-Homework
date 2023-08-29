import { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <h1 style={{ color: "red" }}>
        Message: {this.props.messagecontent} {this.props.messagecode}
      </h1>
    );
  }
}
