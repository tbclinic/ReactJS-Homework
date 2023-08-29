import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    console.log("Class based event handling.");
  }

  render() {
    return (
      <>
        This is a class based component
        <br />
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

export default ClassEvent;
