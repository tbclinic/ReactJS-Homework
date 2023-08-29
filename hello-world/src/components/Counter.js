import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    //this.increment = this.increment.bind(this)
  }

  increment = () => {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Count value is: {this.state.counter} </h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
