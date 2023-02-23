import React, { Component } from "react";

class LifeCycleApp extends Component {
  constructor(props) {
    super(props);
    console.log("constructor method");
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate method", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate method", prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate method", prevProps, prevState, snapShot);
  }

  componentDidMount() {
    console.log("componentDidMount method");
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 10000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount method");
    clearInterval(this.intervalId);
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError method", error);

    return null;
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch method", error, info);
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render method");
    // if(this.state.count === 3) {
    //     throw new Error("Something went wrong");
    // }
    return (
      <div>
        <h1>Life Cycle App</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleApp;
